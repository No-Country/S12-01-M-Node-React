"use client";
import { useEffect, useState } from "react";
import { CardEventoContainer } from "@/components/homepage/EventosDestacados/CardEventoContainer";
import { FilterBarButtons } from "@/components/homepage/EventosDestacados/FilterBarButtons";
/* import { eventosArray } from "@/helpers/eventosArray"; */
import { Eventos } from "@/helpers/interfaces";

interface OtherEventsListProps {
  events: Eventos[];
  title: string;
}

export const OtherEventsList = ({ events, title }: OtherEventsListProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [value, setValue] = useState<string>("todos");

  useEffect(() => {
    setCurrentIndex(0);
  }, [value]);

  return (
    <section className="font-bold text-[42px] py-8 pl-10 w-full border-2  bg-blue-100">
      <h2>{title}</h2>
      <div className="flex justify-end items-center mb-8  pb-2 mr-10">
        <FilterBarButtons
          setCurrentIndex={setCurrentIndex}
          currentIndex={currentIndex}
          eventos={events}
        />
      </div>
      <CardEventoContainer
        eventos={events}
        currentIndex={currentIndex}
      />
    </section>
  );
};
