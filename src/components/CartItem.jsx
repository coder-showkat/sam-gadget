import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { fetchData } from "../app/features/cartSlice";

const CartItem = ({ cart }) => {
  const { id, name, picture, price, quantity } = cart;
  const dispatch = useDispatch();
  return (
    <div className="w-full border-b-2 py-6">
      <div className="grid grid-cols-4 gap-x-4">
        <div className="col-span-1">
          <img src={picture} alt={name} className="w-full" />
        </div>
        <div className="col-span-3 flex justify-between items-start">
          <div className="flex flex-col justify-between gap-y-3">
            <div>
              <h2 className="text-xl font-semibold">{name}</h2>
              <p className="text-gray-500">Quantity: {quantity}</p>
            </div>
            <MdDeleteForever
              className="text-3xl cursor-pointer"
              onClick={() => dispatch(fetchData(["remove", id]))}
            />
          </div>
          <div>
            <p className="font-medium">{price}$</p>
            <p className="text-gray-600">{price * quantity}$</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
