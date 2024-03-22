"use client";
import AlertNone from "@/components/Controles/Alerts/none";
import Filter from "@/components/Filters/Filter/Filter";
import ProductCard from "@/components/ProductCard/ProductCard";
import { apiUrl } from "@/config";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function categoriesPage() {
  const { id } = useParams();

  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState({});
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleGetProducts = async () => {
    try {
      const response = await axios.get(`${apiUrl}/products/category/${id}`);
      const result = await response.data;
      setProducts(result);
      setFilteredProducts(result);
    } catch (error) {
      console.log(error);
    }
  };
  const handleGetCategory = async () => {
    try {
      const response = await axios.get(`${apiUrl}/categories/${id}`);
      const result = await response.data;
      setCategory(result);
    } catch (error) {
      console.log(error);
    }
  };

  //Filtrado de productos
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

  useEffect(() => {
    handleGetCategory();
    handleGetProducts();
  }, []);

  return category?._id ? (
    filteredProducts.length > 0 ? (
      <div className="px-28 py-7">
        <Filter handleFilter={handleFilter} />
        <p className="p-3 text-4xl py-5 font-bold tracking-wider">
          {category.name}{" "}
        </p>
        <div className="w-full  justify-start min-h-80">
          {filteredProducts.map((product, index) => {
            return <ProductCard key={index} product={product} />;
          })}
        </div>
      </div>
    ) : (
      <div className="flex w-full h-full justify-center items-center min-h-80 ">
        <AlertNone
          title={"Lo siento!"}
          descripcion={
            "No hay productos disponibles en este momento para esa búsqueda"
          }
        />
      </div>
    )
  ) : (
    <div>
      <FontAwesomeIcon className="animate-spin" width={32} icon={faRefresh} />
    </div>
  );
}
