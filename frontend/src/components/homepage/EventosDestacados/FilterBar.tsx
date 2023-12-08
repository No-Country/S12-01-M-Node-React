import { Dispatch, SetStateAction } from "react";

interface FilterBarProps {
  setValue: Dispatch<SetStateAction<string>>;
  selectedOption: string;
}

export const FilterBar = ({ setValue, selectedOption }: FilterBarProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <form className="flex justify-start gap-4">
      <label
        className={`text-xl relative ${
          selectedOption === "todos" ? "selectedRadioButton" : ""
        }`}>
        Todos
        <input
          type="radio"
          name="eventosdestacados"
          className={`radioButtonHomePage`}
          value="todos"
          onChange={handleChange}
          checked={selectedOption === "todos"}
        />
      </label>
      <label
        className={`text-xl relative ${
          selectedOption === "online" ? "selectedRadioButton" : ""
        }`}>
        Online
        <input
          type="radio"
          name="eventosdestacados"
          className="radioButtonHomePage"
          value="online"
          onChange={handleChange}
          checked={selectedOption === "online"}
        />
      </label>
      <label
        className={`text-xl relative ${
          selectedOption === "hoy" ? "selectedRadioButton" : ""
        }`}>
        Hoy
        <input
          type="radio"
          name="eventosdestacados"
          className="radioButtonHomePage"
          value="hoy"
          onChange={handleChange}
          checked={selectedOption === "hoy"}
        />
      </label>
      <label
        className={`text-xl relative ${
          selectedOption === "gratis" ? "selectedRadioButton" : ""
        }`}>
        Gratis
        <input
          type="radio"
          name="eventosdestacados"
          className="radioButtonHomePage"
          value="gratis"
          onChange={handleChange}
          checked={selectedOption === "gratis"}
        />
      </label>
      <label
        className={`text-xl relative ${
          selectedOption === "populares" ? "selectedRadioButton" : ""
        }`}>
        Populares
        <input
          type="radio"
          name="eventosdestacados"
          className="radioButtonHomePage"
          value="populares"
          onChange={handleChange}
          checked={selectedOption === "populares"}
        />
      </label>
    </form>
  );
};
