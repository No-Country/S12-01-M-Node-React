'use client';
import { useState, useEffect } from 'react';
import { roboto } from '@/assets/font';
import { LockClosedIcon, EnvelopeIcon } from '@heroicons/react/20/solid';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as regexPatterns from '../../../helpers/Regex';
import { LOGIN_ROUTE, MAIN_ROUTE } from '@/routes';
import { useRouter } from 'next/navigation';
import useUser from '@/store/loginStore';
import { Role } from '@/helpers/interfaces';

interface LoginFormInputs {
  gmail: string;
  password: string;
}


const LoginForm: React.FC = () => {
  const router = useRouter();
  const { setLogin } = useUser() 
  
  const {
        register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormInputs>();

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    try {
      const res = await fetch(`${MAIN_ROUTE}${LOGIN_ROUTE}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'same-origin',
        body: JSON.stringify({
          email: data.gmail,
          password: data.password,
        }),
      });
      if (res.ok) {
        const responseData = await res.json();
        console.log('Respuesta del servidor:', responseData);
        reset();
        router.push("/")
        setLogin({
          usuario: {
                id: responseData.payload._id,
                nombre: responseData.payload.name,
                email: responseData.payload.email,
                telefono: responseData.payload.telephone,
                role: responseData.payload.role   ,

              },
              isLogged: true,})
        return responseData;
      } else {
        return Promise.reject({
          err: true,
          status: res.status,
          statusText: res.statusText,
        });
      }
    } catch (err) {
      console.error('Respuesta erronea:', err);
      return err;
    }
  };


  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`flex flex-col text-${roboto}`}
    >
      <div className="my-2">
        <label className="  text-[#4e4e4e]" htmlFor="gmail">
          Correo Electrónico
        </label>

        <div className="flex items-center h-10 rounded-lg border-2 w-full px-5 py-6 border-[#D9D9D9]">
          <EnvelopeIcon className="text-base w-5 h-5 opacity-20" />
          <input
            type="email"
            {...register('gmail', {
              required: true,
            })}
            placeholder="Tu correo electrónico"
            className="ring-transparent ring-0 w-full focus:ring-0 focus:ring-transparent text-[#4e4e4e] outline-none pl-2 appearance-none autofill:bg-transparent"
            name="gmail"
            id="gmail"
          />
        </div>
        {errors.gmail && (
          <p>Este campo es requerido y debe ser un correo válido</p>
        )}
      </div>
      <div className="my-4">
        <label className="text-[#4e4e4e]" htmlFor="password">
          Contraseña
        </label>

        <div className="flex items-center h-10 rounded-lg border-2 w-full px-5 py-6 border-[#D9D9D9]">
          <LockClosedIcon className="text-base w-5 h-5 opacity-20" />

          <input
            type="password"
            {...register('password', {
              required: true,
            })}
            placeholder="Tu contraseña"
            className="ring-transparent ring-0 w-full focus:ring-0 focus:ring-transparent text-[#4e4e4e] outline-none pl-2"
            name="password"
            id="password"
          />
        </div>
        {errors.password && (
          <p>La contraseña debe tener al menos 6 caracteres</p>
        )}

        <span className="first-letter:uppercase text-[#1e75f7]   hover:underline-offset-3 hover:underline cursor-pointer py-2 underline">
          Olvidé mi contraseña
        </span>
      </div>
      <button
        type="submit"
        className="py-[10px] px-6 bg-[#be316c] hover:bg-[#cf4f85] duration-300 rounded-lg font-medium text-xl text-white"
      >
        Iniciar Sesión
      </button>
    </form>
  );
};

export default LoginForm;
