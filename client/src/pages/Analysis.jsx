import { useEffect, useState } from "react";
import { Aside, AdminProductForm, AdminUserForm, AdminUsers, AdminProducts } from "../components";

const Analysis = () => {
  const [view, setView] = useState({ userForm: true, flag: false });

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
      <div className=" w-1/6 h-full">
        <Aside setView={setView} />
      </div>

      {view.userForm && <AdminUserForm setView={setView} />}
      {view.users && <AdminUsers setView={setView} />}
      {view.productForm && <AdminProductForm setView={setView} />}
      {view.products && <AdminProducts setView={setView} />}
    </div>
  );
};

export default Analysis;
