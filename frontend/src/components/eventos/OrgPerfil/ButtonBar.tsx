import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { Eventos } from "@/helpers/interfaces";
import BackArrow from "@/assets/svg/BackArrow";
import FowardArrow from "@/assets/svg/FowardArrow";

interface ButtonBarProps {
  setCurrentIndex: Dispatch<SetStateAction<number>>;
  currentIndex: number;
  eventos: Eventos[];
}

export const ButtonBar = ({
  setCurrentIndex,
  currentIndex,
  eventos,
}: ButtonBarProps) => {
  const nextCard = () => {
    if (currentIndex < eventos.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
    return;
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  return (
    <aside className="flex">
      <div
        className={` h-[40] flex rounded items-center justify-center cursor-pointer py-2 mx-2  bg-white duration-300 ${currentIndex === 0 ? " w-[40px]  " : "  w-[80px]" } `}
        onClick={prevCard}>
             {currentIndex === 0 ? 
               (  <BackArrow fill="#B3B3B3" width="24" className="opacity-60 "/>) : (  <FowardArrow fill="#526FD6" className=" rotate-180 "  width="54" height="24"/>) }
      </div>
      <div
        className={` h-[40]  rounded flex items-center justify-center cursor-pointer py-2 mx-2 bg-white  duration-300 ${currentIndex === 24 ? " w-[40px] " : "   w-[80px]" }`}
        onClick={nextCard}>
      {currentIndex === 24 ? 
              ( <BackArrow className="opacity-60 rotate-180 " width="24" fill="#B3B3B3" />) : (<FowardArrow   fill="#526FD6" width="54" height="24" />)   }
      </div>
    </aside>
  );
};
