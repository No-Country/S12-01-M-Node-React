"use client";
import { roboto } from "@/assets/font";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface RegisterFormInputs {
  username: string;
  password: string;
}

const RegisterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>();

  const onSubmit: SubmitHandler<RegisterFormInputs> = (data) => {
    // Simula el proceso de inicio de sesión
    console.log("Datos de registro de usuario:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`flex flex-col gap-4 text-${roboto}`}
    >
      <div>
        <label className="  text-[#4e4e4e] font-semibold" htmlFor="user">
          {" "}
          Correo Electrónico
        </label>
        <div className="flex items-center h-10 rounded-lg border-2 w-full px-5 py-6 border-[#D9D9D9] mt-1">
          <EnvelopeIcon className="text-base w-5 h-5 opacity-20" />
          <input
            type="gmail"
            {...register("username", { required: true })}
            placeholder="Tu correo electrónico"
            className="ring-transparent ring-0 w-full focus:ring-0 focus:ring-transparent text-[#4e4e4e] outline-none pl-2 "
            name="user"
          />
        </div>
        {errors.username && <p>Este campo es requerido</p>}
      </div>
      <div>
        <label className="text-[#4e4e4e] font-semibold" htmlFor="pass">
          Contraseña
        </label>

        <div className="flex items-center h-10 rounded-lg border-2 w-full px-5 py-6 border-[#D9D9D9] mt-1">
          <LockClosedIcon className="text-base w-5 h-5 opacity-20" />

          <input
            type="password"
            {...register("password", { required: true, minLength: 6 })}
            placeholder="Tu contraseña"
            className="ring-transparent ring-0 w-full focus:ring-0 focus:ring-transparent text-[#4e4e4e] outline-none pl-2 "
            name="pass"
          />
        </div>
        {errors.password && (
          <p>La contraseña debe tener al menos 6 caracteres</p>
        )}
      </div>

      <button
        type="submit"
        className="py-[10px] my-3 px-6 bg-[#be316c] hover:bg-[#cf4f85] duration-300 rounded-lg font-medium text-xl text-white"
      >
        Crear cuenta
      </button>
    </form>
  );
};

export default RegisterForm;
