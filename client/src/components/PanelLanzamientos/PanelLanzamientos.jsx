import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "@/config";
import ProductCard from "../ProductCard/ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PrevArrow = (props) => (
  <div
    className="slick-arrow slick-prev"
    onClick={props.onClick}
    style={{ left: "60px", zIndex: 1 }}
  >
    Prev
  </div>
);

const NextArrow = (props) => (
  <div
    className="slick-arrow slick-next"
    onClick={props.onClick}
    style={{ right: "60px", zIndex: 1 }}
  >
    Next
  </div>
);

export default function PanelLanzamientos() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getLanzamientos = async () => {
      try {
        const response = await axios.get(`${apiUrl}/products/lanzamientos`);
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getLanzamientos();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div>
      <h1 className="text-center text-xl font-bold pb-3">Lanzamientos</h1>
      {products.length > 0 && (
        <Slider {...settings}>
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </Slider>
      )}
    </div>
  );
}
