"use client";
import { roboto } from "@/assets/font";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useForm } from "react-hook-form";

interface RegisterFormInputs {
  nombre: string;
  apellido: string;
  telefono: string;
  email: string;
  password: string;
}

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterFormInputs>();

  const onSubmit = (data: RegisterFormInputs) => {
    // Simula el proceso de inicio de sesión
    console.log("Datos de registro de usuario:", data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`flex flex-col gap-4 text-${roboto}`}>
      <div className="flex gap-2">
        <div className="flex flex-col w-full">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            {...register("nombre", { required: true })}
            className="h-10 rounded-lg border-2 w-full px-5 py-6 border-[#D9D9D9] mt-1 "
            name="nombre"
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="apellido">Apellido</label>
          <input
            type="text"
            {...register("apellido", { required: true })}
            className="h-10 rounded-lg border-2 w-full px-5 py-6 border-[#D9D9D9] mt-1 "
            name="apellido"
          />
        </div>
      </div>
      <div>
        <label htmlFor="telefono">Teléfono</label>
        <input
          type="text"
          {...register("telefono", { required: true })}
          className="h-10 rounded-lg border-2 w-full px-5 py-6 border-[#D9D9D9] mt-1 "
          placeholder="+59 | 1234 123456"
          name="telefono"
        />
      </div>
      <div>
        <label
          className="  text-[#4e4e4e] font-semibold"
          htmlFor="user">
          Correo Electrónico
        </label>
        <div className="flex items-center h-10 rounded-lg border-2 w-full px-5 py-6 border-[#D9D9D9] mt-1">
          <EnvelopeIcon className="text-base w-5 h-5 opacity-20" />
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="Tu correo electrónico"
            className="ring-transparent ring-0 w-full focus:ring-0 focus:ring-transparent text-[#4e4e4e] outline-none pl-2 "
            name="email"
          />
        </div>
        {errors.email && <p>Este campo es requerido</p>}
      </div>
      <div>
        <label
          className="text-[#4e4e4e] font-semibold"
          htmlFor="password">
          Contraseña
        </label>
        <div className="flex items-center h-10 rounded-lg border-2 w-full px-5 py-6 border-[#D9D9D9] mt-1">
          <LockClosedIcon className="text-base w-5 h-5 opacity-20" />
          <input
            type="password"
            {...register("password", { required: true })}
            placeholder="Tu contraseña"
            className="ring-transparent ring-0 w-full focus:ring-0 focus:ring-transparent text-[#4e4e4e] outline-none pl-2 "
            name="password"
          />
        </div>
        {errors.password && (
          <p>La contraseña debe tener al menos 6 caracteres</p>
        )}
      </div>
      <button
        type="submit"
        className="py-[10px] my-3 px-6 bg-[#be316c] hover:bg-[#cf4f85] duration-300 rounded-lg font-medium text-xl text-white">
        Crear cuenta
      </button>
    </form>
  );
};

export default RegisterForm;
