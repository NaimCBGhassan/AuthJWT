import { useState } from "react";
import { Aside, AdminProductForm, AdminUserForm } from "../components";

const Analysis = () => {
  const [view, setView] = useState(true);
  return (
    <div className="flex h-5/6">
      <div className=" w-1/6 h-full">
        <Aside />
      </div>

      {view && <AdminProductForm setView={setView} />}
      {!view && <AdminUserForm setView={setView} />}
    </div>
  );
};

export default Analysis;
