"use client";
import { Dispatch, SetStateAction } from "react";

interface FilterBarEventosProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

export const FilterBarEventos = ({
  value,
  setValue,
}: FilterBarEventosProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    console.log(value);
  };
  return (
    <form className="flex justify-start gap-4">
      <label
        className={`text-xl relative ${
          value === "todos" ? "selectedRadioButtonEventos" : ""
        }`}>
        Todos
        <input
          type="radio"
          name="eventosdestacados"
          className={`radioButtonHomePage`}
          value="todos"
          onChange={handleChange}
          checked={value === "todos"}
        />
      </label>
      <label
        className={`text-xl relative ${
          value === "online" ? "selectedRadioButtonEventos" : ""
        }`}>
        Online
        <input
          type="radio"
          name="eventosdestacados"
          className="radioButtonHomePage"
          value="online"
          onChange={handleChange}
          checked={value === "online"}
        />
      </label>
      <label
        className={`text-xl relative ${
          value === "hoy" ? "selectedRadioButtonEventos" : ""
        }`}>
        Hoy
        <input
          type="radio"
          name="eventosdestacados"
          className="radioButtonHomePage"
          value="hoy"
          onChange={handleChange}
          checked={value === "hoy"}
        />
      </label>
      <label
        className={`text-xl relative ${
          value === "gratis" ? "selectedRadioButtonEventos" : ""
        }`}>
        Gratis
        <input
          type="radio"
          name="eventosdestacados"
          className="radioButtonHomePage"
          value="gratis"
          onChange={handleChange}
          checked={value === "gratis"}
        />
      </label>
      <label
        className={`text-xl relative ${
          value === "populares" ? "selectedRadioButtonEventos" : ""
        }`}>
        Populares
        <input
          type="radio"
          name="eventosdestacados"
          className="radioButtonHomePage"
          value="populares"
          onChange={handleChange}
          checked={value === "populares"}
        />
      </label>
    </form>
  );
};
