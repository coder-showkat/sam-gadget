import React from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Loader from "./Loader/Loader";
import ErrorPage from "./components/ErrorPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Banner from "./pages/Banner";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";

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
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
