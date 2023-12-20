import { formatoFecha, formatoHora } from "@/helpers/formatdate";
import { Eventos } from "@/helpers/interfaces";
import Image from "next/image";
import Link from "next/link";

interface CardHomePageProps {
  popular: Eventos;
}

export const CardHomePage = ({ popular }: CardHomePageProps) => {
  const fechaFormateada = formatoFecha(popular.date_of_event);
  const horaFormateada = formatoHora(popular.date_of_event);

  return (
    <aside className="w-[331px] h-[450px] bg-gradient-to-tr from-pink-600 via-indigo-500 to-indigo-500 rounded-[20px] p-[1px]">
      <div className="h-[400px] w-full rounded-[20px] bg-white relative">
        <Image
          src={"/images/evento1.png"}
          width={329}
          height={178}
          alt={`Foto del evento ${popular.name}`}
        />
        <span className="bg-Azul absolute text-white top-4 left-3 px-2 py-1 text-sm font-bold rounded-[4px]">
          {fechaFormateada}
        </span>
        <div className="p-4 flex flex-col gap-[6px]">
          <h4 className="font-bold text-sm text-Principal uppercase">
            {popular.categories}
          </h4>
          <h2 className="font-bold text-xl text-black">
            {popular.name} en {popular.location}
          </h2>
          <p className="uppercase text-sm font-bold text-[#4E4E4E]">
            {horaFormateada} HS
          </p>
          <h3 className="font-bold text-black text-base">
            A partir de ${popular.price}
          </h3>
          <p className="text-[#666666] text-[15px]">
            By <span className="uppercase">{popular.users}</span>
          </p>
        </div>
      </div>
      <Link href={`/eventodetail/${popular._id}`}>
        <h2 className="w-full text-center font-bold uppercase text-white mt-3">
          Ver Evento
        </h2>
      </Link>
    </aside>
  );
};
