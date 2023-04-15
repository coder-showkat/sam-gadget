import React from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./Loader/Loader";
import ErrorPage from "./components/ErrorPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Banner from "./pages/Banner";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Shop from "./pages/Shop";
import Signup from "./pages/Signup";

const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
      <ToastContainer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Banner />,
      },
      {
        path: "/shop",
        element: <Shop />,
        loader: Loader,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
