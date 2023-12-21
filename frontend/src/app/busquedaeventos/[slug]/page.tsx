import { EventoCard } from "@/components/eventos/EventoCard";
import { Eventos } from "@/helpers/interfaces";
import notfoundIllustration from "@/assets/svg/notFound.svg";
import Image from "next/image";
import { HomeCategories } from "@/components/homepage/Principal/HomeCategories";
import { revalidatePath } from "next/cache";

async function getData() {
  const res = await fetch(
    "https://s12-01-m-node-react.onrender.com/api/v1/events/"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  revalidatePath("/", "layout");
  return res.json();
}

const BusquedaPage = async ({ params }: { params: { slug: string } }) => {
  const events = await getData();
  const filteredEvents = events.filter((event: Eventos) => {
    return event.categories.toLowerCase() === decodeURI(params.slug);
  });

  return (
    <main>
      {filteredEvents.length === 0 ? (
        <>
          <section className="bg-pink-200  h-[360px] w-full flex justify-between p-10 pb-0 items-end">
            <h1 className="font-bold text-4xl leading-[56px] w-[740px] pb-10">
              No encontramos eso que buscabas,
              <span className="text-Principal"> pero</span> te podemos ofrecer
              lo siguiente...
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
            {events.map((evento: Eventos, index: number) => (
              <EventoCard
                key={index}
                evento={evento}
              />
            ))}
          </div>
          <HomeCategories />
        </>
      ) : (
        <>
          <section className="bg-pink-200  h-[360px] w-full flex justify-between p-10 pb-0 items-end">
            <h1 className="font-bold text-4xl leading-[56px] w-[740px] pb-10 self-center">
              Estos son los resultados de tu búsqueda
            </h1>
            <Image
              src={notfoundIllustration}
              alt="not found"
              width={320}
              height={320}
            />
          </section>
          <div className="flex gap-x-28 gap-y-8 flex-wrap align-top items-center justify-start p-10">
            {filteredEvents.map((event: Eventos) => (
              <EventoCard
                key={event._id}
                evento={event}
              />
            ))}
          </div>
        </>
      )}
    </main>
  );
};

export default BusquedaPage;
