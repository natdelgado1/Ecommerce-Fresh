"use client";
import { imagesURL } from "@/config";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const ImageProduct = ({ product }) => {
  const [imageActual, setImageActual] = useState("principal");

  const hanleOverEnter = (id) => {
    setImageActual(id);
  };

  const handleOverLeave = () => {
    setImageActual("principal");
  };

  return product._id ? (
    <div className="flex gap-4 w-full h-max-[100px] ">
      <div className="basis-1/5 flex flex-col gap-2 h-max-[100px]  overflow-hidden ">
        <img
          className="hover:scale-90 transition-all duration-200 ease-in-out transform rounded-md"
          src={`${imagesURL}/products/${product._id}/1.jpg`}
          alt={`Imagen de ${product.title}`}
          onMouseEnter={() => hanleOverEnter("1")}
          onMouseLeave={() => handleOverLeave()}
        />
        <img
          className="hover:scale-90 transition-all duration-200 ease-in-out transform rounded-md"
          src={`${imagesURL}/products/${product._id}/2.jpg`}
          alt={`Imagen de ${product.title}`}
          onMouseEnter={() => hanleOverEnter("2")}
          onMouseLeave={() => handleOverLeave()}
        />
        <img
          className="hover:scale-90 transition-all duration-200 ease-in-out transform rounded-md"
          src={`${imagesURL}/products/${product._id}/3.jpg`}
          alt={`Imagen de ${product.title}`}
          onMouseEnter={() => hanleOverEnter("3")}
          onMouseLeave={() => handleOverLeave()}
        />
        <img
          className="hover:scale-90 transition-all duration-200 ease-in-out transform rounded-sm"
          src={`${imagesURL}/products/${product._id}/4.jpg`}
          alt={`Imagen de ${product.title}`}
          onMouseEnter={() => hanleOverEnter("4")}
          onMouseLeave={() => handleOverLeave()}
        />
      </div>
      <div className="flex-1">
        <img
        className="w-full h-full object-cover rounded-md"
          src={`${imagesURL}/products/${product._id}/${imageActual}.jpg`}
          alt={`Imagen de ${product.title}`}
        />
      </div>
    </div>
  ) : (
    <div>
      {" "}
      <FontAwesomeIcon
        className="animate-spin"
        width={32}
        icon={faRefresh}
      />{" "}
    </div>
  );
};
export default ImageProduct;
