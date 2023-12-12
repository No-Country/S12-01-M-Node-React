import Image, { StaticImageData } from "next/image";
import React from "react";

interface OrganizadoresProps {
  nombre: string;
  imagen: StaticImageData;
  seguidores: number;
}

export const OrganizadoresCard = ({
  nombre,
  imagen,
  seguidores,
}: OrganizadoresProps) => {
  return (
    <div className="w-[211px] h-[276px] bg-white rounded-[10px] py-8 px-4 flex flex-col items-center justify-evenly">
      <Image
        src={imagen}
        alt="logo organizador"
        width={74}
        height={74}
      />
      <h4 className="font-bold text-base">{nombre}</h4>
      <p className="text-[#4E4E4E]">{seguidores} seguidores</p>
      <button className="bg-Principal text-white font-bold px-8 py-2 rounded-[10px] mt-4">
        Seguir +
      </button>
    </div>
  );
};
