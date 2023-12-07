'use client'
import { useState, useEffect } from "react";
import { roboto } from "@/assets/font";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import * as regexPatterns from "../../../helpers/Regex";

interface LoginFormInputs {
  gmail: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  // State to hold form data
  const [formData, setFormData] = useState<LoginFormInputs | null>(null);

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    setFormData(data);
    console.log("Datos de inicio de sesión:", data);

  };

  useEffect(() => {
    console.log("FormData:", formData);
  }, [formData]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`flex flex-col text-${roboto}`}>
      <div className="my-2">
        <label
          className="  text-[#4e4e4e]"
          htmlFor="gmail">
          {" "}
          Correo Electrónico
        </label>

        <div className="flex items-center h-10 rounded-lg border-2 w-full px-5 py-6 border-[#D9D9D9] ">
          <EnvelopeIcon className="text-base w-5 h-5 opacity-20" />
          <input
            type="email"
            {...register("gmail", {
              required: true,
                         })}
            placeholder="Tu correo electrónico"
            className="ring-transparent ring-0 w-full focus:ring-0 focus:ring-transparent text-[#4e4e4e] outline-none pl-2 appearance-none  "
            name="gmail"
            id="gmail"
          />
        </div>
        {errors.gmail && <p>Este campo es requerido y debe ser un correo válido</p>}
      </div>
      <div className="my-4">
        <label
          className="  text-[#4e4e4e]"
          htmlFor="password">
          Contraseña
        </label>

        <div className="flex items-center h-10 rounded-lg border-2 w-full px-5 py-6 border-[#D9D9D9] ">
          <LockClosedIcon className="text-base w-5 h-5 opacity-20" />

          <input
            type="password"
            {...register("password", {
              required: true,
              
            })}
            placeholder="Tu contraseña"
            className="ring-transparent ring-0 w-full focus:ring-0 focus:ring-transparent text-[#4e4e4e] outline-none pl-2 "
            name="password"
            id="password"
          />
        </div>
        {errors.password && (
          <p>La contraseña debe tener al menos 6 caracteres</p>
        )}

        <span className="first-letter:uppercase text-[#1e75f7]   hover:underline-offset-3 hover:underline cursor-pointer py-2 underline">
          Olvide mi contraseña
        </span>
      </div>
      <button
        type="submit"
        className="py-[10px] px-6 bg-[#be316c] hover:bg-[#cf4f85] duration-300 rounded-lg font-medium text-xl text-white">
        Iniciar Sesión
      </button>
    </form>
  );
};

export default LoginForm;
