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
      <div className="w-5/6 px-10  my-10 mb-20 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 ">
        {data && data.map((product) => <AdminProductCard key={product.id} product={product} />)}
      </div>
    );
  }
};

export default AdminProducts;
