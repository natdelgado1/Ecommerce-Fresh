"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../../ProductCard/ProductCard";
import { apiUrl } from "@/config";
import Filter from "@/components/Filters/Filter/Filter";
import AlertNone from "@/components/Controles/Alerts/none";

const AllFilteredProducts = ({ title }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const response = await axios.get(`${apiUrl}/products`);
      const result = await response.data;
      setProducts(result);
      setFilteredProducts(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const handleFilter = (marca, talla, minPrice, maxPrice) => {
    const filtrados = products
      .filter((item, index, arr) => {
        return (
          (item.marca === marca || marca === "") &&
          (item.stocks.some(
            (stock) => stock.talla === parseInt(talla) && stock.stock > 0
          ) ||
            talla === "") &&
          (item.price >= minPrice || minPrice === "") &&
          (item.price <= maxPrice || maxPrice === "")
        );
      })
      .map((item) => {
        return item;
      });
    setFilteredProducts(filtrados);
  };

  return filteredProducts.length > 0 ? (
    <div className="flex flex-col w-full min-h-80">
      <Filter handleFilter={handleFilter} />
      <p className="p-3 text-5xl py-5 font-bold tracking-wider">{title}</p>
      <div className="w-full  justify-start">
        {filteredProducts.map((product, index) => {
          return <ProductCard key={index} product={product} />;
        })}
      </div>
    </div>
  ) : (
    <div className="flex w-full h-full justify-center items-center ">
      <AlertNone
        title={"Lo siento!"}
        descripcion={
          "No hay productos disponibles en este momento para esa búsqueda"
        }
      />
    </div>
  );
};

export default AllFilteredProducts;
