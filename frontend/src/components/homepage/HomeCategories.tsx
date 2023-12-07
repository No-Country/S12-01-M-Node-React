import Image from "next/image";
import artesescenicas from "@/assets/icons/artesescenicas.png";
import musica from "@/assets/icons/musica.png";
import vidanoctura from "@/assets/icons/vidanocturna.png";
import gastronomia from "@/assets/icons/gastronomia.png";
import negocios from "@/assets/icons/negocios.png";
import comunidad from "@/assets/icons/comunidad.png";

const categorias = [
  { nombre: "Musica", imagen: musica },
  { nombre: "Vida nocturna", imagen: vidanoctura },
  { nombre: "Artes escénicas", imagen: artesescenicas },
  { nombre: "Gastronomía", imagen: gastronomia },
  { nombre: "Negocios", imagen: negocios },
  { nombre: "Comunidad", imagen: comunidad },
];

export const HomeCategories = () => {
  return (
    <section className="bg-pink-100 w-full h-[197px] flex justify-center gap-8 items-center">
      {categorias.map((cat) => (
        <div
          key={cat.nombre}
          className="flex flex-col items-center gap-4">
          <div className="rounded-full bg-white flex items-center justify-center w-[100px] h-[100px]">
            <Image
              src={cat.imagen}
              width={40}
              height={40}
              alt={`categoria ${cat.nombre}`}
            />
          </div>
          <p className="font-semibold text-sm">{cat.nombre}</p>
        </div>
      ))}
    </section>
  );
};
