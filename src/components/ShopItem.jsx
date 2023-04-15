import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ShopItem = ({ product }) => {
  const dispatch = useDispatch();
  const { id, name, picture, price, category } = product;
  return (
    <div className="w-full rounded-lg bg-gray-100 p-6 shadow-lg flex flex-col justify-between">
      <img src={picture} alt={name} className="rounded-lg mb-6" />
      <h2 className="text-3xl font-bold mb-6">{name}</h2>
      <div>
        <p>Category: {category}</p>
        <h4 className="font-bold my-2">Price: {price}</h4>
      </div>
      <button
        className="w-full text-lg font-medium rounded-3xl shadow-md px-12 py-3 border-2 border-primary bg-primary hover:bg-secondary hover:border-secondary active:scale-90"
        onClick={() => dispatch(addToCart(product))}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ShopItem;
