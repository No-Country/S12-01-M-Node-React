import creditCard from "@/assets/svg/creditCard.svg";
import blackDownArrow from "@/assets/svg/blackDownArrow.svg";
import Image from "next/image";

export const MedioDePago = () => {
  return (
    <div className="px-10 mb-8 bg-blue-50 mx-10 h-[86px] flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <Image
          src={creditCard}
          width={54}
          height={42}
          alt="credit card"
        />
        <p>Añadir método de pago</p>
      </div>
      <Image
        src={blackDownArrow}
        alt="down arrow"
        width={20}
        height={20}
      />
    </div>
  );
};
