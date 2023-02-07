import AdminProductCard from "./AdminProductCard";
import { AiOutlineLoading } from "react-icons/ai";
import { EmptyWindow } from "../../EmptyWindow";
import { useGetProducts } from "../../../api/products";

const AdminProducts = () => {
  const token = sessionStorage.getItem("token");
  const { data, isLoading } = useGetProducts(token);

  if (isLoading && !data) {
    return (
      <div className=" w-full flex justify-center mt-5">
        <AiOutlineLoading className="animate-spin h-20 w-20 text-slate-50   " />
      </div>
    );
  }

  if (data?.length === 0) {
    return <EmptyWindow value="products" />;
  } else {
    return (
      <div className="w-full md:w-5/6 px-10  my-10 mb-20 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-5 ">
        {data && data.map((product) => <AdminProductCard key={product._id} product={product} />)}
      </div>
    );
  }
};

export default AdminProducts;
