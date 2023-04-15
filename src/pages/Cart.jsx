import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { clearCart } from "../redux/cartSlice";
import { notifyError, notifyWarning } from "../utilities/notify";

const Cart = () => {
  const carts = useSelector((state) => state.gadgets);
  const dispatch = useDispatch();

  return (
    <section className="container mx-auto p-4 bg-gray-100 py-12">
      <div className="max-w-[420px] mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Review Cart Items</h2>
        {carts.length > 0 ? (
          carts.map((cart) => <CartItem key={cart.id} cart={cart} />)
        ) : (
          <p className="text-red-500 font-medium text-lg text-center my-12">
            No items is added in the cart
          </p>
        )}
        <div className="mt-6 text-right">
          <p className="text-lg">
            Total amount: $
            {carts.length > 0
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
          <button
            onClick={() => {
              if (carts.length > 0) {
                dispatch(clearCart());
                notifyWarning("Cart items cleared!");
              } else notifyError("No items to clear!");
            }}
            className="text-lg font-medium rounded-3xl shadow-md w-56 py-3 border-2 border-primary hover:bg-secondary hover:border-secondary"
          >
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
