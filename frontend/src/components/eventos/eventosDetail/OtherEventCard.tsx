"use client";
import { Eventos } from "@/helpers/interfaces";
import Image from "next/image";
import favoriteWhiteIcon from "../../assets/svg/FavoriteWhite.svg";
import { formatoFecha, formatoHora } from "@/helpers/formatdate";

interface EventoCardProps {
  evento: Eventos;
}

export const OtherEventCard = ({ evento }: EventoCardProps) => {
  return (
    <div className="h-[377px] bg-gradient-to-tr from-pink-600 via-indigo-500 to-indigo-500 rounded-[20px] p-[1px] basis-[331px] grow-0 shrink-0 inline-block relative">
      <span className="w-11 h-11 rounded-full border border-black-300 absolute z-10 flex items-center justify-center top-3 right-3">
        <Image
          src={favoriteWhiteIcon}
          alt="agregar a favoritos"
        />
      </span>
      <div className="h-[375px] w-full rounded-[20px] bg-white relative">
        <Image
          src={"/images/evento1.png"}
          width={329}
          height={178}
          alt={`Foto del evento ${evento.name}`}
        />
        <span className="bg-Azul absolute text-white top-4 left-3 px-2 py-1 text-sm font-bold rounded-[4px]">
          {formatoFecha(evento.date_of_event)}
        </span>
        <div className="p-4 flex flex-col gap-[6px]">
          <div className="flex justify-between items-center">
            <h4 className="font-bold text-sm text-Principal uppercase">
              {evento.categories}
            </h4>
            <p className="uppercase text-sm font-bold text-[#4E4E4E]">
              {formatoHora(evento.date_of_event)}
            </p>
          </div>
          <h2 className="font-bold text-xl text-black">
            {evento.name} en {evento.location}
          </h2>
          <p className="text-[#666666] text-[15px]">
            By <span className="uppercase">{evento.users}</span>
          </p>
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-black text-base">
              A partir de ${evento.price.toFixed(2)}
            </h3>
            <button className="w-[110px] h-[40px] bg-Principal text-white text-center text-base font-medium rounded-2xl">
              Ver Evento
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
