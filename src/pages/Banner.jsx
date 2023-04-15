import React from "react";
import { Link } from "react-router-dom";
import banner from "../assets/banner.jpg";

const Banner = () => {
  return (
    <section className="container mx-auto">
      <div className="text-center flex flex-col items-center gap-y-10 p-4 pt-12 pb-40 bg-gray-200">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 px-4 py-3 text-anime">
          Welcome To SamGadget
        </h1>
        <p className="md:text-lg">
          Best E-commerce platform for buying high quality Smart Home Appliances
          at extremely affordable Price.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Link
            to="/shop"
            className="text-lg font-medium rounded-3xl shadow-md w-56 py-3 border-2 border-primary bg-primary hover:bg-secondary hover:border-secondary"
          >
            Shop Now
          </Link>
          <Link
            to="/about"
            className="text-lg font-medium rounded-3xl shadow-md w-56 py-3 border-2 border-primary hover:bg-secondary hover:border-secondary"
          >
            Learn more
          </Link>
        </div>
      </div>
      <div className="relative -top-24">
        <img
          src={banner}
          alt="banner"
          className="block w-5/6 mx-auto rounded-lg"
        />
      </div>
    </section>
  );
};

export default Banner;
