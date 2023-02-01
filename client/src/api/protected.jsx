import axios from "axios";

export const getUser = async (token) => {
  try {
    const res = await axios.get("/api/users/user", { headers: { Authorization: token } });
    return res;
  } catch (error) {
    throw error;
  }
};
