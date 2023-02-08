import axios from "axios";
import { useQuery } from "react-query";

export const axiosGetUser = async (token) => {
  try {
    const res = await axios.get("/api/users/user", { headers: { Authorization: token } });
    return res?.data;
  } catch (error) {
    return error;
  }
};

export function useGetUser(token) {
  return useQuery({
    queryKey: ["user"],
    queryFn: () => axiosGetUser(token),
    refetchOnWindowFocus: false,
    refetchInterval: false,
    retry: false,
  });
}
