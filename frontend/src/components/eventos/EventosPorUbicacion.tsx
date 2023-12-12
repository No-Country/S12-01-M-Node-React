import { HomeCategories } from "../homepage/Principal/HomeCategories";
import { SearchBarUbicacion } from "./SearchBarUbicacion";

export const EventosPorUbicacion = () => {
  return (
    <section className="w-full h-[344px] bg-[url('../assets/img/eventosPorUbicacion.png')] bg-no-repeat bg-cover relative">
      <div
        className="w-full h-[344px] bg-black absolute left-0 top-0 p-8 flex justify-between items-end"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
        <h1 className="font-bold text-[60px] text-white z-10 w-[590px]">
          Buscá un evento cerca tuyo
        </h1>
        <SearchBarUbicacion />
      </div>
    </section>
  );
};
