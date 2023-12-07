import { Eventos } from "@/helpers/interfaces";
import Image from "next/image";

const eventos: Eventos[] = [
  {
    nombre: "Winona Riders + Fonso",
    dueño: "Indie Folks",
    categoria: "Música",
    location: "Club TRI",
    fecha: "8 de Febrero 2024",
    stock: 2000,
    precio: 2000,
    comentarios: [],
    imagen: "/images/evento1.png",
    popular: false,
    online: false,
  },
  {
    nombre: "Evento 2",
    dueño: "Dueño 2",
    categoria: "Categoría 2",
    location: "Ubicación 2",
    fecha: "Fecha 2",
    stock: 1000,
    precio: 1500,
    comentarios: [],
    imagen: "/images/evento1.png",
    popular: true,
    online: false,
  },
  {
    nombre: "Evento 3",
    dueño: "Dueño 3",
    categoria: "Categoría 3",
    location: "Ubicación 3",
    fecha: "Fecha 3",
    stock: 800,
    precio: 1200,
    comentarios: [],
    imagen: "/images/evento1.png",
    popular: true,
    online: true,
  },
  /*   {
    nombre: "Evento 4",
    dueño: "Dueño 4",
    categoria: "Categoría 4",
    location: "Ubicación 4",
    fecha: "Fecha 4",
    stock: 500,
    precio: 800,
    comentarios: [],
    imagen: "/images/evento1.png",
    popular: false,
    online: true,
  },
  {
    nombre: "Evento 5",
    dueño: "Dueño 5",
    categoria: "Categoría 5",
    location: "Ubicación 5",
    fecha: "Fecha 5",
    stock: 1200,
    precio: 1800,
    comentarios: [],
    imagen: "/images/evento1.png",
    popular: true,
    online: false,
  },
  {
    nombre: "Evento 6",
    dueño: "Dueño 6",
    categoria: "Categoría 6",
    location: "Ubicación 6",
    fecha: "Fecha 6",
    stock: 300,
    precio: 500,
    comentarios: [],
    imagen: "/images/evento1.png",
    popular: false,
    online: false,
  },
  {
    nombre: "Evento 7",
    dueño: "Dueño 7",
    categoria: "Categoría 7",
    location: "Ubicación 7",
    fecha: "Fecha 7",
    stock: 700,
    precio: 1000,
    comentarios: [],
    imagen: "/images/evento1.png",
    popular: true,
    online: true,
  },
  {
    nombre: "Evento 8",
    dueño: "Dueño 8",
    categoria: "Categoría 8",
    location: "Ubicación 8",
    fecha: "Fecha 8",
    stock: 1500,
    precio: 2200,
    comentarios: [],
    imagen: "/images/evento1.png",
    popular: false,
    online: true,
  },
  {
    nombre: "Evento 9",
    dueño: "Dueño 9",
    categoria: "Categoría 9",
    location: "Ubicación 9",
    fecha: "Fecha 9",
    stock: 100,
    precio: 300,
    comentarios: [],
    imagen: "/images/evento1.png",
    popular: true,
    online: false,
  },
  {
    nombre: "Evento 10",
    dueño: "Dueño 10",
    categoria: "Categoría 10",
    location: "Ubicación 10",
    fecha: "Fecha 10",
    stock: 2000,
    precio: 2500,
    comentarios: [],
    imagen: "/images/evento1.png",
    popular: true,
    online: true,
  }, */
];

export const CardEvento = () => {
  return (
    <article className="flex gap-4 flex-wrap overflow-hidden">
      {eventos.map((evento) => (
        <aside
          key={evento.nombre}
          className="w-[331px] h-[377px] bg-gradient-to-tr from-pink-600 via-indigo-500 to-indigo-500 rounded-[20px] p-[1px] basis[331px]">
          <div className="h-[375px] w-full rounded-[20px] bg-white relative">
            <Image
              src={evento.imagen}
              width={329}
              height={178}
              alt={`Foto del evento ${evento.nombre}`}
            />
            <span className="bg-Azul absolute text-white top-4 left-3 px-2 py-1 text-sm font-bold rounded-[4px]">
              {evento.fecha}
            </span>
            <div className="p-4 flex flex-col gap-[6px]">
              <h4 className="font-bold text-sm text-Principal uppercase">
                {evento.categoria}
              </h4>
              <h2 className="font-bold text-xl text-black">
                {evento.nombre} en {evento.location}
              </h2>
              <p className="uppercase text-sm font-bold text-[#4E4E4E]">
                18:00 HS
              </p>
              <h3 className="font-bold text-black text-base">
                A partir de ${evento.precio.toFixed(2)}
              </h3>
              <p className="text-[#666666] text-[15px]">
                By <span className="uppercase">{evento.dueño}</span>
              </p>
            </div>
          </div>
        </aside>
      ))}
    </article>
  );
};
