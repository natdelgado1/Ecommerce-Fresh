"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { apiUrl } from "@/config";
import AlertNone from "../Controles/Alerts/none";

const AllProducts = ({ title }) => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const response = await axios.get(`${apiUrl}/products`);
      const result = await response.data;
      setProducts(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  });

  return products? (
    <div>
      <p className="p-3 text-4xl py-5 font-bold tracking-wider">{title}</p>
      <div className="w-full  justify-start">
        {products.map((product, index) => {
          return <ProductCard key={index} product={product} />;
        })}
      </div>
    </div>
  )
  : (
    <div>
      <AlertNone
      title={"Lo siento"}
      descripcion={"No hay productos disponibles en este momento"}
      />
    </div>
  );
};

export default AllProducts;
