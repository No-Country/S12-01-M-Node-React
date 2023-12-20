import { UsuarioLogged } from "@/helpers/interfaces";
import { useState } from "react";
import { ModalVerificacion } from "./ModalVerificacion";

interface HeaderEditarPerfilProps {
  user: UsuarioLogged;
}

export const Verificacion = ({ user }: HeaderEditarPerfilProps) => {
  const [showModal, setShowModal] = useState(false);

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
            role: "admin",
          }),
        }
      );
      if (res.ok) {
        const responseData = await res.json();
        console.log("Respuesta del servidor:", responseData);
        setShowModal(true);
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

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="w-full h-40 flex justify-center items-center">
      <button
        onClick={handleButton}
        className="bg-Principal text-white font-medium w-[300px] h-10 rounded-[10px] text-center">
        Solicitar verificacion
      </button>
      {showModal && <ModalVerificacion onClose={closeModal} />}
    </div>
  );
};
