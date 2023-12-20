"use client";
import { useEffect, useState } from "react";
import { CardEventoContainer } from "./CardEventoContainer";
import { FilterBar } from "./FilterBar";
import { FilterBarButtons } from "./FilterBarButtons";
import { Eventos } from "@/helpers/interfaces";

interface EventosDestacadosProps {
  events: Eventos[];
}

export const EventosDestacados = ({ events }: EventosDestacadosProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [value, setValue] = useState<string>("todos");

  const filteredEvents = (events: Eventos[], value: string) => {
    if (value === "online") {
      return events.filter(
        (event) => event.location.toLocaleLowerCase() === "online"
      );
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

  useEffect(() => {
    setCurrentIndex(0);
  }, [value]);

  return (
    <section className="font-bold text-[42px] py-8 pl-10 ">
      <h2>Eventos Destacados</h2>
      <div className="flex justify-between items-center mb-8 border-b pb-2 border-b-slate-400 mr-10">
        <FilterBar
          setValue={setValue}
          selectedOption={value}
        />
        <FilterBarButtons
          setCurrentIndex={setCurrentIndex}
          currentIndex={currentIndex}
          eventos={filteredEvents(events, value)}
        />
      </div>
      <CardEventoContainer
        eventos={filteredEvents(events, value)}
        currentIndex={currentIndex}
      />
    </section>
  );
};
