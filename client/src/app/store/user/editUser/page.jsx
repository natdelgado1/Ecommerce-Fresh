"use client";
import FormUser from "@/components/FormUser/FormUser";
import { apiUrl } from "@/config";
import { useUser } from "@/contexts/UserContext";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const editUser = () => {
  const { user, logout, login } = useUser();
  const router = useRouter();
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [loginErrors, setLoginErrors] = useState({});

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setLoginErrors({});
    const usuario = {
      nombreCompleto: nombre,
      email: email,
      telefono: telefono,
    };
    try {
      const response = await axios.put(`${apiUrl}/user/${user._id}`, usuario);
      const result = response.data;
      console.log(result);

      const accessToken = user.accessToken;
      let updateUser = result;
      updateUser.accessToken = accessToken;
      login(updateUser);
      router.push(`/store/user/mi-cuenta`);
    } catch (error) {
      console.log(error);
      setLoginErrors(error.response.data.errors);
    }
  };

  const inputChange = (e) => {
    if (e.target.name === "nombre") {
      setNombre(e.target.value);
    }
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "telefono") {
      setTelefono(e.target.value);
    }
  };

  useEffect(() => {
    if (user) {
      setNombre(user.nombreCompleto);
      setEmail(user.email);
      setTelefono(user.telefono);
    }
  }, []);

  return (
    <div className="ml-20">
      <div className="p-8">
        <h1 className="text-5xl font-bold">Editar Perfil</h1>
        <FormUser
          onSubmitHandler={onSubmitHandler}
          isRegister={false}
          nombre={nombre}
          email={email}
          telefono={telefono}
          password={""}
          confirmPassword={""}
          passwordConfirmed={false}
          loginErrors={loginErrors}
          inputChange={inputChange}
        />
      </div>
    </div>
  );
};
export default editUser;
