import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "axios";

/*getProducts*/

const axiosGetUsers = async (token) => {
  try {
    const res = await axios.get("/api/products", { headers: { Authorization: token } });
    return res?.data;
  } catch (error) {
    return error;
  }
};

export const useGetProducts = (token) => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => axiosGetUsers(token),
    refetchOnWindowFocus: false,
    refetchInterval: false,
    retry: 1,
  });
};

/*Create Products */
const axiosCreateProducts = async ({ values, token }) => {
  return axios.post("/api/products", values, { headers: { Authorization: token } });
};

export function useCreateProducts() {
  const queryClient = useQueryClient();
  return useMutation(axiosCreateProducts, {
    onSuccess: async () => {
      await queryClient.invalidateQueries(["products"]);
    },
  });
}

/*Update Products*/
const axiosUpdateProducts = async ({ newValues, _id, token }) => {
  try {
    return await axios.put(`/api/products/${_id}`, newValues, { headers: { Authorization: token } });
  } catch (error) {
    return error.responde.data;
  }
};

export function useUpdateProducts() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: axiosUpdateProducts,
    onSuccess: async () => await queryClient.invalidateQueries(["products"]),
  });
}

/*Delete Products*/
const axiosDeleteProducts = async ({ _id, token }) => {
  try {
    return await axios.delete(`/api/products/${_id}`, { headers: { Authorization: token } });
  } catch (error) {
    return error.responde.data;
  }
};

export function useDeleteProducts() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: axiosDeleteProducts,
    onSuccess: async () => {
      await queryClient.invalidateQueries(["products"]);
    },
  });
}
