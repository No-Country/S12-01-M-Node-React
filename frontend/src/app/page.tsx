import { CardHomePage } from "@/components/CardHomePage";
import { HomeCategories } from "@/components/HomeCategories";
import { SearchBarHome } from "@/components/SearchBarHome";

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
    </main>
  );
}
