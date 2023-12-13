import Image from "next/image";
import dateIcon from "@/assets/svg/dateIcon.svg";
import timeIcon from "@/assets/svg/timeIcon.svg";
import currencyIcon from "@/assets/svg/currencyIcon.svg";
import Counter from "@/components/eventos/eventosDetail/counter";

export const TicketInfo = () => {
  return (
    <aside className="w-[370px] border border-Principal rounded-[10px] h-[538px] px-[30px] py-[32px] flex flex-col gap-5">
      <h3 className="font-bold text-2xl">Tickets</h3>
      <div className="flex items-center gap-6">
        <Image
          src={dateIcon}
          width={24}
          height={24}
          alt="date"
        />
        <p className="text-xl font-bold">08 de febrero 2024</p>
      </div>
      <div className="flex items-center gap-6">
        <Image
          src={timeIcon}
          width={24}
          height={24}
          alt="time"
        />
        <p className="text-xl">16:00 hs</p>
      </div>
      <div className="flex items-center gap-6 border-b border-gray-400 pb-6">
        <Image
          src={currencyIcon}
          width={24}
          height={24}
          alt="time"
        />
        <p className="text-xl">
          A partir de <span className="font-bold">$2.000</span>
        </p>
      </div>
      <Counter />
      <div className="flex justify-between items-center text-xl">
        <p>Total:</p>
        <p className="font-bold">$6.000</p>
      </div>
      <button className="w-full text-center text-white bg-Principal font-bold py-[10px] px-4 rounded-[10px]">
        Comprar
      </button>
      <p>Términos y Condiciones</p>
    </aside>
  );
};
