import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { name, price, imgURL } = product;

  const { pathname } = useLocation();

  return (
    <article className="h-64 hover:scale-105 bg-slate-500 hover:bg-slate-400 shadow-md shadow-slate-800 rounded-md p-5 text-slate-50 ">
      <header className="flex justify-between items-center font-bold text-lg">
        <h1>Name: {name}</h1>
        <p>Price: {price}$</p>
      </header>
      {pathname === "/products" && <div className="h-5/6 flex justify-center items-center">Imagen: {imgURL}</div>}
      {pathname === "/analysis" && (
        <div className=" flex flex-col h-5/6 justify-around items-center  ">
          <button className="px-3 py-1 font-bold rounded-md bg-green-700 hover:bg-green-600 text-slate-50">
            Update
          </button>
          <button className="px-3 py-1 font-bold rounded-md bg-red-700 hover:bg-red-600 text-slate-50">Delete</button>
        </div>
      )}
    </article>
  );
};

export default ProductCard;
