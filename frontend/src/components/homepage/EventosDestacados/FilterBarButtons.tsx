import Image from "next/image";
import backArow from "@/assets/svg/backArrow.svg";
import fowardArrow from "@/assets/svg/fowardArrow.svg";
import { Dispatch, SetStateAction } from "react";
import { Eventos } from "@/helpers/interfaces";

interface FilterBarButtonsProps {
  setCurrentIndex: Dispatch<SetStateAction<number>>;
  currentIndex: number;
  eventos: Eventos[];
}

export const FilterBarButtons = ({
  setCurrentIndex,
  currentIndex,
  eventos,
}: FilterBarButtonsProps) => {
  const nextCard = () => {
    if (currentIndex < eventos.length - 1) {
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
        className="w-[40px] h-[40] flex items-center justify-center cursor-pointer py-2"
        onClick={prevCard}>
        <Image
          src={backArow}
          alt="back arrow"
          width={24}
          height={24}
        />
      </div>
      <div
        className="w-[80px] h-[40] bg-Principal rounded flex items-center justify-center cursor-pointer py-2"
        onClick={nextCard}>
        <Image
          src={fowardArrow}
          alt="foward arrow"
          width={56}
          height={24}
        />
      </div>
    </aside>
  );
};
