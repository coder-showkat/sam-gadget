import React, { useState } from "react";
import { HiMenuAlt3, HiOutlineShoppingCart, HiX } from "react-icons/hi";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const carts = useSelector((state) => state.gadgets);

  return (
    <nav className="shadow-lg">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-800">SamGadget</h2>
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <HiX className="text-2xl" />
          ) : (
            <HiMenuAlt3 className="text-2xl" />
          )}
        </div>

        {/* for larger device */}
        <div className="hidden md:flex items-center gap-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 px-4 py-2 font-medium hover:text-blue-400"
                : "font-medium px-4 py-2 hover:text-blue-400"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 px-4 py-2 font-medium hover:text-blue-400"
                : "font-medium px-4 py-2 hover:text-blue-400"
            }
          >
            Shop
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 px-4 py-2 font-medium hover:text-blue-400"
                : "font-medium px-4 py-2 hover:text-blue-400"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 px-4 py-2 font-medium hover:text-blue-400 relative"
                : "font-medium px-4 py-2 hover:text-blue-400 relative"
            }
          >
            <HiOutlineShoppingCart className="text-xl" />
            <span className="absolute -top-1 text-secondary right-2">
              {(carts.length > 0 &&
                carts.map((cart) => cart.quantity).reduce((a, b) => a + b)) ||
                0}
            </span>
          </NavLink>
        </div>

        {/* for mobile device */}
        <div
          className={`absolute top-12 right-6 z-50 w-40 bg-gray-100 shadow-lg py-4 flex-col md:hidden items-center rounded-lg gap-1 ${
            menuOpen ? "flex" : "hidden"
          }`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 px-4 py-2 font-medium hover:text-blue-400"
                : "font-medium px-4 py-2 hover:text-blue-400"
            }
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 px-4 py-2 font-medium hover:text-blue-400"
                : "font-medium px-4 py-2 hover:text-blue-400"
            }
            onClick={() => setMenuOpen(false)}
          >
            Shop
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 px-4 py-2 font-medium hover:text-blue-400"
                : "font-medium px-4 py-2 hover:text-blue-400"
            }
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 px-4 py-2 font-medium hover:text-blue-400 relative"
                : "font-medium px-4 py-2 hover:text-blue-400 relative"
            }
            onClick={() => setMenuOpen(false)}
          >
            <HiOutlineShoppingCart className="text-xl" />
            <span className="absolute -top-1 text-secondary right-2">
              {(carts.length > 0 &&
                carts.map((cart) => cart.quantity).reduce((a, b) => a + b)) ||
                0}
            </span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
