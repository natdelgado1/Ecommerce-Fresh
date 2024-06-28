import axios from "axios";
import ImageProduct from "./ImageProduct/ImageProduct";
import { apiUrl } from "@/config";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Descripcion from "./Descripcion/Descripcion";

const Product = ({ product }) => {
  const router = useRouter();

  return (
    <div className="flex w-full p-8 gap-4 justify-center">
      <div className="flex-1 justify-center w-[120%]">
        <ImageProduct product={product} />
      </div>
      <div className="flex-1 flex pl-10 w-[70%] ">
        <Descripcion initialProduct={product} />
      </div>
    </div>
  );
};
export default Product;
