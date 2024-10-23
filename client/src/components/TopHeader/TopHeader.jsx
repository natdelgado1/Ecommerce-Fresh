import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCartShopping,
  faSearchMinus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { useCart } from "@/contexts/CartContext";

const TopHeader = () => {
  const { calculateTotalCount } = useCart();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const handleSubmit = (e) => {
    setShowSearch(false);
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      router.push(`/store/search/${encodeURIComponent(searchTerm)}`);
    }
  };

  const goToCheckout = () => {
    router.push("/store/checkout");
  };

  return (
    <header className="bg-[#FFA07A] shadow-md sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Contenedor del logo y navegación */}
          {/* Logo */}
          <div className="text-3xl font-bold text-white">
            <Link href="/store">FRESH</Link>
          </div>

          {/* Menú de navegación */}
          <nav className="ml-10 flex items-center max-lg:invisible ">
            <ul className="flex space-x-6 text-white text-sm uppercase tracking-wide">
            <Link href={"/store"}>
            <li className=" hover:text-[#FFD700] transition-colors">Inicio</li>
          </Link>
          <Link  href={"/store/categories/65c963770675d5d5ad5f2082"}>
            <li className="hover:text-[#FFD700] transition-colors">Tenis</li>
          </Link>
          <Link href={"/store/categories/65d1cf4a6c6ca2453aa3b56f"}>
            <li className="hover:text-[#FFD700] transition-colors">Sandalias</li>
          </Link>
          <Link href={"/store/categories/65d1cf6e6c6ca2453aa3b571"}>
            <li className="hover:text-[#FFD700] transition-colors">Botas</li>
          </Link>
          <Link href={"/store/categories/65d1cf776c6ca2453aa3b573"}>
            <li className="hover:text-[#FFD700] transition-colors">Infantil</li>
          </Link>
          <Link href={"/store/contacto"}>
            <li className=" hover:text-[#FFD700] transition-colors">Contacto</li>
          </Link>
          <Link href={"/store/devoluciones"}>
            <li className=" hover:text-[#FFD700] transition-colors">Cambios y devoluciones</li>
          </Link>
            </ul>
          </nav>

        {/* Contenedor de iconos (búsqueda, usuario, carrito) */}
        <div className="flex items-center space-x-4">
          <button onClick={() => setShowSearch(!showSearch)} className="text-white hover:text-[#FFD700]">
            <FontAwesomeIcon icon={!showSearch ? faSearch : faSearchMinus} />
          </button>

          <Link href="/store/user/login">
            <FontAwesomeIcon icon={faUser} className="text-white hover:text-[#FFD700]" />
          </Link>

          <button className="relative" onClick={goToCheckout}>
            <span className="absolute top-0 right-0 translate-x-1/2 translate-y-1/2 bg-[#FFD700] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {calculateTotalCount()}
            </span>
            <FontAwesomeIcon icon={faCartShopping} className="text-white hover:text-[#FFD700]" />
          </button>
        </div>
      </div>

      {/* Search Form */}
      {showSearch && (
        <form onSubmit={handleSubmit} className="flex justify-center bg-gray-200 py-2 max-lg:justify-start">
          <div className="flex w-96 bg-white shadow-md rounded-full p-2">
            <input
              type="text"
              placeholder="Buscar..."
              className="w-full px-4 py-2 text-gray-700 bg-transparent focus:outline-none rounded-l-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="px-4 text-gray-600 hover:text-gray-900">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </form>
      )}
    </header>
  );
};

export default TopHeader;
