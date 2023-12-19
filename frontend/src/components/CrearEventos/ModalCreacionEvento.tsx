import Image from "next/image";
import verified from "@/assets/svg/Verified.svg";

interface ModalProps {
  onClose: () => void;
}

export const ModalCreacionEvento = ({ onClose }: ModalProps) => {
  return (
    <aside className="fixed w-full h-full flex justify-center items-center left-0 top-0 z-30">
      <div className="bg-black opacity-90 w-full h-full absolute"></div>
      <div className="text-center rounded-lg bg-white w-[600px] h-[300] flex flex-col items-center relative z-10 p-6 py-10">
        <Image
          src={verified}
          alt="verificado"
        />
        <h2 className="font-bold text-[32px]">¡Evento Creado con Éxito!</h2>
        <button
          onClick={onClose}
          className="text-white bg-Azul rounded-[10px] cursor-pointer mt-2.5 px-4 py-2 border-[none]">
          Cerrar
        </button>
      </div>
    </aside>
  );
};
