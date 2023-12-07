import { Dispatch, SetStateAction } from "react";

interface FilterBarProps {
  setValue: Dispatch<SetStateAction<string>>;
}

export const FilterBar = ({ setValue }: FilterBarProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <form className="flex justify-start gap-4">
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
  );
};
