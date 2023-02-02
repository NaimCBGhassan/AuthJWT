import { useEffect } from "react";

import { useGetProducts } from "../api/products";
import { ProductCard } from "../components/index";

const Products = () => {
  const token = sessionStorage.getItem("token");
  const { data, isLoading } = useGetProducts(token);

  return (
    <div className="container px-10 mx-auto my-10 mb-20">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 ">
        {data && data.map((product) => <ProductCard key={product._id} product={product} />)}
      </div>
    </div>
  );
};

export default Products;
