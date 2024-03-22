"use client";
import { apiUrl } from "@/config";
import { useUser } from "@/contexts/UserContext";
import { faBox, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const MiCuenta = () => {
  const { user, logout } = useUser();
  const router = useRouter();
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    try {
      const response = await axios.get(`${apiUrl}/ventas/cliente/${user._id}`);
      const result = response.data;
      setOrders(result);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async () => {
    try {
      const response = await axios.delete(`${apiUrl}/user/${user._id}`);
      const result = response.data;
      console.log(result);
      alert("Tu usuario se elimino");
      logout();
      router.push("/store/user/login");
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getOrders();
  }
  , []);

  return user ? (
    <div className="px-28 py-7 h-full">
      <p className=" text-5xl py-5 font-bold tracking-wider"> Mi cuenta </p>
      <div className="flex gap-4 mb-2">
        <Link className="underline" href="/store/user/editUser">
          Editar
        </Link>
        <button className="underline" onClick={() => deleteUser()}>
          Eliminar
        </button>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h1 className="text-xl font-bold pb-2">Datos Personales</h1>
          <span className="font-bold">{user.nombreCompleto}</span>
          <span>{user.email}</span>
          <span>Télefono: {user.telefono}</span>
          <Link
            className="mt-2 bg-[#990000] h-8 w-16 text-[#F5F5F5] text-center text-lg justify-center ml-2"
            href="/store"
          >
            Salir
          </Link>
        </div>

        <div className="flex flex-col">
          <FontAwesomeIcon className="h-8" icon={faShoppingCart} />
          <span>Realize una compra</span>
          <Link
            href="/store/products"
            className="mt-2 bg-[#000000] h-8 w-34 text-[#F5F5F5] text-center text-lg justify-center"
          >
            Ir a la tienda
          </Link>
        </div>

        <div className="flex flex-col">
          <h1 className="text-xl font-bold">
            <FontAwesomeIcon icon={faBox} /> Mis Pedidos
          </h1>
          <div>
            {orders.length > 0 ? (
              orders.map((order) => (
                <div key={order._id} className="flex flex-col gap-2 bg-white rounded-md border-[1px] border-black p-2 ">
                  <span>
                    <span className="font-bold">Pedido: </span>
                    {order._id}
                  </span>
                  <span>
                    <span className="font-bold">Estado: </span>
                    {order.estado}
                  </span>
                  <span>
                    <span className="font-bold">Total: </span>
                    {order.detailProduct.reduce(
                      (acc, item) => acc + item.price * item.cantidad,
                      0
                    )}
                  </span>
                  <span>
                    <span className="font-bold">Fecha: </span>
                    {order.createdAt}
                  </span>
                </div>
              ))
            ) : (
              <span>No tienes pedidos</span>
            )}
        </div>
      </div>
    </div>
    </div>
  ) : null;
};

export default MiCuenta;
