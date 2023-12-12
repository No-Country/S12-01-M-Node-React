import { EventosCategories } from "@/components/eventos/EventosCategories";
import { EventosList } from "@/components/eventos/EventosList";
import { EventosPorUbicacion } from "@/components/eventos/EventosPorUbicacion";
import { OrganizadoresDestacados } from "@/components/eventos/OrganizadoresDestacados";

const EventosPage = () => {
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
          key={index}
          titulo={categoria}
        />
      ))}
      <OrganizadoresDestacados />
    </main>
  );
};

export default EventosPage;
