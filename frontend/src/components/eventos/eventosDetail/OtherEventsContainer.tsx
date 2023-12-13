import { eventosArray } from "@/helpers/eventosArray";
import { EventoCard } from "../EventoCard";

export const OtherEventsContainer = () => {
  return (
    <section>
      <div className="flex gap-x-28 gap-y-8 flex-wrap align-top items-center justify-start p-10 bg-blue-400">
        {eventosArray.map((evento) => (
          <EventoCard
            key={evento.id}
            evento={evento}
          />
        ))}
      </div>
    </section>
  );
};
