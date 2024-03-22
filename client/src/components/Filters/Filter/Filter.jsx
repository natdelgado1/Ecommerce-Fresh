"use client";
import DefaultInput from "@/components/Controles/Input/defaultInput";
import DefaultSelect from "@/components/Controles/Select/defaultSelect";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";

const Filter = ({ handleFilter }) => {
  const [marca, setMarca] = useState("");
  const [talla, setTalla] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [showFilter, setShowFilter] = useState(false);

  const marcasOptions = [
    "Moleca",
    "Nike",
    "Adidas",
    "Puma",
    "Converse",
    "Modare",
  ];
  const tallasOptions = [
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
  ];

  useEffect(() => {
    handleFilter(marca, talla, minPrice, maxPrice);
  }, [marca, talla, minPrice, maxPrice]);



  return (
    <div className="flex gap-4 px-2 items-center  h-12">
      <button onClick={()=> setShowFilter(!showFilter)} className={` border-[1px] underline h-9 px-2 rounded-sm flex items-center gap-2 ${showFilter ? ' border-[#e4e4e7] shadow-sm' : 'border-transparent'} `}>
        <FaFilter className="text-gray-600" />
        <span>Filtrar</span>
      </button>
      {showFilter && (

      <div className="flex gap-2 z-50">
        <DefaultSelect
          defaultOption={"Todas las marcas"}
          name={"marca"}
          onChange={(value) => setMarca(value)}
          options={marcasOptions}
          value={marca}
          id={"marca"}
        />
        <DefaultSelect
          defaultOption={"Todas las tallas"}
          name={"talla"}
          onChange={(value) => setTalla(value)}
          options={tallasOptions}
          value={talla}
          id={"talla"}
        />

        <div className="flex gap-2 items-center">
          <DefaultInput
            // label={"Precio Mínimo"}
            type={"text"}
            onChange={(value) => setMinPrice(value)}
            value={minPrice}
            placeholder={"Precio Mínimo"}
          />
          <DefaultInput
            // label={"Precio Máximo"}
            type={"text"}
            onChange={(value) => setMaxPrice(value)}
            value={maxPrice}
            placeholder={"Precio Máximo"}
          />
        </div>
        <div>
          <button
            onClick={() => {
              setMarca("");
              setTalla("");
              setMinPrice("");
              setMaxPrice("");
            }}
            className="h-9 px-4 underline rounded-sm"
          >
            Limpiar
          </button>
        </div>
      </div>)}
    </div>
  );
};

export default Filter;
