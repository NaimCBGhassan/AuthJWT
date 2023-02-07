import { useGetUsers } from "../../../api/sign";
import AdminUserCard from "./AdminUserCard";
import { AiOutlineLoading } from "react-icons/ai";
import { EmptyWindow } from "../../EmptyWindow";

const AdminUsers = () => {
  const token = sessionStorage.getItem("token");
  const { data, isLoading } = useGetUsers(token);

  if (isLoading && !data) {
    return (
      <div className=" w-full flex justify-center mt-5">
        <AiOutlineLoading className="animate-spin h-20 w-20 text-slate-50   " />
      </div>
    );
  }

  if (data?.length === 0) {
    return <EmptyWindow value="users" />;
  } else {
    return (
      <div className="w-5/6 px-10  my-10 mb-20 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 ">
        {data && data.map((user) => <AdminUserCard key={user.id} user={user} />)}
      </div>
    );
  }
};

export default AdminUsers;
