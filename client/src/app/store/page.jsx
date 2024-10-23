"use client";
import PanelLanzamientos from "@/components/PanelLanzamientos/PanelLanzamientos";
import { apiUrl, imagesURL, store } from "@/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ShoppingCart,
  Search,
  Menu,
  Truck,
  Lock,
  RefreshCw,
} from "lucide-react";
import {
  faLock,
  faRotateRight,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import PanelDesplazamiento from "@/components/PanelDesplazamiento/PanelDesplazamiento";
import { useState } from "react";

const imagenesMarca = [
  { src: "Adidas-Logo.png", alt: "adidas", name: "Adidas" },
  { src: "nikeLogo.png", alt: "nike", name: "Nike" },
  { src: "molecaLogo.png", alt: "moleca", name: "Moleca" },
  { src: "pumaLogo.png", alt: "puma", name: "Puma" },
  { src: "modareLogo.png", alt: "modare", name: "Modare" },
  { src: "beiraRioLogo.png", alt: "beiraRio", name: "Beira Rio" },
];

export default function StorePage() {
  const { marca } = useParams();
  const router = useRouter();
  const [marcas, setMarcas] = useState({});

  return (
    <div className="min-h-screen bg-[#FFF5E1] ">
      {/* <div className="bg-[#FFA07A] text-center text-white py-1">
        <p className="text-md animate-pulse">
          TIENDA ONLINE - PRODUCTOS BAJO PEDIDO
        </p>
      </div> */}
      {/* <div className="pb-8 w-full  flex items-center justify-center mt-2">
        <ImageSlider />
      </div> */}
      {/* BANNER PRINCIPAL */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-[#FFA07A] to-[#FFD700] rounded-lg p-8 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0 md:mr-8">
            <h2 className="text-6xl font-bold text-white mb-4">NIKE</h2>
            <p className="text-white mb-4 text-3xl">¡PERFECTA PARA VOS!</p>
            {/* <Button variant="secondary" size="lg">
              
            </Button> */}
            <Link href={"/store/products"} className="bg-[#E3E3E6] p-4 rounded-xl font-semibold text-lg"> Explora nuestros productos</Link>
          </div>
          <img
            src="/banner1.jpg"
            alt="Nike Shoes"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* CATEGORÍAS */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">MARCAS</h3>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {imagenesMarca.map((imagen) => {
            return (
              <div className="bg-white p-4 rounded-lg shadow flex items-center justify-center">
                <Link href={`/store/marcas/${imagen.name}`} className="h-10">
                  <img
                    src={`${imagesURL}/logoMarcas/${imagen.src}`}
                    alt={`${imagen.alt}`}
                    height={80}
                    width={80}
                  ></img>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
      <PanelLanzamientos />
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {[
          {
            icon: Truck,
            title: "Entrega rápida",
            description: "Realizamos envíos a todo el Paraguay",
          },
          {
            icon: Lock,
            title: "Compra segura",
            description: "Sitio web 100% seguro.",
          },
          {
            icon: RefreshCw,
            title: "Intercambios de productos",
            description: "¡Haga click aquí! para cambiar producto.",
          },
        ].map((feature, index) => (
          <div key={index} className="flex items-center space-x-4">
            <feature.icon className="w-12 h-12 text-[#FFA07A]" />
            <div>
              <h4 className="font-semibold">{feature.title}</h4>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </section>
      <PanelDesplazamiento />
      <div className="flex flex-col justify-center gap-2 items-center p-16">
        <h1 className="text-2xl font-bold text-gray-500">
          ¡Descubre todos nuestros productos!
        </h1>
        <Link
          href={"/store/products"}
          className="px-4 py-1 animate-accordion-up bg-[#F9E4B7] shadow-md text-[#d88767] rounded-full"
        >
          Explorar
        </Link>
      </div>
    </div>
  );
}
