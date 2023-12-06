"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import searchIcon from "@/assets/svg/SearchIcon.svg";
import { Eventos } from "@/helpers/interfaces";
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

export const NavBarHome = () => {
  const links = [
    { title: "Eventos", path: "/eventos" },
    { title: "Crear Eventos", path: "/crear-eventos" },
  ];
  const pathname = usePathname();

  const { onSubmit, register, handleSubmit, setValue } =
    useSearchBar(eventosArray);

  return (
    <header className="h-20 w-full flex items-center pl-10 justify-between border-b[1px] border-b-Principal bg-Principal">
      <nav className="gap-8 flex items-center justify-start w-1/2">
        <Link
          href="/"
          className="font-extrabold text-3xl text-white">
          Eventry
        </Link>
        <form className="relative">
          <input
            type="text"
            className="w-[350px] h-[50px] rounded-[10px]  bg-pink-500 text-white placeholder-white px-4 focus:outline-none"
            placeholder="Busca tu evento..."
            {...register("search")}
            onChange={(e) => {
              setValue("search", e.target.value.toLowerCase());
            }}
          />
          <Image
            src={searchIcon}
            width={23}
            height={23}
            alt="search icon"
            className="absolute top-[14px] left-[310px]"
            onClick={() => handleSubmit(onSubmit)()}
          />
        </form>
      </nav>
      <aside className="flex items-center justify-end w-1/2 gap-8 h-20">
        {links.map((link) => (
          <Link
            className={`text-base font-medium text-white ${
              link.path === pathname ? "underline" : ""
            }`}
            key={link.title}
            href={link.path}>
            {link.title}
          </Link>
        ))}
        <div className="w-[300px] flex justify-center gap-4 bg-Azul h-full rounded-tl-xl rounded-bl-xl items-center">
          <Link
            href={"/login"}
            className="text-lg font-semibold text-white">
            Iniciar Sesión
          </Link>
          <p className="font-thin text-white">|</p>
          <Link
            href={"/register"}
            className="text-lg font-semibold text-white">
            Registrase
          </Link>
        </div>
      </aside>
    </header>
  );
};
