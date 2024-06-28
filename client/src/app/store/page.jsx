"use client";
import ImageSlider from "@/components/ImageSlider/ImageSlider";
import PanelLanzamientos from "@/components/PanelLanzamientos/PanelLanzamientos";
import { apiUrl, imagesURL, store } from "@/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faRotateRight,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import PanelDesplazamiento from "@/components/PanelDesplazamiento/PanelDesplazamiento";
import CardMarca from "@/components/CardMarca/CardMarca";
import { useState } from "react";

const imagenesMarca = [
  { src: "Adidas-Logo.png", alt: "adidas", name:"Adidas"},
  { src: "nikeLogo.png", alt: "nike", name:"Nike" },
  { src: "molecaLogo.png", alt: "moleca", name:"Moleca" },
  { src: "pumaLogo.png", alt: "puma", name:"Puma" },
  { src: "modareLogo.png", alt: "modare", name:"Modare" },
  { src: "beiraRioLogo.png", alt: "beiraRio", name:"Beira Rio" },
];

export default function StorePage() {
  const { marca } = useParams();
  const router = useRouter();
  const [marcas, setMarcas] = useState({});

  return (
    <div>
      <div className="bg-[#FFA07A] text-center text-white py-1">
        <p className="text-md animate-pulse">
          TIENDA ONLINE - PRODUCTOS BAJO PEDIDO
        </p>
      </div>
      <div className="pb-8 w-full  flex items-center justify-center mt-2">
        <ImageSlider />
      </div>
      <div className=" flex justify-center">
        <h1 className="text-xl mb-6 font-bold text-[#FFA07A]">MARCAS</h1>
      </div>
      <div className="bg-[#F4F4F4] w-full gap-20 flex justify-evenly items-center">
        {imagenesMarca.map((imagen) => {
          return (
            <Link href={`/store/marcas/${imagen.name}`} className="flex-1">
              <img
                src={`${imagesURL}/logoMarcas/${imagen.src}`}
                alt={`${imagen.alt}`}
              ></img>
            </Link>
          );
        })}
      </div>

      <br />
      <PanelLanzamientos />
      <br />
      <div className="flex justify-evenly text-lg py-5 ">
        <div className="flex gap-4">
          <div className="items-center flex">
            <FontAwesomeIcon icon={faTruck} style={{ color: "#000000" }} />
          </div>
          <div>
            <p className="font-bold">Entrega rápida</p>
            <span>Realizamos envíos a todo el Paraguay</span>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="items-center flex">
            <FontAwesomeIcon icon={faLock} style={{ color: "#000000" }} />
          </div>
          <div>
            <p className="font-bold">Compra segura</p>
            <span>Sitio web 100% seguro.</span>
          </div>
        </div>
        <div
          className="cursor-pointer flex gap-4"
          onClick={(e) => {
            router.push(`/store/devoluciones`);
          }}
        >
          <div className="items-center flex">
            <FontAwesomeIcon
              icon={faRotateRight}
              style={{ color: "#000000" }}
            />
          </div>
          <div>
            <p className="font-bold">Intercambios de productos</p>
            <span>¡Haga click aquí! para cambiar producto.</span>
          </div>
        </div>
      </div>
      <PanelDesplazamiento />
      <div className="flex flex-col justify-center gap-2 items-center p-16">
        <h1 className="text-2xl font-bold text-gray-500">¡Descubre todos nuestros productos!</h1>
        <Link href={'/store/products'} className="px-4 py-1 animate-accordion-up bg-[#F9E4B7] shadow-md text-[#d88767] rounded-full">Explorar</Link>
      </div>
    </div>
  );
}
