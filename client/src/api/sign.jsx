import { useMutation } from "react-query";

import axios from "axios";

/*SignIn*/

export const axiosSignIn = async (values) => {
  try {
    const res = await axios.post("/api/auth/signin", values);
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

/*SignUp*/
const axiosSignUp = async ({ values, token }) => {
  try {
    return await axios.post("/api/users", values, { headers: { Authorization: token } });
  } catch (error) {
    throw error.response.data;
  }
};

export function useSignUp() {
  return useMutation(axiosSignUp, {});
}
