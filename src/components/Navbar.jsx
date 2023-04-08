import React, { useState } from "react";
import { HiMenuAlt3, HiOutlineShoppingCart, HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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
                ? "text-blue-600 px-4 py-2 font-medium"
                : "font-medium px-4 py-2"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 px-4 py-2 font-medium"
                : "font-medium px-4 py-2"
            }
          >
            Shop
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 px-4 py-2 font-medium"
                : "font-medium px-4 py-2"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 px-4 py-2 font-medium"
                : "font-medium px-4 py-2"
            }
          >
            <HiOutlineShoppingCart className="text-xl" />
          </NavLink>
        </div>

        {/* for mobile device */}
        <div
          className={`absolute top-12 right-6 z-50 w-40 bg-gray-100 shadow-lg py-4 flex-col md:hidden items-center gap-1 ${
            menuOpen ? "flex" : "hidden"
          }`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 px-4 py-2 font-medium"
                : "font-medium px-4 py-2"
            }
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 px-4 py-2 font-medium"
                : "font-medium px-4 py-2"
            }
            onClick={() => setMenuOpen(false)}
          >
            Shop
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 px-4 py-2 font-medium"
                : "font-medium px-4 py-2"
            }
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 px-4 py-2 font-medium"
                : "font-medium px-4 py-2"
            }
            onClick={() => setMenuOpen(false)}
          >
            <HiOutlineShoppingCart className="text-xl" />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
