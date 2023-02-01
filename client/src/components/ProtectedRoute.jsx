import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import axios from "axios";

const ProtectedRoute = () => {
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();

  

  useEffect(() => {
    if (!token) navigate("/");
    const 
  }, []);

  return <Outlet />;
};

export default ProtectedRoute;
