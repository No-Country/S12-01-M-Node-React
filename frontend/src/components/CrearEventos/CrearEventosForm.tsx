"use client";
import useUser from "@/store/loginStore";
import { useForm } from "react-hook-form";
import { ModalCreacionEvento } from "./ModalCreacionEvento";
import { useState } from "react";

export const CrearEventosForm = () => {
  const { register, reset, handleSubmit, watch } = useForm();
  const logged = useUser((state) => state.loginInfo);
  const [showModal, setShowModal] = useState(false);

  const onHandleSubmit = async (data: any) => {
    const formattedDate = formatFechaHora(data.fecha, data.hora);
    const newData = { ...data, fecha: formattedDate };
    const stock = Math.floor(Math.random() * 501);

    try {
      const res = await fetch(
        `https://s12-01-m-node-react.onrender.com/api/v1/events/createEvents`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: "data.nombre",
            users: logged.usuario.id,
            categories: data.categoria,
            location: data.location,
            date_of_event: newData.fecha,
            stock_tickets: stock,
            price: stock,
            comments: [],
            image: "/evento1.png",
          }),
        }
      );
      console.log(res);
      if (res.ok) {
        const responseData = await res.json();
        console.log("Respuesta del servidor:", responseData);
        reset();
        setShowModal(true);
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
  };

  const formatFechaHora = (fecha: string, hora: string) => {
    const fechaHora = new Date(`${fecha}T${hora}`);
    const formattedFechaHora = fechaHora.toISOString();
    return formattedFechaHora;
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <form
      className="p-10 mb-10"
      onSubmit={handleSubmit(onHandleSubmit)}>
      <section className="flex flex-col gap-4 mb-8">
        <h2 className="font-bold text-[32px]">Información del Evento</h2>
        <input
          type="text"
          placeholder="Nombre del evento"
          className="px-4 h-14 w-1/2 border border-gray-400 rounded-[10px]"
          {...register("nombre")}
        />
        <select
          className="px-4 h-14 w-1/2 border border-gray-400 rounded-[10px]"
          {...register("categoria")}>
          <option value="">Categorías</option>
          <option value="Artes escenicas">Artes Escénicas</option>
          <option value="Musica">Música</option>
          <option value="Negocios">Negocios</option>
          <option value="Comunidad">Comunidad</option>
          <option value="Gastronomia">Gastronomía</option>
          <option value="Vida nocturna">Vida Nocturna</option>
        </select>
      </section>
      <section className="flex flex-col gap-4 mb-8">
        <h2 className="font-bold text-[32px]">Locación</h2>
        <p>
          Ayude a las personas de la zona a descubrir su evento e informe a los
          asistentes dónde presentarse.
        </p>
        <div className="flex gap-8 mb-4">
          <label
            htmlFor="presencial"
            className="relative px-8 py-4">
            Evento Presencial
            <input
              type="radio"
              id="presencial"
              value="presencial"
              className="radioButtonHomePage border border-gray-400 rounded-[10px] checked:border-Principal"
              {...register("ubicacion")}
            />
          </label>
          <label
            htmlFor="online"
            className="relative px-8 py-4">
            Evento Online
            <input
              type="radio"
              value="online"
              className="radioButtonHomePage border border-gray-400 rounded-[10px] checked:border-Principal"
              {...register("ubicacion")}
            />
          </label>
        </div>

        <input
          type="text"
          placeholder={
            watch("ubicacion") === "presencial"
              ? "Ubicación del Evento"
              : "Agregar enlace de transmisión en vivo"
          }
          className="px-4 h-14 w-1/2 border border-gray-400 rounded-[10px]"
          {...register("location")}
        />
      </section>
      <section className="flex flex-col gap-4 mb-8">
        <h2 className="font-bold text-[32px]">Fecha y Hora</h2>
        <p>
          Díle a los asistentes cuándo comienza y termina su evento para que
          puedan hacer planes para asistir.
        </p>
        <input
          className="px-4 h-14 w-1/2 border border-gray-400 rounded-[10px]"
          type="date"
          placeholder="Fecha del Evento"
          {...register("fecha")}
        />
        <input
          className="px-4 h-14 w-1/2 border border-gray-400 rounded-[10px]"
          type="time"
          placeholder="Hora del Evento"
          {...register("hora")}
        />
      </section>
      <section className="flex gap-8">
        <button
          type="reset"
          className="px-4 py-2 bg-gray-400 rounded-[10px] text-white">
          Descartar
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-Azul rounded-[10px] text-white">
          Crear y Continuar
        </button>
      </section>
      {showModal && <ModalCreacionEvento onClose={closeModal} />}
    </form>
  );
};
