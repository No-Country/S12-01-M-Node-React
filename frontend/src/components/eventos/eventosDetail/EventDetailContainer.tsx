"use client";
import Image from "next/image";
import { TicketInfo } from "@/components/eventos/eventosDetail/ticketInfo";
import { EventInfo } from "@/components/eventos/eventosDetail/EventInfo";
import { OtherEventsList } from "@/components/eventos/eventosDetail/OtherEventsList";
import { Eventos } from "@/helpers/interfaces";
import { useState } from "react";
import { ModalCompra } from "./ModalCompra";

interface EventDetailContainerProps {
  singleEvent: Eventos;
  events: Eventos[];
}

export const EventDetailContainer = ({
  singleEvent,
  events,
}: EventDetailContainerProps) => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <Image
        src={"/images/eventoheader.png"}
        alt="event header image"
        height={333}
        width={1280}
        className="object-cover"
      />
      <section className="p-10 flex justify-between w-full">
        <EventInfo singleEvent={singleEvent} />
        <TicketInfo
          singleEvent={singleEvent}
          setShowModal={setShowModal}
        />
      </section>
      <OtherEventsList events={events} />
      {showModal && <ModalCompra onClose={closeModal} />}
    </>
  );
};
