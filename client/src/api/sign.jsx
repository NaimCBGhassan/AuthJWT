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
