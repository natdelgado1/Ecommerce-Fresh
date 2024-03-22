import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping, faSearchMinus, faSearch } from "@fortawesome/free-solid-svg-icons";
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
    <div className="flex flex-col items-center bg-[#696868]">
      <div className="flex items-center p-2 px-[30px] w-full">
        <div className="flex-1"></div>

        <div className="flex-1">
          <Link href="/store">
            <img width={150} className="mx-auto" src="/logo.png" alt="logo" />
          </Link>
        </div>

        <div className="flex-1 flex gap-4 items-center justify-end mr-20">
          <form
            onSubmit={handleSubmit}
            className={`bg-[rgba(0,0,0,0.5)] ${showSearch ? 'flex' : 'hidden'}  absolute top-0 left-0 w-full h-full z-50   items-center justify-around`}
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
            <button type="button" className="text-white" onClick={() => {setShowSearch(!showSearch)}}>
              <FontAwesomeIcon icon={!showSearch ? faSearch : faSearchMinus} className={`text-white ${showSearch ? ' ': '' }`} />
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

      <div className="w-full border-t-2 flex justify-center border-white p-2">
        <ul className="flex gap-4 text-white text-lg">
          <Link href={"/store"}>
            <li className=" hover:underline">Inicio</li>
          </Link>
          <Link href={"/store/categories/65c963770675d5d5ad5f2082"}>
            <li className="hover:underline">Tenis</li>
          </Link>
          <Link href={"/store/categories/65d1cf4a6c6ca2453aa3b56f"}>
            <li className="hover:underline">Sandalias</li>
          </Link>
          <Link href={"/store/categories/65d1cf6e6c6ca2453aa3b571"}>
            <li className="hover:underline">Botas</li>
          </Link>
          <Link href={"/store/categories/65d1cf776c6ca2453aa3b573"}>
            <li className="hover:underline">Infantil</li>
          </Link>
          <Link href={"/store/contacto"}>
            <li className=" hover:underline">Contacto</li>
          </Link>
          <Link href={"/store/devoluciones"}>
            <li className=" hover:underline">Cambios y devoluciones</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default TopHeader;
