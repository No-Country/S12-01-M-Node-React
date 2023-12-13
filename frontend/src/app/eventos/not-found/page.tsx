import notfoundIllustration from "@/assets/svg/notFound.svg";
import { EventoCard } from "@/components/eventos/EventoCard";
import { HomeCategories } from "@/components/homepage/Principal/HomeCategories";
import { Eventos } from "@/helpers/interfaces";
import Image from "next/image";

const eventosArray: Eventos[] = [
  {
    nombre: "Winona Riders + Fonso",
    dueño: "Indie Folks",
    categoria: "Musica",
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
    nombre: "Winona Riders + Fonso",
    dueño: "Indie Folks",
    categoria: "Musica",
    location: "Club TRI",
    fecha: "8 de Febrero 2024",
    stock: 2000,
    precio: 2000,
    comentarios: [],
    imagen: "/images/evento1.png",
    popular: true,
    online: true,
  },
  {
    nombre: "Winona Riders + Fonso",
    dueño: "Indie Folks",
    categoria: "Musica",
    location: "Club TRI",
    fecha: "8 de Febrero 2024",
    stock: 2000,
    precio: 0,
    comentarios: [],
    imagen: "/images/evento1.png",
    popular: false,
    online: true,
  },
  {
    nombre: "Evento 2",
    dueño: "Dueño 2",
    categoria: "Gastronomia",
    location: "Ubicación 2",
    fecha: "8 de Febrero 2024",
    stock: 1000,
    precio: 1500,
    comentarios: [],
    imagen: "/images/evento1.png",
    popular: false,
    online: false,
  },
  {
    nombre: "Evento 2",
    dueño: "Dueño 2",
    categoria: "Gastronomia",
    location: "Ubicación 2",
    fecha: "8 de Febrero 2024",
    stock: 1000,
    precio: 1500,
    comentarios: [],
    imagen: "/images/evento1.png",
    popular: true,
    online: true,
  },
  {
    nombre: "Evento 2",
    dueño: "Dueño 2",
    categoria: "Gastronomia",
    location: "Ubicación 2",
    fecha: "8 de Febrero 2024",
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
    categoria: "Vida Nocturna",
    location: "Ubicación 3",
    fecha: "8 de Febrero 2024",
    stock: 800,
    precio: 0,
    comentarios: [],
    imagen: "/images/evento1.png",
    popular: false,
    online: false,
  },
  {
    nombre: "Evento 3",
    dueño: "Dueño 3",
    categoria: "Vida Nocturna",
    location: "Ubicación 3",
    fecha: "8 de Febrero 2024",
    stock: 800,
    precio: 0,
    comentarios: [],
    imagen: "/images/evento1.png",
    popular: true,
    online: true,
  },
  {
    nombre: "Evento 3",
    dueño: "Dueño 3",
    categoria: "Vida Nocturna",
    location: "Ubicación 3",
    fecha: "8 de Febrero 2024",
    stock: 800,
    precio: 0,
    comentarios: [],
    imagen: "/images/evento1.png",
    popular: false,
    online: true,
  },
  {
    nombre: "Evento 4",
    dueño: "Dueño 4",
    categoria: "Negocios",
    location: "Ubicación 4",
    fecha: "8 de Febrero 2024",
    stock: 500,
    precio: 800,
    comentarios: [],
    imagen: "/images/evento1.png",
    popular: false,
    online: true,
  },
  {
    nombre: "Evento 4",
    dueño: "Dueño 4",
    categoria: "Negocios",
    location: "Ubicación 4",
    fecha: "8 de Febrero 2024",
    stock: 500,
    precio: 800,
    comentarios: [],
    imagen: "/images/evento1.png",
    popular: true,
    online: true,
  },
  {
    nombre: "Evento 4",
    dueño: "Dueño 4",
    categoria: "Negocios",
    location: "Ubicación 4",
    fecha: "8 de Febrero 2024",
    stock: 500,
    precio: 0,
    comentarios: [],
    imagen: "/images/evento1.png",
    popular: false,
    online: false,
  },

  {
    nombre: "Evento 5",
    dueño: "Dueño 5",
    categoria: "Comunidad",
    location: "Ubicación 5",
    fecha: "8 de Febrero 2024",
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
    categoria: "Comunidad",
    location: "Ubicación 6",
    fecha: "Fecha 6",
    stock: 300,
    precio: 500,
    comentarios: [],
    imagen: "/images/evento1.png",
    popular: true,
    online: true,
  },
  {
    nombre: "Evento 6",
    dueño: "Dueño 6",
    categoria: "Comunidad",
    location: "Ubicación 6",
    fecha: "Fecha 6",
    stock: 300,
    precio: 0,
    comentarios: [],
    imagen: "/images/evento1.png",
    popular: false,
    online: true,
  },
  {
    nombre: "Evento 7",
    dueño: "Dueño 7",
    categoria: "Artes Escenicas",
    location: "Ubicación 7",
    fecha: "8 de Febrero 2024",
    stock: 700,
    precio: 1000,
    comentarios: [],
    imagen: "/images/evento1.png",
    popular: false,
    online: false,
  },
  {
    nombre: "Evento 8",
    dueño: "Dueño 8",
    categoria: "Artes Escenicas",
    location: "Ubicación 8",
    fecha: "7 de Diciembre 2023",
    stock: 1500,
    precio: 2200,
    comentarios: [],
    imagen: "/images/evento1.png",
    popular: false,
    online: false,
  },
  {
    nombre: "Evento 9",
    dueño: "Dueño 9",
    categoria: "Artes Escenicas",
    location: "Ubicación 9",
    fecha: "7 de Diciembre 2023",
    stock: 100,
    precio: 300,
    comentarios: [],
    imagen: "/images/evento1.png",
    popular: false,
    online: false,
  },
  {
    nombre: "Evento 10",
    dueño: "Dueño 10",
    categoria: "Musica",
    location: "Ubicación 10",
    fecha: "7 de Diciembre 2023",
    stock: 2000,
    precio: 0,
    comentarios: [],
    imagen: "/images/evento1.png",
    popular: false,
    online: true,
  },
];

const EventsNotFoundPage = () => {
  return (
    <main>
      <section className="bg-pink-200  h-[360px] w-full flex justify-between p-10 pb-0 items-end">
        <h1 className="font-bold text-4xl leading-[56px] w-[740px] pb-10">
          No encontramos eso que buscabas,{" "}
          <span className="text-Principal">pero</span> te podemos ofrecer lo
          siguiente...
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
        {eventosArray.map((evento, index) => (
          <EventoCard
            key={index}
            evento={evento}
          />
        ))}
      </div>
      <HomeCategories />
    </main>
  );
};

export default EventsNotFoundPage;
/* bg-[linear-gradient(180deg, rgba(244, 82, 71, 0.15) 0%, rgba(190, 49, 108, 0.15) 100%);
] */
