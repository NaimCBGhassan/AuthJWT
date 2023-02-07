import { useEffect, useState } from "react";
import { Aside, AdminProductForm, AdminUserForm, AdminUsers, AdminProducts } from "../components";
import { useMediaQuery } from "react-responsive";
import { AiOutlineMenu } from "react-icons/ai";

const Analysis = () => {
  const [view, setView] = useState({ userForm: true, flag: false });
  const [menuView, setMenuView] = useState(false);

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    if (view.flag) {
      sessionStorage.setItem("view", JSON.stringify(view));
    }
  }, [view]);

  useEffect(() => {
    const getView = sessionStorage.getItem("view");
    if (getView) setView(JSON.parse(getView));
    return sessionStorage.removeItem("view");
  }, []);

  return (
    <div className="flex items-stretch">
      {!isTabletOrMobile ? (
        <div className=" w-1/6 h-full">
          <Aside viewAside={{ setView }} />
        </div>
      ) : (
        <button
          className="fixed bottom-12 right-6 h-12 w-12 rounded-full  bg-slate-900 hover:bg-slate-800 hover:scale-125 flex justify-center items-center  z-20 animate-bounce"
          onClick={() => setMenuView(!menuView)}
        >
          <AiOutlineMenu className="h-8 w-8 rounded-full text-slate-50" />
        </button>
      )}
      {menuView && (
        <div className="fixed inset-0 bg-slate-900 bg-opacity-80 z-10">
          <Aside viewAside={{ setView, setMenuView }} />
        </div>
      )}

      {view.userForm && <AdminUserForm setView={setView} />}
      {view.users && <AdminUsers setView={setView} />}
      {view.productForm && <AdminProductForm setView={setView} />}
      {view.products && <AdminProducts setView={setView} />}
    </div>
  );
};

export default Analysis;
