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
      className="bg-white mx-2 rounded-lg shadow-md overflow-hidden p-4 cursor-pointer"
      onClick={() => {
        loadProduct(product._id);
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
        {isHovered ? (
          <img
            src={`${imagesURL}/products/${product._id}/principal.jpg`}
            alt={`Image of ${product.title}`}
            className="w-full h-48 object-cover"
          />
        ) : (
          <img
            className="hover:scale-125 object-cover w-full h-48 transition-all duration-300 ease-in-out transform"
            src={`${imagesURL}/products/${product._id}/1.jpg`}
            alt={`Image of ${product.title}`}
          />
        )}
      <div className="p-4">
      <h4 className="font-semibold mb-2">{product.title}</h4>
      <p className="text-[#FFA07A] font-bold">{product.price}</p>
      </div>
    </div>
  );
}
