import { useQuery } from "react-query";
import axios from "axios";

/*getProducts*/

const getProductsAxios = async (token) => {
  return await axios.get("/api/products", { headers: { Authorization: token } });
};

export const useGetProducts = (token) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProductsAxios(token),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchInterval: false,
    refetchIntervalInBackground: false,
    retry: 1,
  });
  return { data: data?.data, error, isLoading };
};
