"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { apiUrl } from "@/config";
import ProductCard from "@/components/ProductCard/ProductCard";
import AlertNone from "@/components/Controles/Alerts/none";

export default function SearchProductPage() {
  const router = useRouter();
  const { term: keyword } = useParams();
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchProducts = async () => {
    try {
      const response = await axios.get(`${apiUrl}/products/search/${keyword}`);
      const results = await response.data;
      setSearchResults(results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (keyword) {
      handleSearchProducts();
    }
  }, [keyword]);

  return searchResults.length > 0 ? (
    <div className="w-full min-h-80 flex justify-center">
      <div>
        <br />
        {searchResults.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  ) : (
    <div className="flex w-full min-h-80 h-full justify-center items-center ">
      <AlertNone
        title={"Lo siento!"}
        descripcion={
          "No hay productos disponibles en este momento para esa búsqueda"
        }
      />
    </div>
  );
}
