"use client";
import { Eventos } from "@/helpers/interfaces";
import { EventoCard } from "./EventoCard";
import { FilterBarEventos } from "./filterBarEventos";
import { useState } from "react";
import { SearchFormEventos } from "./SearchFormEventos";
import { eventosArray } from "@/helpers/eventosArray";

interface EventosContainerProps {
  categoria: string;
}

export const EventosContainer = ({ categoria }: EventosContainerProps) => {
  const [value, setValue] = useState<string>("todos");

  const filteredEventsByCategory = eventosArray.filter((evento) => {
    if (categoria === "negocios") {
      return evento.categoria === "Negocios";
    }
    if (categoria === "musica") {
      return evento.categoria === "Musica";
    }
    if (categoria === "vidanocturna") {
      return evento.categoria === "Vida Nocturna";
    }
    if (categoria === "gastronomia") {
      return evento.categoria === "Gastronomia";
    }
    if (categoria === "comunidad") {
      return evento.categoria === "Comunidad";
    }
    if (categoria === "artesescenicas") {
      return evento.categoria === "Artes Escenicas";
    }
  });
  console.log(filteredEventsByCategory);

  const applyAdditionalFilters = (events: Eventos[], value: string) => {
    if (value === "online") {
      return events.filter((event) => event.online === true);
    }
    if (value === "populares") {
      return events.filter((event) => event.popular === true);
    }
    if (value === "gratis") {
      return events.filter((event) => event.precio === 0);
    }
    if (value === "hoy") {
      const day = new Date().getDate();
      const month = new Date().getMonth();
      const year = new Date().getFullYear();

      const nombresMeses = [
        "enero",
        "febrero",
        "marzo",
        "abril",
        "mayo",
        "junio",
        "julio",
        "agosto",
        "septiembre",
        "octubre",
        "noviembre",
        "diciembre",
      ];

      const nombreMes = nombresMeses[month];
      const hoy = `${day} de ${nombreMes} ${year}`;
      return events.filter((event) => event.fecha.toLocaleLowerCase() === hoy);
    }
    return events;
  };

  const filteredEvents = applyAdditionalFilters(
    filteredEventsByCategory,
    value
  );

  return (
    <section>
      <div className="flex justify-between items-center mb-8 border-b pt-8 border-b-slate-400 mx-10">
        <FilterBarEventos
          value={value}
          setValue={setValue}
        />
        <SearchFormEventos filteredEvents={filteredEvents} />
      </div>
      <div className="flex gap-x-28 gap-y-8 flex-wrap align-top items-center justify-start p-10">
        {filteredEvents.map((evento, index) => (
          <EventoCard
            key={index}
            evento={evento}
          />
        ))}
      </div>
    </section>
  );
};
