"use client";
import { Eventos } from "@/helpers/interfaces";
import Image from "next/image";
import favoriteWhiteIcon from "../../assets/svg/FavoriteWhite.svg";
import Link from "next/link";
import { formatoFecha, formatoHora } from "@/helpers/formatdate";

interface EventoCardPerfil {
  event: Eventos;
}

export const EventoCardPerfil = ({ event }: EventoCardPerfil) => {
  return (
    <div className="h-[400px] bg-gradient-to-tr from-pink-600 via-indigo-500 to-indigo-500 rounded-[20px] p-[1px] basis-[331px] grow-0 shrink-0 inline-block relative">
      <span className="w-11 h-11 rounded-full border border-black-300 absolute z-10 flex items-center justify-center top-3 right-3">
        <Image
          src={favoriteWhiteIcon}
          alt="agregar a favoritos"
        />
      </span>
      <div className="h-[398px] w-full rounded-[20px] bg-white relative">
        <Image
          src={event.image}
          width={329}
          height={178}
          alt={`Foto del event ${event.name}`}
        />
        <span className="bg-Azul absolute text-white top-4 left-3 px-2 py-1 text-sm font-bold rounded-[4px]">
          {formatoFecha(event.date_of_event)}
        </span>
        <div className="p-4 flex flex-col gap-[6px]">
          <div className="flex justify-between items-center">
            <h4 className="font-bold text-sm text-Principal uppercase">
              {event.categories}
            </h4>
            <p className="uppercase text-sm font-bold text-[#4E4E4E]">
              {formatoHora(event.date_of_event)}HS
            </p>
          </div>
          <h2 className="font-bold text-xl text-black">
            {event.name} en {event.location}
          </h2>
          <p className="text-[#666666] text-[15px]">
            By <span className="uppercase">{event.users}</span>
          </p>
          <div className="flex justify-center items-end">
            <Link
              href={`/eventdetail/${event._id}`}
              className="py-2 px-4 h-[40px] bg-gray-500 text-white text-center text-base font-medium rounded-2xl">
              Descargar mi entrada
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
