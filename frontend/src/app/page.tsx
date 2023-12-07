import { CardHomePage } from "@/components/homepage/CardHomePage";
import { EventosDestacados } from "@/components/homepage/EventosDestacados";
import { HomeBanner } from "@/components/homepage/HomeBanner";
import { HomeCategories } from "@/components/homepage/HomeCategories";
import { SearchBarHome } from "@/components/homepage/SearchBarHome";
import Sponosrs from "@/components/homepage/Sponsors/Sponosrs";
import Testimonios from "@/components/homepage/Testimonios/Testimonios";

export default function Home() {
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
        <CardHomePage />
      </section>
      <HomeCategories />
<<<<<<< HEAD
      <Sponosrs/>
      <Testimonios/>
=======
      <EventosDestacados />
      <HomeBanner />
>>>>>>> 90fc5b326b8b0f234913be7b09edb4b9b469a822
    </main>
  );
}
