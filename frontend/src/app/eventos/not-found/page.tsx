import notfoundIllustration from "@/assets/svg/notFound.svg";
import { EventoCard } from "@/components/eventos/EventoCard";
import { HomeCategories } from "@/components/homepage/Principal/HomeCategories";
import { eventosArray } from "@/helpers/eventosArray";
import Image from "next/image";

const EventsNotFoundPage = () => {
  return (
    <main>
      <section className="bg-pink-200  h-[360px] w-full flex justify-between p-10 pb-0 items-end">
        <h1 className="font-bold text-4xl leading-[56px] w-[740px] pb-10">
          No encontramos eso que buscabas,{" "}
          <span className="text-Principal">pero</span> te podemos ofrecer lo
          siguiente...
        </h1>
        <Image
          src={notfoundIllustration}
          alt="not found"
          width={320}
          height={320}
        />
      </section>
      <h1 className="font-bold text-4xl leading-[56px] p-10">
        Eventos que te pueden interesar
      </h1>
      <div className="flex gap-x-28 gap-y-8 flex-wrap align-top items-center justify-start p-10">
        {eventosArray.map((evento, index) => (
          <EventoCard
            key={index}
            evento={evento}
          />
        ))}
      </div>
      <HomeCategories />
    </main>
  );
};

export default EventsNotFoundPage;
/* bg-[linear-gradient(180deg, rgba(244, 82, 71, 0.15) 0%, rgba(190, 49, 108, 0.15) 100%);
] */
