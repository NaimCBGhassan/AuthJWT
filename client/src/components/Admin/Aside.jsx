import { NavLink } from "react-router-dom";

const Aside = ({ setView }) => {
  return (
    <aside className="bg-slate-800 w-1/6 fixed top-12 bottom-10 ">
      <nav className="flex flex-col font-bold text-center text-slate-50">
        <button
          className="bg-pink-700 hover:bg-pink-500 hover:h-11 hover:text-lg py-2"
          onClick={() => setView({ userForm: true, flag: true })}
        >
          Create Users
        </button>
        <button
          className="bg-pink-600 hover:bg-pink-400 hover:h-11 hover:text-lg py-2"
          onClick={() => setView({ users: true, flag: true })}
        >
          Users
        </button>
        <button
          className="bg-pink-700 hover:bg-pink-500 hover:h-11 hover:text-lg py-2"
          onClick={() => setView({ productForm: true, flag: true })}
        >
          Create Products
        </button>
        <button
          className="bg-pink-600 hover:bg-pink-400 hover:h-11 hover:text-lg py-2"
          onClick={() => setView({ products: true, flag: true })}
        >
          Products
        </button>
      </nav>
    </aside>
  );
};

export default Aside;
