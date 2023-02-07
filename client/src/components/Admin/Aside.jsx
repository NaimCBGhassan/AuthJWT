import { useEffect } from "react";

const Aside = ({ viewAside }) => {
  return (
    <aside className="fixed bottom-10 inset-x-0 md:bg-slate-800 md:w-1/6 md:fixed md:top-12 md:bottom-10 z-10">
      <nav className="flex flex-col font-bold text-center text-slate-50">
        <button
          className="bg-pink-700 hover:bg-pink-500 hover:h-11 hover:text-lg py-2"
          onClick={() => {
            viewAside.setView({ userForm: true, flag: true });
            viewAside.setMenuView && viewAside.setMenuView(false);
          }}
        >
          Create Users
        </button>
        <button
          className="bg-pink-600 hover:bg-pink-400 hover:h-11 hover:text-lg py-2"
          onClick={() => {
            viewAside.setView({ users: true, flag: true });
            viewAside.setMenuView && viewAside.setMenuView(false);
          }}
        >
          Users
        </button>
        <button
          className="bg-pink-700 hover:bg-pink-500 hover:h-11 hover:text-lg py-2"
          onClick={() => {
            viewAside.setView({ productForm: true, flag: true });
            viewAside.setMenuView && viewAside.setMenuView(false);
          }}
        >
          Create Products
        </button>
        <button
          className="bg-pink-600 hover:bg-pink-400 hover:h-11 hover:text-lg py-2"
          onClick={() => {
            viewAside.setView({ products: true, flag: true });
            viewAside.setMenuView && viewAside.setMenuView(false);
          }}
        >
          Products
        </button>
      </nav>
    </aside>
  );
};

export default Aside;
