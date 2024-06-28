"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationPin } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[#FFA07A]  flex text-white">
      <div className="flex gap-4 items-center  justify-between p-3 px-[30px] w-full ml-20">
        <div className="flex-1 inline-grid self-start">
          <h1 className="text-xl">Información</h1>
          <Link href="/store">- Inicio</Link>
          <Link href="/store/devoluciones">- Cambios y devoluciones</Link>
          <Link href="store/contacto" >- Entrar en contacto</Link>
        </div>
          
        <div className="flex-1  inline-grid self-start ml-20">
          <Link href={"https://wa.me/message/NG2GF3C4WCGFI1"}>
            <FontAwesomeIcon icon={faWhatsapp} />
            <span className="ml-4">+595 971 331 257</span>
          </Link>
          <Link href={"mailto:freshencar@gmail.com"}>
            <FontAwesomeIcon icon={faEnvelope} />
            <span className="ml-4">freshencar@gmail.com</span>
          </Link>
          <div>
            <FontAwesomeIcon icon={faLocationPin} />
            <span className="ml-4">
              Cambyretá - Barrio San José, calle S/N casi Los Inmigrantes
            </span>
          </div>
          <div className="flex-1 flex  gap-4 content-start self-start ">
            <button>
              <FontAwesomeIcon
                className="h-[16px] w-[16px]"
                icon={faInstagram}
              /> <span className="ml-2">Instagram</span>
            </button>
          </div>
          <div className="flex-1 flex  gap-4 content-start self-start ">
            <button>
              <FontAwesomeIcon
                className="h-[16px] w-[16px]"
                icon={faFacebookF}
              /> <span className="ml-2">Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
