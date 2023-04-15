import React from "react";
import { HiArrowLeft, HiOutlineEmojiSad } from "react-icons/hi";
import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-lg gap-y-2">
      <HiOutlineEmojiSad className="text-7xl text-gray-600" />
      <h2 className="text-4xl font-bold">{error.status || 404}</h2>
      <p className="text-gray-600">{error.error.message || "Not found"}</p>
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-x-2 text-3xl font-bold text-blue-400 hover:text-blue-500"
      >
        <HiArrowLeft className="mt-1" /> Go back
      </button>
    </div>
  );
};

export default ErrorPage;
