import Image from "next/image";
import drawIcon from "@/assets/img/organizadores/Draw.png";
import favoriteWhite from "@/assets/svg/FavoriteWhite.svg";
import { EventDetail } from "./EventDetail";
import { EventLocation } from "./EventLocation";
import { Eventos } from "@/helpers/interfaces";

interface EventInfoProps {
  singleEvent: Eventos;
}

export const EventInfo = ({ singleEvent }: EventInfoProps) => {
  return (
    <article className="w-3/4 pr-8">
      <h1 className="font-bold text-4xl">{singleEvent.name}</h1>
      <div className="flex items-center gap-16 mt-4">
        <Image
          src={drawIcon}
          alt="organizador"
          width={60}
          height={60}
        />
        <div>
          <p className="font-bold text-xl">Draw Brighton</p>
          <p className="text-sm text-gray-400">1236 seguidores</p>
        </div>
        <button className="bg-Principal text-center px-4 py-1 text-base font-medium text-white rounded-[10px]">
          Seguir <span className="text-2xl pl-">+</span>
        </button>
      </div>
      <article className="p-10 pl-0 pr-8">
        <div className="flex justify-between items-center pr-16 mb-6">
          <h2 className="font-bold text-[32px]">Acerca del Evento</h2>
          <div className="border border-gray-400 rounded-full h-12 w-12 flex items-center justify-center">
            <Image
              src={favoriteWhite}
              alt="agregar a favoritos"
              width={24}
              height={24}
            />
          </div>
        </div>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur. Ut vivamus morbi vitae
          ultricies cursus cursus. Habitasse elementum metus sit sit dignissim
          nam faucibus. Augue donec condimentum consectetur faucibus tortor
          laoreet lacus enim viverra. Eget mauris quis felis ullamcorper nulla
          facilisis diam iaculis lacus. Ridiculus pellentesque nibh ultrices
          accumsan scelerisque vehicula viverra tortor consectetur. Aenean in
          orci hendrerit viverra sit libero arcu. Quis aliquet lectus tortor
          dictum odio a. Sapien a mi pharetra fames. In aliquam venenatis cum
          malesuada sit sagittis tempor. Quam amet viverra eget amet velit.
          Volutpat amet massa bibendum volutpat fusce enim. A duis fermentum
          pretium nam risus. Venenatis consectetur amet feugiat commodo commodo
          sed sit turpis eget. Libero bibendum sed id nisi at sodales malesuada
          at lacinia. Adipiscing sed auctor duis platea. Morbi viverra pulvinar
          orci massa elit ipsum cursus. Consequat viverra et in eu lorem semper
          bibendum. Eu volutpat enim bibendum nam elementum a venenatis ipsum.
          Luctus id odio morbi quis est. Tempus pellentesque convallis non
          etiam. Arcu purus tempus elementum lacus lobortis vitae. Et sit
          praesent viverra eget non. Volutpat feugiat varius sagittis porttitor
          consequat tellus nunc massa quis.
        </p>
      </article>
      <EventDetail singleEvent={singleEvent} />
      <EventLocation singleEvent={singleEvent} />
    </article>
  );
};
