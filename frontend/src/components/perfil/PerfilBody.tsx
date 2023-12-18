"use client";
import { useState } from "react";
import { PerfilSectionsBar } from "./PerfilSectionsBar";
import { Eventos } from "@/helpers/interfaces";
import { EventoCardPerfil } from "./EventoCardPerfil";

interface PerfilBodyProps {
  events: Eventos[];
}

export const PerfilBody = ({ events }: PerfilBodyProps) => {
  const [value, setValue] = useState<string>("mis entradas");

  return (
    <section className="mt-10">
      <article className="flex justify-between items-center mb-8 border-b pb-[14px] border-b-slate-400 ">
        <PerfilSectionsBar
          value={value}
          setValue={setValue}
        />
      </article>
      <article className="flex gap-8 flex-wrap">
        {events.map((event) => (
          <EventoCardPerfil
            event={event}
            key={event._id}
          />
        ))}
      </article>
    </section>
  );
};
