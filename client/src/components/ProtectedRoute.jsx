import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

import { getUser } from "../api/protected";

const ProtectedRoute = () => {
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!token) navigate("/");
    getUser(token)
      .then((res) => {
        if (res.data.roles?.includes("user") && location.pathname === "/analysis") {
          navigate("/products");
          toast("The user dosen`t have permissions", {
            duration: 4000,
            style: { backgroundColor: "#9f1239", color: "#f8fafc", fontWeight: "bold" },
          });
        }
      })
      .catch((error) => {
        if (error.status !== 200) navigate("/");
        toast(error.response.data.msg, {
          duration: 4000,
          style: { backgroundColor: "#9f1239", color: "#f8fafc", fontWeight: "bold" },
        });
      });
  }, [location, token]);

  return <Outlet />;
};

export default ProtectedRoute;
