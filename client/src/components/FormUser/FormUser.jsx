"use client";
import React from "react";
import Link from "next/link";

const FormUser = ({
  onSubmitHandler,
  isRegister,
  nombre,
  email,
  telefono,
  password,
  confirmPassword,
  loginErrors,
  passwordConfirmed,
  inputChange,
  emailError,
  passwordError,
  handleEmailChange,
  handlePasswordChange,
}) => {
  return (    
    <form onSubmit={(e) => onSubmitHandler(e)}>
      <div className="flex">
        <div className="basis-2/5">
          <div className="py-5">
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
                  onChange={(e) => handleEmailChange(e)}
                  type="text"
                  name="email"
                  placeholder="Ej: tucorreo@gmail.com"
                  className={`bg-[#f9f4fa] border border-zinc-900 mb-4 h-8 p-3 ${
                    emailError && "border-red-500"
                  }`}
                />
                {emailError && (
                  <h1 className="border-l-2 bg-gray-300 border-l-red-700 px-2 py-1 mb-2">
                    {emailError}
                  </h1>
                )}
                <label>Teléfono(opcional)</label>
                <input
                  type="text"
                  name="telefono"
                  value={telefono}
                  onChange={(e) => inputChange(e)}
                  className="bg-[#f9f4fa] border border-zinc-900 mb-4 h-8 p-3"
                  placeholder="Ej: 0971 111 111"
                />
              </div>

              {isRegister && (
                <div className="flex flex-col">
                  <label>Contraseña</label>
                  <input
                    required
                    value={password}
                    onChange={(e) => handlePasswordChange(e)}
                    type="password"
                    name="password"
                    id="password"
                    placeholder=""
                    className={`bg-[#f9f4fa] border border-zinc-900 mb-4 h-8 p-3 ${
                      passwordError && "border-red-500"
                    }`}
                  />
                  {passwordError && (
                    <h1 className="border-l-2 bg-gray-300 border-l-red-700 px-2 py-1 mt-2">
                      <p>{passwordError}</p>
                    </h1>
                  )}
                </div>
              )}
              {isRegister && (
                <div className="flex flex-col">
                  <label>Confirmar Contraseña</label>
                  <input
                    required
                    value={confirmPassword}
                    onChange={(e) => inputChange(e)}
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder=""
                    className="bg-[#f9f4fa]  border border-zinc-900  mb-4 h-8 p-3 "
                  />
                  {/* Mostrar el mensaje de error de contraseña */}
                  {password !== confirmPassword && (
                    <h1 className="border-l-2 bg-gray-300 border-l-red-700 px-2 py-1 mt-2">
                      Las contraseñas no coinciden!
                    </h1>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col">
            <button className="bg-black text-white h-10 text-xl" type="submit">
              {isRegister ? `Crear una cuenta` : `Guardar`}
            </button>
            {isRegister && (
              <span className="self-center">
                ¿Ya tienes acceso?.
                <Link href="/store/user/login"> Acceso</Link>
              </span>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormUser;
