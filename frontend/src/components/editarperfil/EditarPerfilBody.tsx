"use client";
import { useState } from "react";
import { EditarPerfilSectionBar } from "./EditarPerfilSectionBar";
import { EditarDatos } from "./EditarDatos";
import { CambiarContraseña } from "./CambiarContraseña";
import { MedioDePago } from "./MedioDePago";
import { Verificacion } from "./Verificacion";
import { UsuarioLogged } from "@/helpers/interfaces";

interface HeaderEditarPerfilProps {
  user: UsuarioLogged;
}

export const EditarPerfilBody = ({ user }: HeaderEditarPerfilProps) => {
  const [value, setValue] = useState<string>("editar datos");

  return (
    <section className="mt-10">
      <article className="flex justify-between items-center mb-8 border-b pb-[14px] border-b-slate-400 mx-10">
        <EditarPerfilSectionBar
          value={value}
          setValue={setValue}
        />
      </article>
      {value === "editar datos" && <EditarDatos user={user} />}
      {value === "cambiar contraseña" && <CambiarContraseña user={user} />}
      {value === "medios de pago" && <MedioDePago />}
      {value === "solicitar verificacion" && <Verificacion user={user} />}
    </section>
  );
};
