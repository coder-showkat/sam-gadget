import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import {
  MdLockOutline,
  MdOutlineMailOutline,
  MdPersonOutline,
} from "react-icons/md";
import { Link } from "react-router-dom";

const Signup = () => {
  const [eye, setEye] = useState(false);

  return (
    <section className="container mx-auto py-12 px-4">
      <form className="md:w-[700px] mx-auto p-10 bg-gray-100 rounded-lg">
        <MdPersonOutline className="w-20 h-20 mx-auto rounded-full text-gray-500 p-3 shadow mb-2" />
        <h2 className="mb-8 text-xl text-gray-700 font-bold text-center tracking-wider">
          Sign-up
        </h2>
        <div className="flex flex-col gap-y-1 relative mb-6">
          <label htmlFor="username" className="font-semibold text-gray-500">
            Username:
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="p-3 pl-8 text-gray-500 bg-transparent border-b-2 border-gray-300 shadow outline-none"
            placeholder="Type your username"
            required
          />
          <MdPersonOutline className="text-gray-400 absolute left-2 bottom-4" />
        </div>
        <div className="flex flex-col gap-y-1 relative mb-6">
          <label htmlFor="email" className="font-semibold text-gray-500">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="p-3 pl-8 text-gray-500 bg-transparent border-b-2 border-gray-300 shadow outline-none"
            placeholder="Type your email"
            required
          />
          <MdOutlineMailOutline className="text-gray-400 absolute left-2 bottom-4" />
        </div>

        <div className="flex flex-col gap-y-1 relative mb-6">
          <label htmlFor="password" className="font-semibold text-gray-500">
            Password:
          </label>
          <input
            type={eye ? "text" : "password"}
            name="password"
            id="password"
            className="p-3 pl-8 text-gray-500 bg-transparent border-b-2 border-gray-300 shadow outline-none"
            placeholder="Type your password"
            required
          />
          <MdLockOutline className="text-gray-400 absolute left-2 bottom-4" />
          <span
            onClick={() => setEye(!eye)}
            className="text-gray-500 absolute z-20 right-4 bottom-4 cursor-pointer"
          >
            {eye ? <HiOutlineEye /> : <HiOutlineEyeOff />}
          </span>
        </div>

        <div className="flex flex-col gap-y-1 relative mb-8">
          <label htmlFor="password2" className="font-semibold text-gray-500">
            Confirm Password:
          </label>
          <input
            type={eye ? "text" : "password"}
            name="password2"
            id="password2"
            className="p-3 pl-8 text-gray-500 bg-transparent border-b-2 border-gray-300 shadow outline-none"
            placeholder="Retype your password"
            required
          />
          <MdLockOutline className="text-gray-400 absolute left-2 bottom-4" />
        </div>
        <div className="flex items-center gap-x-2 mb-12">
          <input type="checkbox" id="checkbox" className="mt-1" required />
          <label htmlFor="checkbox" className="text-gray-600">
            I accept <span className="text-secondary">terms & conditions</span>
          </label>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="text-lg font-medium rounded-full shadow-md w-full py-3 border-2 border-primary bg-primary hover:bg-secondary hover:border-secondary"
          >
            Sign-up
          </button>
        </div>
        <p className="text-center mt-12 mb-5">Or,</p>
        <div className="flex items-center gap-x-8 justify-center font-semibold">
          <p>Sign-up by</p>
          <div className="flex gap-x-4">
            <button>
              <FcGoogle className="w-10 h-10 p-2 rounded-full hover:bg-gray-200 shadow" />
            </button>
            <button>
              <FaGithub className="w-10 h-10 p-2 rounded-full hover:bg-gray-200 shadow" />
            </button>
          </div>
        </div>
        <p className="text-center mt-4">
          Already have an account, login{" "}
          <Link to="/login" className="text-secondary">
            here..
          </Link>
        </p>
      </form>
    </section>
  );
};

export default Signup;
