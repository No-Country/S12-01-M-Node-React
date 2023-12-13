import { Eventos } from "@/helpers/interfaces";
import Image from "next/image";
import favoriteWhiteIcon from "@/assets/svg/FavoriteWhite.svg";
import Link from "next/link";

interface CardEventoContainerProps {
  eventos: Eventos[];
  currentIndex: number;
}

export const CardEventoContainer: React.FC<CardEventoContainerProps> = ({
  eventos,
  currentIndex,
}) => {
  return (
    <article className="flex gap-4 overflow-hidden">
      {eventos.map((evento) => (
        <div
          key={evento.nombre}
          className="h-[377px] bg-gradient-to-tr from-pink-600 via-indigo-500 to-indigo-500 rounded-[20px] p-[1px] basis-[331px] grow-0 shrink-0 inline-block relative"
          style={{
            transform: `translateX(${-currentIndex * 100}%)`,
            transition: "transform 0.5s ease",
          }}>
          <span className="w-11 h-11 rounded-full border border-black-300 absolute z-10 flex items-center justify-center top-3 right-3">
            <Image
              src={favoriteWhiteIcon}
              alt="agregar a favoritos"
            />
          </span>
          <div className="h-[375px] w-full rounded-[20px] bg-white relative">
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
              <div className="flex justify-between items-center">
                <h4 className="font-bold text-sm text-Principal uppercase">
                  {evento.categoria}
                </h4>
                <p className="uppercase text-sm font-bold text-[#4E4E4E]">
                  18:00 HS
                </p>
              </div>
              <h2 className="font-bold text-xl text-black">
                {evento.nombre} en {evento.location}
              </h2>
              <p className="text-[#666666] text-[15px]">
                By <span className="uppercase">{evento.dueño}</span>
              </p>
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-black text-base">
                  A partir de ${evento.precio.toFixed(2)}
                </h3>
                <Link
                  href={"/eventodetail"}
                  className="w-[110px] h-[40px] bg-Principal text-white text-center text-base font-medium rounded-2xl py-2">
                  Ver Evento
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </article>
  );
};
