import { Eventos } from "@/helpers/interfaces";
import { EventoCard } from "../EventoCard";

interface OtherEventsContainerProps {
  events: Eventos[];
}

export const OtherEventsContainer = ({ events }: OtherEventsContainerProps) => {
  return (
    <section>
      <div className="flex gap-x-28 gap-y-8 flex-wrap align-top items-center justify-start p-10 bg-blue-400">
        {events.map((evento: Eventos) => (
          <EventoCard
            key={evento._id}
            evento={evento}
          />
        ))}
      </div>
    </section>
  );
};
