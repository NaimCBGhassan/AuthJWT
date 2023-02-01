import { useEffect } from "react";

import { useGetProducts } from "../api/products";
import { ProductCard } from "../components/index";

const Products = () => {
  const token = sessionStorage.getItem("token");
  const { data, isLoading } = useGetProducts(token);

  return <>{data && data.map((product) => <ProductCard key={product._id} product={product} />)}</>;
};

export default Products;
