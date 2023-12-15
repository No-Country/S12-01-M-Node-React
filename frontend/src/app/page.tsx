import { CardHomePage } from "@/components/homepage/Principal/CardHomePage";
import { EventosDestacados } from "@/components/homepage/EventosDestacados/EventosDestacados";
import { HomeBanner } from "@/components/homepage/HomeBanner";
import { HomeCategories } from "@/components/homepage/Principal/HomeCategories";
import { SearchBarHome } from "@/components/homepage/Principal/SearchBarHome";
import Sponosrs from "@/components/homepage/Sponsors/Sponosrs";
import Testimonios from "@/components/homepage/Testimonios/Testimonios";
import { Eventos } from "@/helpers/interfaces";

async function getData() {
  const res = await fetch(
    "https://s12-01-m-node-react.onrender.com/api/v1/events/"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const events = await getData();
  const popularEvent = events.sort(
    (a: Eventos, b: Eventos) => a.stock_tickets - b.stock_tickets
  );

  let search = searchParams.search;
  console.log(search);

  return (
    <main className="min-h-[calc(100vh_-_80px)] ">
      <section className="w-full flex justify-between px-10 py-[60px] ">
        <article className="w-[762px] h-[340px]">
          <h1 className="text-6xl font-bold tracking-[2px] leading-[84.6px]">
            Todos los eventos cercanos a vos para que hagas lo que más te
            apasiona.
          </h1>
          <SearchBarHome />
        </article>
        <CardHomePage popular={popularEvent[0]} />
      </section>
      <HomeCategories />
      <EventosDestacados events={events} />
      <HomeBanner />
      <Sponosrs />
      <Testimonios />
    </main>
  );
}
