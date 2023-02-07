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
