import { useState, useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";

import { TbWebhook } from "react-icons/tb";

const Header = () => {
  const [sign, setSign] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") setSign(false);
    if (location.pathname !== "/") setSign(true);
  }, [location.pathname]);

  return (
    <div className="sticky inset-x-0 top-0 z-10 flex justify-between items-center bg-slate-900  px-10 py-2">
      <TbWebhook className="h-8 w-8 p-0 text-slate-50" />
      {sign ? (
        <div className="flex gap-2">
          <NavLink
            to="/analysis"
            className="px-3 py-1 font-bold rounded-md bg-pink-800 hover:bg-pink-600 text-slate-50 "
          >
            Analysis
          </NavLink>
          <NavLink to="/" className="px-3 py-1 font-bold rounded-md bg-pink-800 hover:bg-pink-600 text-slate-50 ">
            SignOut
          </NavLink>
        </div>
      ) : (
        <div>
          <NavLink to="/" className="px-3 py-1 font-bold rounded-md bg-pink-800 hover:bg-pink-600 text-slate-50 mx-4">
            SignIn
          </NavLink>
          <NavLink to="/signup" className="px-3 py-1 font-bold rounded-md bg-pink-800 hover:bg-pink-600 text-slate-50">
            SignUp
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Header;
