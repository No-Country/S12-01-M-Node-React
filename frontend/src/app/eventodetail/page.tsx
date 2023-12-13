import Image from "next/image";
import { TicketInfo } from "@/components/eventos/eventosDetail/ticketInfo";
import { EventInfo } from "@/components/eventos/eventosDetail/EventInfo";
import { EventosList } from "@/components/eventos/EventosList";
import { OtherEventsList } from "@/components/eventos/eventosDetail/OtherEventsList";

const EventDetail = () => {
  return (
    <main>
      <Image
        src={"/images/eventoheader.png"}
        alt="event header image"
        height={333}
        width={1280}
        className="object-cover"
      />
      <section className="p-10 flex justify-between w-full">
        <EventInfo />
        <TicketInfo />
      </section>
      <OtherEventsList />
    </main>
  );
};

export default EventDetail;
