"use client";
import { apiUrl } from "@/config";
import { useUser } from "@/contexts/UserContext";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginErrors, setLoginErrors] = useState({});

  const { user, login, logout } = useUser();
  const router = useRouter();

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoginErrors({});
    try {
      const response = await axios.post(`${apiUrl}/session`, {
        email,
        password,
      });
      const data = await response.data;
  
      const user = {
        ...data.user,
        accessToken: data.accessToken,
      };
      login(data.user);
      
      router.push("/store/user/mi-cuenta");
      

    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 400) {
        const responseData = error.response.data;
        if (responseData.errors && responseData.errors.password) {
          setLoginErrors({ password: "Contraseña incorrecta" });
        } else {
          setLoginErrors({ email: "Autenticación fallida" });
        }
      } else if (error.response && error.response.status === 404) {
        setLoginErrors({ email: "Correo electrónico incorrecto" });
      } else {
        setLoginErrors({ email: "Error de conexión" });
      }
    }
  
    setEmail("");
    setPassword("");
  };
  

  return (
    <div className="h-700px py-5 ps-20 bg-white">
      <div>
        <div className="pt-3">
          <form onSubmit={(event) => onSubmit(event)}>
            <h1 className="text-5xl font-bold">Iniciar Sesión</h1>
            <div className="flex">
              <div className="basis-2/5">
                <div className="py-5">
                  <div className="flex flex-col">
                    <div className="flex flex-col">
                      <label>Correo Electrónico</label>
                      <input
                        id="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        name="email"
                        placeholder="Ej: tucorreo@gmail.com"
                        className="bg-[#f9f4fa] border border-zinc-900 mb-4 h-8 p-3"
                      />
                      {loginErrors.email && (
                        <h1 className="border-l-2 bg-gray-300 border-l-red-700 px-2 py-1 mb-2">
                          {loginErrors.email}
                        </h1>
                      )}
                    </div>
                    <div className="flex flex-col">
                      <label>Contraseña</label>
                      <input
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        name="password"
                        id="password"
                        className="bg-[#f9f4fa]  border border-zinc-900  mb-4 h-8 p-3 "
                      />
                      {loginErrors.password && (
                        <h1 className="border-l-2 bg-gray-300 border-l-red-700 px-2 py-1 mt-2">
                          {loginErrors.password}
                        </h1>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Link href="/store/user/login/passwordReset">
                      ¿Olvidó su contraseña?
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col">
                  <button
                    className="bg-black text-white h-10 text-xl"
                    type="submit"
                  >
                    Iniciar Sesión
                  </button>
                  <span className="self-center">
                    ¿Aún no tienes cuenta?.
                    <Link href="/store/user/register"> Crea una cuenta</Link>
                  </span>
                </div>
              </div>
              {/* <div></div> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
