"use client";
import Image from "next/image";
import avatarPerfil from "@/assets/img/avatarPerfil.png";
import { useForm } from "react-hook-form";

interface editProfileFormProps {
  first_name: string;
  last_name: string;
}

export const HeaderEditarPerfil = () => {
  const { register, handleSubmit, reset } = useForm();

  const onHandleSubmit = (data: any) => {
    if (data.first_name !== "" || data.last_name !== "") {
      console.log(data);
      reset();
    }
  };

  return (
    <section className="px-10 py-12 flex w-full items-center">
      <div className="w-1/2 flex gap-6 items-center ">
        <Image
          src={avatarPerfil}
          alt="foto perfil"
          width={250}
          height={250}
        />
        <div className="flex flex-col gap-4">
          <button className="w-[200px] h-10 bg-gray-400 text-white text-center rounded-[10px]">
            Cargar foto
          </button>
          <button className="w-[200px] h-10 bg-gray-500 text-white text-center rounded-[10px]">
            Cambiar foto
          </button>
        </div>
      </div>
      <form
        className="w-1/2 flex flex-col"
        onSubmit={handleSubmit(onHandleSubmit)}>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          {...register("first_name")}
          className="h-[56px] w-full rounded-lg border-gray-400 border mb-6 px-4"
        />
        <label htmlFor="last_name">Apellido</label>
        <input
          type="text"
          {...register("last_name")}
          className="h-[56px] w-full rounded-lg border-gray-400 border mb-6 px-4"
        />
        <button
          type="submit"
          className="w-1/3 self-end bg-Principal text-white font-medium py-3 rounded-[10px]">
          Guardar cambios
        </button>
      </form>
    </section>
  );
};
