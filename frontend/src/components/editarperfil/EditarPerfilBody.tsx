"use client";
import { useState } from "react";
import { EditarPerfilSectionBar } from "./EditarPerfilSectionBar";
import { EditarDatos } from "./EditarDatos";
import { CambiarContraseña } from "./CambiarContraseña";
import { MedioDePago } from "./MedioDePago";
import { Verificacion } from "./Verificacion";

export const EditarPerfilBody = () => {
  const [value, setValue] = useState<string>("editar datos");

  return (
    <section className="mt-10">
      <article className="flex justify-between items-center mb-8 border-b pb-[14px] border-b-slate-400 mx-10">
        <EditarPerfilSectionBar
          value={value}
          setValue={setValue}
        />
      </article>
      {value === "editar datos" && <EditarDatos />}
      {value === "cambiar contraseña" && <CambiarContraseña />}
      {value === "medios de pago" && <MedioDePago />}
      {value === "solicitar verificacion" && <Verificacion />}
    </section>
  );
};
