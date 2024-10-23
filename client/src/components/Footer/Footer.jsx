"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@mui/material/Button";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const manejarSubmit = (e) => {
    e.preventDefault();

    // Validación básica del email
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
      setMensaje("Por favor, ingresa un email válido.");
      return;
    }

    // Simulamos una suscripción
    setMensaje("Gracias por suscribirte!");

    // Reiniciar el campo de email después del envío
    setEmail("");
  };
  return (
    <footer className="bg-[#FFA07A] text-white mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold mb-4">Información</h4>
            <ul className="space-y-2">
              <li>
                <a href="/store" className="hover:underline">
                  Inicio
                </a>
              </li>
              <li>
                <a href="/store/devoluciones" className="hover:underline">
                  Cambios y devoluciones
                </a>
              </li>
              <li>
                <a href="/store/contacto" className="hover:underline">
                  Entrar en contacto
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <p>+595 971 331 257</p>
            <p>freshencar@gmail.com</p>
            <p>Cambyretá - Barrio San José, calle S/N casi Los Inmigrantes</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Redes Sociales</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#FFD700]">
                Instagram
              </a>
              <a href="#" className="hover:text-[#FFD700]">
                Facebook
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <form className="flex">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu email"
                className="rounded-r-none border p-2"
                required
              />
              <button type="submit" className="pl-3 rounded-l-none">
                Suscribir
              </button>
            </form>
            {mensaje && (
              <p className="mt-2 text-sm text-[#FFA07A]">{mensaje}</p>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
