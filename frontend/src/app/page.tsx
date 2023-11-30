import { CardHomePage } from "@/components/CardHomePage";

export default function Home() {
  return (
    <main className="px-10 py-[60px] min-h-[calc(100vh_-_80px)] flex justify-between">
      <section className="w-[762px] h-[340px]">
        <h1 className="text-6xl font-bold tracking-[2px] leading-[84.6px]">
          Todos los eventos cercanos a vos para que hagas lo que más te
          apasiona.
        </h1>
        <input
          type="text"
          placeholder="Buscar evento..."
          className="mt-5 border border-[#D9D9D9] px-4 w-[458px] h-[60px] bg-[url('/svg/SearchIcon.svg')] bg-no-repeat bg-right rounded-lg font- font-medium text-sm text-[#666666] focus:outline-none  focus:border-[3px] focus:border-Principal "
        />
      </section>
      <CardHomePage />
    </main>
  );
}
