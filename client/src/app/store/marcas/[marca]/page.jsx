"use client";
import ProductCard from "@/components/ProductCard/ProductCard";
import { apiUrl } from "@/config";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const marcaPage = () => {
  const { marca } = useParams();
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const handleGetProducts = async () => {
    try {
      const response = await axios.get(`${apiUrl}/products/marcas/${marca}`);
      const result = await response.data;
      setProducts(result);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetProducts();
  }, []);

  return (
    <div className="px-28 py-7">
      <p className="p-3 text-4xl py-5 font-bold tracking-wider">
        {marca.name}{" "}
      </p>
      <div className="w-full  justify-start ">
        <div className="w-full  justify-start grid grid-cols-4">
          {products.map((product, index) => {
            return <ProductCard key={index} product={product} />;
          })}
        </div>
        ;
      </div>
    </div>
  );
};

export default marcaPage;
