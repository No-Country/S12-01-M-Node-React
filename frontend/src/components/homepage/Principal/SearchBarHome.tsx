"use client";
import { Eventos } from "@/helpers/interfaces";
import Image from "next/image";
import searchButton from "@/assets/svg/SearchLocationIcon.svg";
import useSearchBar from "@/hooks/useSearchBar";

const eventosArray: Eventos[] = [
  {
    nombre: "Concierto A",
    categoria: "Música",
    location: "Ciudad A",
    fecha: "2023-12-01",
    stock: 200,
    precio: 40,
    comentarios: ["Increíble evento", "Gran experiencia"],
    imagen: "concierto_a.jpg",
    dueño: "Dueño A",
  },
  {
    nombre: "Deporte B",
    categoria: "Deporte",
    location: "Ciudad B",
    fecha: "2023-12-05",
    stock: 150,
    precio: 25,
    comentarios: ["Partido emocionante", "Buen ambiente"],
    imagen: "deporte_b.jpg",
    dueño: "Dueño B",
  },
  {
    nombre: "Concierto C",
    categoria: "Música",
    location: "Ciudad C",
    fecha: "2023-12-10",
    stock: 300,
    precio: 50,
    comentarios: ["Diversión garantizada", "Artistas increíbles"],
    imagen: "festival_c.jpg",
    dueño: "Dueño C",
  },
  {
    nombre: "Conferencia D",
    categoria: "Conferencia",
    location: "Ciudad D",
    fecha: "2023-12-15",
    stock: 100,
    precio: 15,
    comentarios: ["Interesante charla", "Buenos ponentes"],
    imagen: "conferencia_d.jpg",
    dueño: "Dueño D",
  },
  {
    nombre: "Teatro E",
    categoria: "Teatro",
    location: "Ciudad E",
    fecha: "2023-12-20",
    stock: 120,
    precio: 35,
    comentarios: ["Excelente actuación", "Historia cautivadora"],
    imagen: "teatro_e.jpg",
    dueño: "Dueño E",
  },
  {
    nombre: "Exposición F",
    categoria: "Arte",
    location: "Ciudad F",
    fecha: "2023-12-25",
    stock: 80,
    precio: 20,
    comentarios: ["Obras impresionantes", "Ambiente cultural"],
    imagen: "exposicion_f.jpg",
    dueño: "Dueño F",
  },
  {
    nombre: "Cine G",
    categoria: "Cine",
    location: "Ciudad G",
    fecha: "2023-12-30",
    stock: 180,
    precio: 10,
    comentarios: ["Película emocionante", "Buena calidad"],
    imagen: "cine_g.jpg",
    dueño: "Dueño G",
  },
  {
    nombre: "Evento H",
    categoria: "Otro",
    location: "Ciudad H",
    fecha: "2024-01-05",
    stock: 250,
    precio: 30,
    comentarios: ["Experiencia única", "Inolvidable"],
    imagen: "evento_h.jpg",
    dueño: "Dueño H",
  },
  {
    nombre: "Concierto I",
    categoria: "Música",
    location: "Ciudad I",
    fecha: "2024-01-10",
    stock: 90,
    precio: 45,
    comentarios: ["Concierto espectacular", "Risas garantizadas"],
    imagen: "show_i.jpg",
    dueño: "Dueño I",
  },
  {
    nombre: "Fiesta J",
    categoria: "Fiesta",
    location: "Ciudad J",
    fecha: "2024-01-15",
    stock: 160,
    precio: 15,
    comentarios: ["Gran ambiente", "Música genial"],
    imagen: "fiesta_j.jpg",
    dueño: "Dueño J",
  },
];

export const SearchBarHome = () => {
  const { onSubmit, register, handleSubmit, setValue } =
    useSearchBar(eventosArray);

  return (
    <form className="relative w-[458px] h-[60px]">
      <input
        type="text"
        placeholder="Buscar evento..."
        className="mt-5 border border-[#D9D9D9] px-4 w-[458px] h-[60px] rounded-lg font- font-medium text-sm text-[#666666] focus:outline-none  focus:border-[3px] focus:border-Principal "
        {...register("search")}
        onChange={(e) => {
          setValue("search", e.target.value.toLowerCase());
        }}
      />
      <Image
        src={searchButton}
        width={58}
        height={58}
        alt="Search Button"
        className="absolute top-[21px] left-[87%] cursor-pointer"
        onClick={() => handleSubmit(onSubmit)()}
      />
    </form>
  );
};
