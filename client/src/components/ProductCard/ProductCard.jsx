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
      className=" mx-4 my-4 rounded-lg shadow-md"
      onClick={() => {
        loadProduct(product._id);
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="block rounded-t-lg h-[200px] overflow-hidden">
        {isHovered ? (
          <img
            src={`${imagesURL}/products/${product._id}/principal.jpg`}
            alt={`Image of ${product.title}`}
          />
        ) : (
          <img
            className="hover:scale-125 transition-all duration-300 ease-in-out transform"
            src={`${imagesURL}/products/${product._id}/1.jpg`}
            alt={`Image of ${product.title}`}
          />
        )}
      </div>
      <div className="p-3">
        <p className="text-lg text-[#000000]">{product.title}</p>
        <span className="text-[#FFA07A]">{format(product.price)}</span>
      </div>
    </div>
  );
}
