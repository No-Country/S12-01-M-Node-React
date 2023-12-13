"use client";
import { Eventos } from "@/helpers/interfaces";
import { EventoCard } from "./EventoCard";
import { FilterBarEventos } from "./filterBarEventos";
import { useState } from "react";
import { SearchFormEventos } from "./SearchFormEventos";

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

interface EventosContainerProps {
  categoria: string;
}

export const EventosContainer = ({ categoria }: EventosContainerProps) => {
  const [value, setValue] = useState<string>("todos");

  const filteredEventsByCategory = eventosArray.filter((evento) => {
    if (categoria === "negocios") {
      return evento.categoria === "Negocios";
    }
    if (categoria === "musica") {
      return evento.categoria === "Musica";
    }
    if (categoria === "vidanocturna") {
      return evento.categoria === "Vida Nocturna";
    }
    if (categoria === "gastronomia") {
      return evento.categoria === "Gastronomia";
    }
    if (categoria === "comunidad") {
      return evento.categoria === "Comunidad";
    }
    if (categoria === "artesescenicas") {
      return evento.categoria === "Artes Escenicas";
    }
  });
  console.log(filteredEventsByCategory);

  const applyAdditionalFilters = (events: Eventos[], value: string) => {
    if (value === "online") {
      return events.filter((event) => event.online === true);
    }
    if (value === "populares") {
      return events.filter((event) => event.popular === true);
    }
    if (value === "gratis") {
      return events.filter((event) => event.precio === 0);
    }
    if (value === "hoy") {
      const day = new Date().getDate();
      const month = new Date().getMonth();
      const year = new Date().getFullYear();

      const nombresMeses = [
        "enero",
        "febrero",
        "marzo",
        "abril",
        "mayo",
        "junio",
        "julio",
        "agosto",
        "septiembre",
        "octubre",
        "noviembre",
        "diciembre",
      ];

      const nombreMes = nombresMeses[month];
      const hoy = `${day} de ${nombreMes} ${year}`;
      return events.filter((event) => event.fecha.toLocaleLowerCase() === hoy);
    }
    return events;
  };

  const filteredEvents = applyAdditionalFilters(
    filteredEventsByCategory,
    value
  );

  return (
    <section>
      <div className="flex justify-between items-center mb-8 border-b pt-8 border-b-slate-400 mx-10">
        <FilterBarEventos
          value={value}
          setValue={setValue}
        />
        <SearchFormEventos filteredEvents={filteredEvents} />
      </div>
      <div className="flex gap-x-28 gap-y-8 flex-wrap align-top items-center justify-start p-10">
        {filteredEvents.map((evento, index) => (
          <EventoCard
            key={index}
            evento={evento}
          />
        ))}
      </div>
    </section>
  );
};
