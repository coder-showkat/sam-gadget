import React from "react";
import { useLoaderData } from "react-router-dom";
import ShopItem from "../components/ShopItem";

const Shop = () => {
  const data = useLoaderData();

  return (
    <section className="container mx-auto p-4 my-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data && data.map((item) => <ShopItem key={item.id} product={item} />)}
      </div>
    </section>
  );
};

export default Shop;
