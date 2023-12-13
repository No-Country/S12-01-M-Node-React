import breadcumbIcon from "@/assets/svg/breadcumbIcon.svg";
import Image from "next/image";
import { EventosContainer } from "@/components/eventos/EventosContainer";

export async function generateStaticParams() {
  const categorias = [
    { nombre: "musica" },
    { nombre: "vidanocturna" },
    { nombre: "artesescenicas" },
    { nombre: "gastronomia" },
    { nombre: "negocios" },
    { nombre: "comunidad" },
  ];

  return categorias.map((cat) => ({
    categoria: cat.nombre.toLocaleLowerCase(),
  }));
}

const categoriaMapping: { [key: string]: string } = {
  musica: "Música",
  vidanocturna: "Vida Nocturna",
  artesescenicas: "Artes Escénicas",
  gastronomia: "Gastronomía",
  negocios: "Negocios",
  comunidad: "Comunidad",
};

const CategoryEventPage = ({ params }: { params: { categoria: string } }) => {
  const { categoria } = params;

  return (
    <main>
      <section
        className={`${
          categoria.toLowerCase() === "negocios" ||
          categoria.toLowerCase() === "musica" ||
          categoria.toLowerCase() === "vidanocturna"
            ? "bg-[url(../assets/img/headermusica.png)]"
            : "bg-[url(../assets/img/headerartesescenicas.png)]"
        } h-[333px] w-full flex items-start flex-col justify-between p-10`}>
        <p className="capitalize text-white flex gap-2 text-sm">
          Eventos{" "}
          <span>
            <Image
              src={breadcumbIcon}
              alt="breadcumbIcon"
            />
          </span>{" "}
          {categoriaMapping[categoria]}
        </p>
        <h1 className=" text-white font-bold text-6xl">
          {categoriaMapping[categoria]}
        </h1>
      </section>
      <EventosContainer categoria={categoria} />
    </main>
  );
};

export default CategoryEventPage;
