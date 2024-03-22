import { imagesURL } from "@/config";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  function format(num) {
    return (
      "Gs. " +
      Number.parseInt(num)
        .toFixed(0)
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
    );
  }

  const router = useRouter();
  const loadProduct = (id) => {
    router.push(`/store/products/${id}`);
  };

  
  return (
    <div
      className="w-52 mx-2 inline-block cursor-pointer border-2 border-grey mb-2"
      onClick={() => {
        loadProduct(product._id);
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="block h-[200px] overflow-hidden">
        {
          isHovered ?
        <img
          src={`${imagesURL}/products/${product._id}/principal.jpg`}
          alt={`Image of ${product.title}`}
        />
        :

        <img
        className="hover:scale-125 transition-all duration-300 ease-in-out transform"
          src={`${imagesURL}/products/${product._id}/1.jpg`}
          alt={`Image of ${product.title}`}
        />
        }

      </div>
      <hr />
      <div className="p-3">
        <p>{product.title}</p>
        <span className="font-bold">{format(product.price)}</span>
      </div>
    </div>
  );
}
