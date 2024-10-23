import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "@/config";
import ProductCard from "../ProductCard/ProductCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 2,
    },
  };

  return (
    <section className="mb-12">
      <h3 className="text-2xl font-semibold mb-4">LANZAMIENTOS</h3>
      {products.length > 0 && (
        <Carousel
          responsive={responsive}
          infinite={true}
          arrows={true}
          showDots={true}
          autoPlaySpeed={500}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          itemClass="carousel-item-padding-40-px"
        >
          {products.map((product, index) => (
            <div className="grid gap-2">
              <ProductCard key={index} product={product} />
            </div>
          ))}
        </Carousel>
      )}
    </section>
  );
}
