"use client";
import Image from "next/image";
import dateIcon from "@/assets/svg/dateIcon.svg";
import timeIcon from "@/assets/svg/timeIcon.svg";
import currencyIcon from "@/assets/svg/currencyIcon.svg";
import Counter from "@/components/eventos/eventosDetail/counter";
import { Eventos } from "@/helpers/interfaces";
import { Dispatch, SetStateAction, useState } from "react";
import { formatoFecha, formatoHora } from "@/helpers/formatdate";
import useUser from "@/store/loginStore";

interface TicketInfoProps {
  singleEvent: Eventos;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export const TicketInfo = ({ singleEvent, setShowModal }: TicketInfoProps) => {
  const logged = useUser((state) => state.loginInfo);

  const buyTicket = async (
    userId: string | undefined,
    eventId: string | undefined
  ) => {
    setShowModal(true);
    try {
      const res = await fetch(
        `https://s12-01-m-node-react.onrender.com/api/v1/tickets/${userId}?event=${eventId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}),
        }
      );
      if (res.ok) {
        const responseData = await res.json();
        console.log("Respuesta del servidor:", responseData);
        return responseData;
      } else {
        return Promise.reject({
          err: true,
          status: res.status,
          statusText: res.statusText,
        });
      }
    } catch (error) {}
  };

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
        <p className="text-xl font-bold">
          {formatoFecha(singleEvent.date_of_event)}
        </p>
      </div>
      <div className="flex items-center gap-6">
        <Image
          src={timeIcon}
          width={24}
          height={24}
          alt="time"
        />
        <p className="text-xl">{formatoHora(singleEvent.date_of_event)}HS</p>
      </div>
      <div className="flex items-center gap-6 border-b border-gray-400 pb-6">
        <Image
          src={currencyIcon}
          width={24}
          height={24}
          alt="time"
        />
        <p className="text-xl font-bold">${singleEvent.price.toFixed(2)}</p>
      </div>
      {/*       <Counter
        count={count}
        setCount={setCount}
      /> */}
      <div className="flex justify-between items-center text-xl">
        <p>Total:</p>
        <p className="font-bold">${(singleEvent.price * 1).toFixed()}</p>
      </div>
      <button
        onClick={() =>
          buyTicket(logged.usuario.id, encodeURI(singleEvent.name))
        }
        className="w-full text-center text-white bg-Principal font-bold py-[10px] px-4 rounded-[10px]">
        Comprar
      </button>
      <p>Términos y Condiciones</p>
    </aside>
  );
};
