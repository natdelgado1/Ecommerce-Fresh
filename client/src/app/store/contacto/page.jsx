"use client";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocation,
  faLocationPin,
  faMailBulk,
  faMailForward,
  faMailReply,
  faVoicemail,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

const contacto = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [message, setMessage] = useState("");

  const onSubmitHandler = () => {
    e.preventDefault();
  };

  const inoutChangue = (e) => {
    if (e.target.name === "nombre") {
      setNombre(e.target.name);
    }
    if (e.target.name === "email") {
      setEmail(e.target.name);
    }
    if (e.target.name === "telefono") {
      setTelefono(e.target.name);
    }
    if (e.target.name === "message") {
      setMessage(e.target.name);
    }
  };

  return (
    <div className="px-28 py-7 h-full">
      <p className="p-3 text-4xl py-5 font-bold tracking-wider"> Contacto </p>

      <div className="w-full  justify-start px-3 flex items-start gap-10 ">
        <div className=" inline-grid font-bold">
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
        </div>
        <div className="flex-1">
          <form onSubmit={(e) => onSubmitHandler(e)}>
            <div className="flex">
              <div className="basis-2/5">
                <div>
                  <div className="flex flex-col">
                    <div className="flex flex-col">
                      <label>Nombre Completo</label>
                      <input
                        id="nombre"
                        name="nombre"
                        value={nombre}
                        onChange={(e) => inputChange(e)}
                        type="text"
                        required
                        placeholder="Ej. Luz Pérez"
                        className="bg-[#f9f4fa] border border-zinc-900 mb-4 h-8 p-3"
                      />
                      <label>Correo Electrónico</label>
                      <input
                        id="email"
                        required
                        value={email}
                        onChange={(e) => inputChange(e)}
                        type="text"
                        name="email"
                        placeholder="Ej. tuorreo@gmail.com"
                        className="bg-[#f9f4fa] border border-zinc-900 mb-4 h-8 p-3"
                      />
                      <label>Teléfono</label>
                      <input
                        type="text"
                        name="telefono"
                        value={telefono}
                        onChange={(e) => inputChange(e)}
                        className="bg-[#f9f4fa] border border-zinc-900 mb-4 h-8 p-3"
                        placeholder="por ejemplo: 0971 331 257"
                      />
                      <textarea
                        name="message"
                        id="message"
                        onChange={(e) => inputChange(e)}
                        placeholder="Ej. su  mensaje"
                        className="bg-[#f9f4fa] border border-zinc-900 mb-4 h-20 p-3"
                      >
                        {message}
                      </textarea>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <button
                    className="border-2 border-gray-500 h-9 p-2 mt-2 w-30 font-bold text-black flex items-center justify-center px-8"
                    type="submit"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default contacto;
