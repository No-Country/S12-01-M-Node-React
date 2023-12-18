import Image from "next/image";
import Link from "next/link";
import avatarPerfil from "@/assets/img/avatarPerfil.png";
import metodoPago from "@/assets/svg/metodoPagoPerfil.svg";
import editarPerfil from "@/assets/svg/editarPerfil.svg";

export const HeaderPerfil = () => {
  return (
    <section className="w-full p-10 flex justify-between rounded-[10px] bg-blue-100">
      <div className="w-3/4 flex items-center gap-8 ">
        <Image
          src={avatarPerfil}
          alt="avatar"
          width={120}
          height={120}
        />
        <div className="flex flex-col">
          <h2 className="font-bold text-2xl">Sara Gradial</h2>
          <p className="text-base font-bold">
            2 próximos eventos |{" "}
            <span className="font-normal">10 eventos asistidos</span>
          </p>
          <p className="text-base text-Principal">5 eventos favoritos</p>
        </div>
      </div>
      <div className="w-1/4 flex flex-col justify-evenly">
        <span className="flex gap-4 items-center mb-2">
          <Image
            src={editarPerfil}
            alt="editar perfil"
            width={24}
            height={24}
          />
          <Link
            href={`/editar-perfil/6579b47c5d114f5fdf61f111`}
            className="text-Azul">
            Editar datos de cuenta
          </Link>
        </span>
        <span className="flex gap-4 items-center mb-2">
          <Image
            src={metodoPago}
            alt="metodo de pago"
            width={24}
            height={24}
          />
          <p className="text-Azul">Método de pago</p>
        </span>
        <Link
          href={"/crear-eventos"}
          className="text-white bg-Azul rounded-[10px] pt-3 px-6 w-full h-12 text-center">
          Crear Evento
        </Link>
      </div>
    </section>
  );
};
