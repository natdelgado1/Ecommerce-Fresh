
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { apiUrl } from "@/config";
import FormUser from "@/components/FormUser/FormUser";

const RegisterUser = () => {
  const router = useRouter();
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loginErrors, setLoginErrors] = useState({});
  const [passwordConfirmed, setPasswordConfirmed] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (value) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(value);
  };

  const validatePassword = (value) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-=_+{};:'",.<>/?[\]`|~]).{8,}$/;
    return passwordRegex.test(value);
  };

  const handleEmailChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    if (!validateEmail(inputValue)) {
      setEmailError("Por favor ingresa un correo válido");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    const inputValue = e.target.value;
    setPassword(inputValue);
    if (!validatePassword(inputValue)) {
      setPasswordError("La contraseña debe tener al menos una mayúscula, una minúscula y un número");
    } else {
      setPasswordError("");
    }
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setLoginErrors({});

    if (password !== confirmPassword) {
      setPasswordConfirmed(false);
      return;
    }

    if (!validateEmail(email) || !validatePassword(password)) {
      return;
    }

    const user = {
      nombreCompleto: nombre,
      email: email,
      telefono: telefono,
      password: password,
      confirmPassword: confirmPassword,
    };

    try {
      const response = await axios.post(`${apiUrl}/user`, user);
      const result = response.data;
      console.log(result);
      router.push(`/store/user/login`);
    } catch (error) {
      console.log(error.response.data);
      if (error.response && error.response.data) {
        setLoginErrors(error.response.data.errors);
      } else {
        setLoginErrors({ general: "Algo salió mal ¡Intenta otra vez!" });
      }
    }
  };

  const inputChange = (e) => {
    const { name, value } = e.target;
    if (name === "nombre") {
      setNombre(value);
    }
    if (name === "telefono") {
      setTelefono(value);
    }
    if (name === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  return (
    <div>
      <div className="py-5 ps-20 bg-[#f9f4fa]">
        <div>
          <div className="pt-3">
            <h1 className="text-5xl font-bold">Crear mi cuenta</h1>
            <FormUser
              onSubmitHandler={onSubmitHandler}
              isRegister={true}
              nombre={nombre}
              email={email}
              telefono={telefono}
              password={password}
              confirmPassword={confirmPassword}
              loginErrors={loginErrors}
              passwordConfirmed={passwordConfirmed}
              inputChange={inputChange}
              emailError={emailError}
              passwordError={passwordError}
              handleEmailChange={handleEmailChange}
              handlePasswordChange={handlePasswordChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterUser;
