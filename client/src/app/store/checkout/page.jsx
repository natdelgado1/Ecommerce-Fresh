"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { apiUrl, imagesURL } from "@/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faClock,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useCart } from "@/contexts/CartContext";
import { useUser } from "@/contexts/UserContext";
import axios from "axios";
import { useRouter } from "next/navigation";

const CheckoutPage = () => {
  const router = useRouter();
  const { user, logout, login } = useUser();

  const {
    cart,
    addToCart,
    calculateTotal,
    calculateTotalCount,
    removeFromCart,
    removeAll
  } = useCart();
  const [entrega, setEntrega] = useState("domicilio");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [cel, setCel] = useState("");
  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    const checkIfOpen = () => {
      const now = new Date();
      const currentDay = now.getDay(); // Domingo = 0, Lunes = 1, ..., Sábado = 6
      const currentHour = now.getHours();
      const currentMinutes = now.getMinutes();

      // Horario de apertura y cierre (09:00 AM - 06:00 PM)
      const openingHour = 9;
      const closingHour = 18;

      // Solo de lunes a sábado
      if (currentDay >= 1 && currentDay <= 6) {
        if (
          (currentHour > openingHour && currentHour < closingHour) || 
          (currentHour === openingHour && currentMinutes >= 0) ||
          (currentHour === closingHour && currentMinutes === 0)
        ) {
          setIsOpen(true);
        } else {
          setIsOpen(false);
        }
      } else {
        setIsOpen(false); // Cerrado los domingos
      }
    };

    // Verifica inmediatamente al cargar la página
    checkIfOpen();

    // Verifica cada minuto si el estado cambia
    const intervalId = setInterval(checkIfOpen, 60000);

    return () => clearInterval(intervalId); // Limpia el intervalo al desmontar el componente
  }, []);

  function format(num) {
    if (num) {
      return (
        "Gs. " +
        Number.parseInt(num)
          .toFixed(0)
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
      );
    } else {
      return "Gs. 0";
    }
  }

  const addItem = (item) => {
    addToCart(item, item.talla, 1);
  };

  useEffect(() => {
    setName(user?.nombreCompleto || "");
    setEmail(user?.email || "");
    setCel(user?.telefono || "");
  }, [user]);

  
  const confirmarPedido = (e) => {
    e.preventDefault();
    const venta = {
      clientId: user?._id || "anonimo",
      estado: "pendiente",
      name: name,
      city: city,
      address: address,
      email: email,
      cel: cel,
      entrega: entrega,
      detailProduct: cart.map((item) => {
        return {
          cantidad: item.quantity,
          product: item._id,
          price: item.price,
          talla: item.talla,
        };
      }),
    };
    if (entrega === "domicilio") {
      venta.envio = 25000;
    } else {
      venta.envio = 0;
    }
    if (cart.length > 0) {
      axios
        .post(`${apiUrl}/ventas`, venta)
        .then((res) => {
          console.log(res.data);
          removeAll();
          if (user) {
            router.push("/store/user/mi-cuenta");
          } else {
            alert("¡Su pedido ha sido registrado nos contactaremos con usted!");
            router.push("/store");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return cart.length > 0 ? (
    <div className="w-full p-4">
      <h1 className="text-5xl p-3  font-bold tracking-wider text-center py-8">Confirmar pedidos</h1>
      <div className="flex justify-evenly">
        <form onSubmit={confirmarPedido} className="">
          <p>
            Completa tu pedido más rápido.{" "}
            <Link className="font-bold text-red-800" href="/store/user/login">
              Iniciar sesión.
            </Link>
          </p>
          <div className="mt-6">
            <h1 className="font-bold text-xl">Tipo de entrega</h1>
            <div className="ml-2 flex flex-col gap-4">
              <div>
                <input
                  type="radio"
                  name="entrega"
                  id="domicilio"
                  checked={entrega === "domicilio"}
                  onChange={() => setEntrega("domicilio")}
                  required
                />
                <label htmlFor="domicilio"> Envío a domicilio</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="entrega"
                  id="retiro"
                  checked={entrega === "retiro"}
                  onChange={() => setEntrega("retiro")}
                  required
                />
                <label htmlFor="retiro"> Retiro en puerta</label>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h1 className="font-bold text-xl">Información de entrega</h1>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <label htmlFor="name"> Nombre completo:</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-300 p-1 border-2 border-gray-400"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="city">Ciudad</label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  className="bg-gray-300 p-1 border-2 border-gray-400"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="adress">Dirección</label>
                <input
                  type="text"
                  name="address"
                  id="adress"
                  className="bg-gray-300 p-1 border-2 border-gray-400"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email">Correo electrónico</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-300 p-1 border-2 border-gray-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="cel">Celular</label>
                <input
                  type="cel"
                  name="cel"
                  id="cel"
                  className="bg-gray-300 p-1 border-2 border-gray-400"
                  value={cel}
                  onChange={(e) => setCel(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col">
                <button
                  type="submit"
                  className="border-2 border-gray-400 h-9 p-2 mt-2 w-30 font-bold text-black flex items-center justify-between px-8"
                >
                  Confirmar pedido
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            </div>
          </div>
        </form>
        <div className=" pt-12">
          <div className="grid grid-cols-2 gap-2">
            {cart.map((item, index) => {
              return (
                <div className=" flex gap-2 items-center" key={index}>
                  <img
                    src={`${imagesURL}/products/${item._id}/principal.jpg`}
                    width={80}
                  ></img>
                  <div>
                    <p className="font-bold">{item.title}</p>
                    <p>
                      <span className="font-bold">{item.quantity}</span> x{" "}
                      {format(item.price)}
                    </p>
                    <div className="flex gap-2">
                      <button
                        className="border-2 border-gray-400 w-6 h-6 rounded-md"
                        onClick={(e) => {
                          removeFromCart(item._id, item.talla);
                        }}
                      >
                        <FontAwesomeIcon color="red" icon={faTrash} />
                      </button>
                      <button className="bg-[#333333] w-6 h-6 rounded-md">
                        <FontAwesomeIcon
                          color="white"
                          onClick={(e) => {
                            addItem(item);
                          }}
                          icon={faPlus}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-8 flex flex-col gap-2 w-[50%]">
            <p className="font-bold text-xl">Resumen</p>
            <div className="flex justify-between font-bold ">
              <span>Productos ({calculateTotalCount()})</span>
              <span>{format(calculateTotal())}</span>
            </div>
            <div className="flex justify-between">
              <span>Con envío</span>
              <span>{format(calculateTotal() + 25000)}</span>
            </div>
            <div className="flex justify-between font-bold ">
              <span className="text-lg">Total sin envío</span>
              <span className="text-lg">{format(calculateTotal())}</span>
            </div>
          </div>
          <div className="mt-4 w-[80%]">
            <p className="text-sm font-bold text-red-400">
              ¡Bien! Haz tu pedido y lo gestionaremos dentro de nuestro horario
              de apertura.
            </p>
          </div>
          <div className="mt-4 w-[80%]">
            <p className="text-sm">
              <FontAwesomeIcon color="grey" icon={faClock} />
              {isOpen ? ' ¡Abierto ahora!' : ' ¡Cerrado ahora!'}
            </p>
          </div>
          <div className="mt-4 w-[80%]">
            <p className="text-sm">Lunes a Sábado: 09:00 a. m. - 06:00 p. m.</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="p-12 text-center text-lg flex flex-col justify-center items-center">
      <p>No hay items en tu carrito</p>
      <p className="mt-4 bg-[#666666] text-white p-4 w-max ">
        <Link className="font-bold text-2xl " href={"/store"}>
          ¡Ir de compras!{" "}
          <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
        </Link>
      </p>
    </div>
  );
};

export default CheckoutPage;
