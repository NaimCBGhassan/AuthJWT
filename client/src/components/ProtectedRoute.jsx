import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { AiOutlineLoading } from "react-icons/ai";

import { useGetUser } from "../api/protected";

const ProtectedRoute = () => {
  const token = sessionStorage.getItem("token");

  const location = useLocation();
  const { data, isLoading } = useGetUser(token);

  const flag = token && location.pathname === "/analysis" && data?.roles[0] === "user";

  useEffect(() => {
    if (!token && !isLoading) {
      toast(data.response.data.msg, {
        duration: 2000,
        style: { backgroundColor: "#9f1239", color: "#f8fafc", fontWeight: "bold", position: "relative", top: "30px" },
      });
    }

    if (flag) {
      toast("The user dosen`t have permissions", {
        duration: 2000,
        style: { backgroundColor: "#9f1239", color: "#f8fafc", fontWeight: "bold", position: "relative", top: "30px" },
      });
    }
  }, [location.pathname, token, data]);

  if (isLoading)
    return (
      <div className=" w-full flex justify-center mt-5">
        <AiOutlineLoading className="animate-spin h-20 w-20 text-slate-50   " />
      </div>
    );

  if (!token) return <Navigate to="/" />;

  if (token) {
    if (flag) return <Navigate to="/products" />;
    return <Outlet />;
  }
};

export default ProtectedRoute;
