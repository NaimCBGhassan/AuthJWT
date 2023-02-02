import { useGetProducts } from "../api/products";
import { Aside, ProductCard } from "../components";

const Analysis = () => {
  const token = sessionStorage.getItem("token");
  const { data, isLoading } = useGetProducts(token);
  return (
    <div className="flex">
      <div className=" w-1/6">
        <Aside />
      </div>
    </div>
  );
};

export default Analysis;
