"use client";
import { useEffect, useState } from "react";
import { CardEvento } from "./CardEvento";

export const EventosDestacados = () => {
  const [value, setValue] = useState<string>("todos");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <section className="font-bold text-[42px] py-8 pl-10 ">
      <h2>Eventos Destacados</h2>
      <form className="flex justify-start gap-4 mb-8">
        <label className="text-xl relative">
          Todos
          <input
            type="radio"
            name="eventosdestacados"
            className="radioButtonHomePage"
            value="todos"
            onChange={handleChange}
          />
        </label>
        <label className="text-xl relative">
          Online
          <input
            type="radio"
            name="eventosdestacados"
            className="radioButtonHomePage"
            value="online"
            onChange={handleChange}
          />
        </label>
        <label className="text-xl relative">
          Hoy
          <input
            type="radio"
            name="eventosdestacados"
            className="radioButtonHomePage"
            value="hoy"
            onChange={handleChange}
          />
        </label>
        <label className="text-xl relative">
          Gratis
          <input
            type="radio"
            name="eventosdestacados"
            className="radioButtonHomePage"
            value="gratis"
            onChange={handleChange}
          />
        </label>
        <label className="text-xl relative">
          Populares
          <input
            type="radio"
            name="eventosdestacados"
            className="radioButtonHomePage"
            value="populares"
            onChange={handleChange}
          />
        </label>
      </form>
      <CardEvento />
    </section>
  );
};
