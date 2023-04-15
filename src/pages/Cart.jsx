import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../app/features/cartSlice";
import CartItem from "../components/CartItem";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const { carts, loading, error } = cart;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <section className="container mx-auto p-4 bg-gray-100 py-12">
      <div className="max-w-[420px] mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Review Cart Items</h2>
        {carts && carts.map((cart) => <CartItem key={cart.id} cart={cart} />)}
        <div className="mt-6 text-right">
          <p className="text-lg">
            Total amount: $
            {carts
              ? carts
                  .map((cart) => cart.price * cart.quantity)
                  .reduce((a, b) => a + b)
              : 0}
          </p>
          <p className="text-gray-500">
            Not including taxes and shipping costs
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6 mt-6">
          <button className="text-lg font-medium rounded-3xl shadow-md w-56 py-3 border-2 border-primary hover:bg-secondary hover:border-secondary">
            Clear Cart
          </button>
          <button className="text-lg font-medium rounded-3xl shadow-md w-56 py-3 border-2 border-primary bg-primary hover:bg-secondary hover:border-secondary">
            Place Order
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
