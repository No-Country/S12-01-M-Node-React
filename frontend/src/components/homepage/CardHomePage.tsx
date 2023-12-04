import { Eventos } from "@/helpers/interfaces";
import Image from "next/image";

const evento: Eventos = {
  nombre: "Winona Riders + Fonso",
  dueño: "Indie Folks",
  categoria: "Música",
  location: "Club TRI",
  fecha: "8 de Febrero 2024",
  stock: 2000,
  precio: 2000,
  comentarios: [],
  imagen: "/images/evento1.png",
};

export const CardHomePage = () => {
  return (
    <aside className="w-[331px] h-[428px] bg-gradient-to-tr from-pink-600 via-indigo-500 to-indigo-500 rounded-[20px] p-[1px]">
      <div className="h-[377px] w-full rounded-[20px] bg-white relative">
        <Image
          src={evento.imagen}
          width={329}
          height={178}
          alt={`Foto del evento ${evento.nombre}`}
        />
        <span className="bg-Azul absolute text-white top-4 left-3 px-2 py-1 text-sm font-bold rounded-[4px]">
          {evento.fecha}
        </span>
        <div className="p-4 flex flex-col gap-[6px]">
          <h4 className="font-bold text-sm text-Principal uppercase">
            {evento.categoria}
          </h4>
          <h2 className="font-bold text-xl text-black">
            {evento.nombre} en {evento.location}
          </h2>
          <p className="uppercase text-sm font-bold text-[#4E4E4E]">18:00 HS</p>
          <h3 className="font-bold text-black text-base">
            A partir de ${evento.precio.toFixed(2)}
          </h3>
          <p className="text-[#666666] text-[15px]">
            By <span className="uppercase">{evento.dueño}</span>
          </p>
        </div>
      </div>
      <h2 className="w-full text-center font-bold uppercase text-white mt-3">
        Ver Evento
      </h2>
    </aside>
  );
};
