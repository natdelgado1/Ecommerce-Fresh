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
import { FaSearch, FaSearchMinus } from "react-icons/fa";
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
    <div className="flex flex-col items-center bg-[#F9E4B7]">
      <div className="flex items-center p-2 px-[30px] w-full">
        <div className="flex-1"></div>

        <div className="flex-1 text-center">
          <Link href="/store" className="text-center">
            <h1 className="font-candal text-center ms-12 text-3xl py-4 text-[#FFA07A]">FRESH</h1>
          </Link>
        </div>

        <div className="flex-1 flex gap-4 pe-12 items-center justify-end">
          <button
            type="button"
            className="text-white"
            onClick={() => {
              setShowSearch(!showSearch);
            }}
          >
            <FontAwesomeIcon
              icon={!showSearch ? faSearch : faSearchMinus}
              className={`text-white ${showSearch ? " " : ""}`}
            />
          </button>
          <Link href="/store/user/login">
            <FontAwesomeIcon
              className="text-white"
              icon={faUser}
            ></FontAwesomeIcon>
          </Link>
          <button className="relative" onClick={goToCheckout}>
            <span className="absolute top-[-18px] right-[-11px] rounded-full bg-white h-[16px] w-[16px] flex items-center justify-center text-sm font-bold text-black">
              {calculateTotalCount()}
            </span>
            <FontAwesomeIcon
              className="text-white"
              icon={faCartShopping}
            ></FontAwesomeIcon>
          </button>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className={`bg-[rgba(0,0,0,0.5)] ${
          showSearch ? "flex" : "hidden"
        }  absolute top-0 left-0 w-full h-full z-50   items-center justify-around`}
      >
        <div className="flex w-96 bg-slate-300 rounded-md">
          <input
            type="text"
            placeholder="Buscar..."
            className=" focus:outline-none w-96 rounded-s-md p-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="px-2 w-9 bg-slate-300">
            <FaSearch className="text-slate-600" />
          </button>
        </div>
      </form>
      <div className="w-full flex justify-center text-[#000000] p-2">
        <ul className="flex gap-6  text-md">
          <Link href={"/store"}>
            <li className=" hover:bg-[#FFA07A] hover:text-white hover:rounded-full px-2 py-1">Inicio</li>
          </Link>
          <Link  href={"/store/categories/65c963770675d5d5ad5f2082"}>
            <li className="hover:bg-[#FFA07A] hover:text-white hover:rounded-full px-2 py-1">Tenis</li>
          </Link>
          <Link href={"/store/categories/65d1cf4a6c6ca2453aa3b56f"}>
            <li className="hover:bg-[#FFA07A] hover:text-white hover:rounded-full px-2 py-1">Sandalias</li>
          </Link>
          <Link href={"/store/categories/65d1cf6e6c6ca2453aa3b571"}>
            <li className="hover:bg-[#FFA07A] hover:text-white hover:rounded-full px-2 py-1">Botas</li>
          </Link>
          <Link href={"/store/categories/65d1cf776c6ca2453aa3b573"}>
            <li className="hover:bg-[#FFA07A] hover:text-white hover:rounded-full px-2 py-1">Infantil</li>
          </Link>
          <Link href={"/store/contacto"}>
            <li className=" hover:bg-[#FFA07A] hover:text-white hover:rounded-full px-2 py-1">Contacto</li>
          </Link>
          <Link href={"/store/devoluciones"}>
            <li className=" hover:bg-[#FFA07A] hover:text-white hover:rounded-full px-2 py-1">Cambios y devoluciones</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default TopHeader;
