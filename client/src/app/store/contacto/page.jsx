"use client";
import React, { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";

const Contacto = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!email || !message || !nombre || !telefono) {
      setError(true); // Muestra error si algún campo está vacío
      return;
    }

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: nombre,
      from_email: email,
      message: message,
      phone: telefono,
    };

    try {
      const response = await emailjs.send(serviceID, templateID, templateParams, publicKey);

      if (response.status === 200) {
        alert("¡Mensaje enviado con éxito!");
        setNombre("");
        setEmail("");
        setTelefono("");
        setMessage("");
        setError(false);
      }
    } catch (error) {
      alert("Error al enviar el mensaje, inténtelo de nuevo.");
      console.error("Error:", error);
    }
  };

  return (
    <main className="container mx-auto px-4 py-12">
      <Card className="w-full max-w-4xl mx-auto shadow-lg">
        <CardHeader className="bg-[#FFA07A] text-white">
          <CardTitle className="text-2xl sm:text-3xl font-bold">Contacto</CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-8 p-6">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Información de contacto</h3>
            <div className="flex items-center space-x-3">
              <Phone className="text-[#FFA07A] w-5 h-5" />
              <Link href="https://wa.me/message/NG2GF3C4WCGFI1" className="text-sm sm:text-base">
                +595 971 331 257
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="text-[#FFA07A] w-5 h-5" />
              <span className="text-sm sm:text-base">freshencar@gmail.com</span>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="text-[#FFA07A] w-5 h-5 mt-1" />
              <span className="text-sm sm:text-base">
                Cambyretá - Barrio San José, calle S/N casi Los Inmigrantes
              </span>
            </div>
          </div>
          <form onSubmit={onSubmitHandler} className="space-y-4">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre Completo
              </label>
              <Input
                id="nombre"
                name="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                type="text"
                placeholder="Ej: Joe Doe"
                className="w-full"
              />
              {error && !nombre && <span className="text-red-500">Este campo es obligatorio</span>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Correo Electrónico
              </label>
              <Input
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Ej: tucorreo@gmail.com"
                className="w-full"
              />
              {error && !email && <span className="text-red-500">Este campo es obligatorio</span>}
            </div>
            <div>
              <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
                Teléfono
              </label>
              <Input
                id="telefono"
                name="telefono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                placeholder="Ej: 0971 331 257"
                className="w-full"
              />
              {error && !telefono && <span className="text-red-500">Este campo es obligatorio</span>}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Escribe tu mensaje aquí"
                rows={4}
                className="w-full"
              />
              {error && !message && <span className="text-red-500">Este campo es obligatorio</span>}
            </div>
            <Button className="w-full bg-[#FFA07A] text-white hover:bg-[#FF8C50] !important" type="submit">
              <Send className="w-4 h-4 mr-2" />
              Enviar
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
};

export default Contacto;
