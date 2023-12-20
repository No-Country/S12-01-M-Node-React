"use client";
import { useEffect, useState } from "react";
/* import { eventosArray } from "@/helpers/eventosArray"; */
import { Eventos } from "@/helpers/interfaces";
import { ButtonBar } from "./ButtonBar";
import { CardContainerEvent } from "./CardContainerEvent";

interface ListOrgEventProps {
  events: Eventos[];
  title: string;
}

export const ListOrgEvent = ({ events, title }: ListOrgEventProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [value, setValue] = useState<string>("todos");
  const [index, setIndex] = useState();


  useEffect(() => {
    setCurrentIndex(0);
  }, [value]);

  return (
    <section className="font-bold text-[42px] py-8 pl-10 w-full border-2  bg-blue-100">
      <h2>{title}</h2>
      <div className="flex justify-end items-center mb-8  pb-2 mr-10">
        <ButtonBar
          setCurrentIndex={setCurrentIndex}
          currentIndex={currentIndex}
          eventos={events}
        />
      </div>
      <CardContainerEvent
       index={true}
        eventos={events}
        currentIndex={currentIndex}
      />
      
    </section>
  );
};
