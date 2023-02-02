import { NavLink } from "react-router-dom";

const Aside = () => {
  return (
    <aside className="bg-slate-800 w-1/6 fixed top-12 bottom-10 ">
      <nav className="flex flex-col font-bold text-center text-slate-50">
        <NavLink to="./products" className="bg-pink-700 hover:bg-pink-500 hover:h-11 hover:text-lg py-2">
          Products
        </NavLink>
        <NavLink to="./users" className="bg-pink-600 hover:bg-pink-400 hover:h-11 hover:text-lg py-2">
          Users
        </NavLink>
      </nav>
    </aside>
  );
};

export default Aside;
