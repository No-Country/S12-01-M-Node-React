"use client";
import { Eventos } from "@/helpers/interfaces";
import { EventoCard } from "./EventoCard";
import { FilterBarEventos } from "./filterBarEventos";
import { useState } from "react";
import { SearchFormEventos } from "./SearchFormEventos";

interface EventosContainerProps {
  categoria: string;
  events: Eventos[];
}

export const EventosContainer = ({
  categoria,
  events,
}: EventosContainerProps) => {
  const [value, setValue] = useState<string>("todos");

  const filteredEventsByCategory = events.filter((evento) => {
    if (categoria === "negocios") {
      return evento.categories === "Negocios";
    }
    if (categoria === "musica") {
      return evento.categories === "Musica";
    }
    if (categoria === "vidanocturna") {
      return evento.categories === "Vida Nocturna";
    }
    if (categoria === "gastronomia") {
      return evento.categories === "Gastronomia";
    }
    if (categoria === "comunidad") {
      return evento.categories === "Comunidad";
    }
    if (categoria === "artesescenicas") {
      return evento.categories === "Artes Escenicas";
    }
  });

  const applyAdditionalFilters = (events: Eventos[], value: string) => {
    if (value === "online") {
      return events.filter((event) => event.location === "online");
    }
    if (value === "populares") {
      return events.filter((event) => event.stock_tickets < 20);
    }
    if (value === "gratis") {
      return events.filter((event) => event.price === 0);
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
      return events.filter(
        (event) => event.date_of_event.toLocaleLowerCase() === hoy
      );
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
