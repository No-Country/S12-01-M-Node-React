import React from "react";
import { useForm } from "react-hook-form";

export const EditarDatos = () => {
  const { register, handleSubmit, reset } = useForm();

  const onHandleSubmit = (data: any) => {
    if (data.telephone !== "" || data.email !== "") {
      console.log(data);
      reset();
    }
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
