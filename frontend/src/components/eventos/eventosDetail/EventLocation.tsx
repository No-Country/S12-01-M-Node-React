import locationIcon from "@/assets/svg/locationIcon.svg";
import location from "@/assets/img/location.png";
import Image from "next/image";

export const EventLocation = () => {
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
        <p>
          Casa Frawen's. Diag. 74 y 59 La Plata, Provincia de Buenos Aires B1904
        </p>
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
