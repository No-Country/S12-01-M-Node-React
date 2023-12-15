import locationIcon from "@/assets/svg/locationIcon.svg";
import location from "@/assets/img/location.png";
import Image from "next/image";
import { Eventos } from "@/helpers/interfaces";

interface EventLocationProps {
  singleEvent: Eventos;
}

export const EventLocation = ({ singleEvent }: EventLocationProps) => {
  return (
    <div>
      <h4 className="font-bold text-2xl">Ubicación</h4>
      <div className="p-10 flex gap-4 items-center">
        <Image
          src={locationIcon}
          width={24}
          height={24}
          alt="ubicación"
        />
        <p>{singleEvent.location}</p>
      </div>
      <Image
        src={location}
        alt="ubicacion"
        width={743}
        height={275}
      />
    </div>
  );
};
