import Image from "next/image";
import checked from "@/assets/svg/checked.svg";
import { Eventos } from "@/helpers/interfaces";
import { formatoFecha, formatoHora } from "@/helpers/formatdate";

interface EventDetailProps {
  singleEvent: Eventos;
}

export const EventDetail = ({ singleEvent }: EventDetailProps) => {
  return (
    <div>
      <h4 className="font-bold text-2xl">Detalles</h4>
      <div className="p-10 flex flex-col gap-4">
        <div className="flex items-center justify-start gap-8">
          <Image
            src={checked}
            alt="checked"
            width={24}
            height={24}
          />
          <p>Categoría: {singleEvent.categories}</p>
        </div>
        <div className="flex items-center justify-start gap-8">
          <Image
            src={checked}
            alt="checked"
            width={24}
            height={24}
          />
          <p>Fecha: {formatoFecha(singleEvent.date_of_event)}</p>
        </div>
        <div className="flex items-center justify-start gap-8">
          <Image
            src={checked}
            alt="checked"
            width={24}
            height={24}
          />
          <p>Hora: {formatoHora(singleEvent.date_of_event)}</p>
        </div>
        <div className="flex items-center justify-start gap-8">
          <Image
            src={checked}
            alt="checked"
            width={24}
            height={24}
          />
          <p>Precio: {singleEvent.price}</p>
        </div>
      </div>
    </div>
  );
};
