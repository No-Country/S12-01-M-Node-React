import { UsuarioLogged } from "@/helpers/interfaces";
import React from "react";
import { useForm } from "react-hook-form";

interface HeaderEditarPerfilProps {
  user: UsuarioLogged;
}

export const EditarDatos = ({ user }: HeaderEditarPerfilProps) => {
  const { register, handleSubmit, reset } = useForm();

  const onHandleSubmit = async (data: any) => {
    if (data.telephone !== "" && data.email !== "") {
      try {
        const res = await fetch(
          `https://s12-01-m-node-react.onrender.com/api/v1/user/${user._id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              telephone: data.telelephone,
              email: data.email,
            }),
          }
        );
        if (res.ok) {
          const responseData = await res.json();
          console.log("Respuesta del servidor:", responseData);
          return responseData;
        } else {
          return Promise.reject({
            err: true,
            status: res.status,
            statusText: res.statusText,
          });
        }
      } catch (err) {
        return err;
      }
    }
    reset();
  };
  return (
    <form
      className="w-1/2 flex flex-col px-10"
      onSubmit={handleSubmit(onHandleSubmit)}>
      <label htmlFor="telephone">Teléfono</label>
      <input
        type="text"
        {...register("telephone")}
        className="h-[56px] w-full rounded-lg border-gray-400 border mb-6 px-4"
      />
      <label htmlFor="email">Correo Electrónico</label>
      <input
        type="text"
        {...register("email")}
        className="h-[56px] w-full rounded-lg border-gray-400 border mb-6 px-4"
      />
      <button
        type="submit"
        className="w-1/3 self-end bg-Principal text-white font-medium py-3 rounded-[10px] mb-8">
        Guardar cambios
      </button>
    </form>
  );
};
