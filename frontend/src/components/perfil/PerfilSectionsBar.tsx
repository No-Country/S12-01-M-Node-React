import { Dispatch, SetStateAction } from "react";

interface PerfilSectionsBarProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

export const PerfilSectionsBar = ({
  value,
  setValue,
}: PerfilSectionsBarProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    console.log(value);
  };

  return (
    <form className="flex justify-start gap-4">
      <label
        className={`text-xl relative ${
          value === "mis entradas" ? "selectedRadioButton" : ""
        }`}>
        Mis entradas
        <input
          type="radio"
          name="eventosdestacados"
          className={`radioButtonHomePage`}
          value="mis entradas"
          onChange={handleChange}
          checked={value === "mis entradas"}
        />
      </label>
      <label
        className={`text-xl relative ${
          value === "favoritos" ? "selectedRadioButton" : ""
        }`}>
        Favoritos
        <input
          type="radio"
          name="eventosdestacados"
          className="radioButtonHomePage"
          value="favoritos"
          onChange={handleChange}
          checked={value === "favoritos"}
        />
      </label>
      <label
        className={`text-xl relative ${
          value === "historial" ? "selectedRadioButton" : ""
        }`}>
        Historial
        <input
          type="radio"
          name="eventosdestacados"
          className="radioButtonHomePage"
          value="historial"
          onChange={handleChange}
          checked={value === "historial"}
        />
      </label>
    </form>
  );
};
