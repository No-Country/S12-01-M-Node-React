import React from "react";
import { OrganizadoresCard } from "./OrganizadoresCard";
import Draw from "@/assets/img/organizadores/Draw.png";
import NewYork from "@/assets/img/organizadores/newyork.png";
import Rusty from "@/assets/img/organizadores/Re.png";
import WorldVirtual from "@/assets/img/organizadores/WorldVirtual.png";

export const OrganizadoresDestacados = () => {
  const organizadores = [
    {
      nombre: "Rusty",
      imagen: Rusty,
      seguidores: 12356,
    },
    {
      nombre: "Draw Brighton",
      imagen: Draw,
      seguidores: 12356,
    },
    {
      nombre: "NewYork Adventure",
      imagen: NewYork,
      seguidores: 12356,
    },
    {
      nombre: "WorldVirtual Tour",
      imagen: WorldVirtual,
      seguidores: 12356,
    },
  ];

  return (
    <section className="w-full h-[491px] bg-[#CBD4F3] px-[40px] py-[52px]">
      <h3 className="text-[40px] font-bold mb-12">Organizadores Destacados</h3>
      <div className="flex gap-8">
        {organizadores.map((organizador) => (
          <OrganizadoresCard
            key={organizador.nombre}
            nombre={organizador.nombre}
            imagen={organizador.imagen}
            seguidores={organizador.seguidores}
          />
        ))}
      </div>
    </section>
  );
};
