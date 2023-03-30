import { useGetUsers } from "../../../api/users";
import AdminUserCard from "./AdminUserCard";
import { useGetUser } from "../../../api/protected";
import { AiOutlineLoading } from "react-icons/ai";
import { EmptyWindow } from "../../EmptyWindow";

const AdminUsers = () => {
  const token = sessionStorage.getItem("token");
  const { data, isLoading } = useGetUsers(token);

  const activeUser = useGetUser(token);

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
      <div className="w-full md:w-5/6 px-10  my-10 mb-20 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-5 ">
        <AdminUserCard key="1" user={data[0]} />
        {data &&
          data
            .filter((user) => user.username !== "Admin")
            .map((user) => <AdminUserCard key={user.id} user={user} activeUser={activeUser} />)}
      </div>
    );
  }
};

export default AdminUsers;
