export const getUser = async () => {
  try {
    return await axios.get("/api/users", { headers: { Authorization: token } });
    console.log(res);
  } catch (error) {
    return error;
  }
};
