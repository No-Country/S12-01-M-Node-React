import { Dispatch, SetStateAction } from "react";

interface PerfilSectionsBarProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

export const EditarPerfilSectionBar = ({
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
          value === "editar datos" ? "selectedRadioButton" : ""
        }`}>
        Editar datos
        <input
          type="radio"
          name="eventosdestacados"
          className={`radioButtonHomePage`}
          value="editar datos"
          onChange={handleChange}
          checked={value === "editar datos"}
        />
      </label>
      <label
        className={`text-xl relative ${
          value === "cambiar contraseña" ? "selectedRadioButton" : ""
        }`}>
        Cambiar contraseña
        <input
          type="radio"
          name="eventosdestacados"
          className="radioButtonHomePage"
          value="cambiar contraseña"
          onChange={handleChange}
          checked={value === "cambiar contraseña"}
        />
      </label>
      <label
        className={`text-xl relative ${
          value === "medios de pago" ? "selectedRadioButton" : ""
        }`}>
        Medios de pago
        <input
          type="radio"
          name="eventosdestacados"
          className="radioButtonHomePage"
          value="medios de pago"
          onChange={handleChange}
          checked={value === "medios de pago"}
        />
      </label>
      <label
        className={`text-xl relative ${
          value === "solicitar verificacion" ? "selectedRadioButton" : ""
        }`}>
        Solicitar verificación
        <input
          type="radio"
          name="eventosdestacados"
          className="radioButtonHomePage"
          value="solicitar verificacion"
          onChange={handleChange}
          checked={value === "solicitar verificacion"}
        />
      </label>
    </form>
  );
};
