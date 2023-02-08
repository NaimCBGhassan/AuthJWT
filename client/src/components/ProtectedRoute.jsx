import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { AiOutlineLoading } from "react-icons/ai";

import { useGetUser } from "../api/protected";

const ProtectedRoute = () => {
  const token = sessionStorage.getItem("token");

  const navigate = useNavigate();
  const location = useLocation();

  const { data, isLoading } = useGetUser(token);

  useEffect(() => {
    if (!token && !isLoading) {
      toast(data.response.data.msg, {
        duration: 4000,
        style: { backgroundColor: "#9f1239", color: "#f8fafc", fontWeight: "bold" },
      });
      return navigate("/");
    }

    if (token && location.pathname === "/analysis" && data?.roles[0] === "user") {
      toast("The user dosen`t have permissions", {
        duration: 4000,
        style: { backgroundColor: "#9f1239", color: "#f8fafc", fontWeight: "bold" },
      });
      return navigate("/products");
    }
  }, [location.pathname, token, data]);

  if (isLoading)
    return (
      <div className="w-full md:w-5/6 px-10  my-10 mb-20 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-5 ">
        {data && data.map((user) => <AdminUserCard key={user.id} user={user} />)}
      </div>
    );

  return <Outlet />;
};

export default ProtectedRoute;
