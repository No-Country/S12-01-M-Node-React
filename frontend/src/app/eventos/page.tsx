import { EventosCategories } from "@/components/eventos/EventosCategories";
import { EventosList } from "@/components/eventos/EventosList";
import { EventosPorUbicacion } from "@/components/eventos/EventosPorUbicacion";
import { OrganizadoresDestacados } from "@/components/eventos/OrganizadoresDestacados";

async function getData() {
  const res = await fetch(
    "https://s12-01-m-node-react.onrender.com/api/v1/events/"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const EventosPage = async () => {
  const events = await getData();

  const categorias = [
    "Eventos Destacados",
    "Música",
    "Gastronomía",
    "Vida Nocturna",
    "Artes Escenicas",
    "Comunidad",
    "Negocios",
  ];

  return (
    <main className="w-full">
      <EventosPorUbicacion />
      <EventosCategories />
      {categorias.map((categoria, index) => (
        <EventosList
          events={events}
          key={index}
          titulo={categoria}
        />
      ))}
      <OrganizadoresDestacados />
    </main>
  );
};

export default EventosPage;
