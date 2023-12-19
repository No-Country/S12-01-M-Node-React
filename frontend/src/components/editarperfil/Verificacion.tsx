import { Role, UsuarioLogged } from "@/helpers/interfaces";
import React from "react";

interface HeaderEditarPerfilProps {
  user: UsuarioLogged;
}

export const Verificacion = ({ user }: HeaderEditarPerfilProps) => {
  const handleButton = async () => {
    try {
      const res = await fetch(
        `https://s12-01-m-node-react.onrender.com/api/v1/user/${user._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            role: Role.admin,
          }),
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
    } catch (err) {
      return err;
    }
  };

  return (
    <div className="w-full h-40 flex justify-center items-center">
      <button
        onClick={handleButton}
        className="bg-Principal text-white font-medium w-[300px] h-10 rounded-[10px] text-center">
        Solicitar verificacion
      </button>
    </div>
  );
};
