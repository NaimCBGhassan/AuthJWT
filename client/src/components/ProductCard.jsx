import { useEffect } from "react";

const ProductCard = ({ product }) => {
  const { name, price, imgURL } = product;

  return (
    <div>
      <header>Name: {name}</header>
      <p>Price: {price}$</p>
      <div>Imagen: {imgURL}</div>
    </div>
  );
};

export default ProductCard;
