import Link from "next/link";
import Image from "next/image";
import heartIcon from "@/assets/svg/heartIcon.svg";
import bellIcon from "@/assets/svg/bellIcon.svg";
import avatarHome from "@/assets/img/avatarHome.png";
import arrowDrop from "@/assets/svg/arrowDropDown.svg";

export const LoggedInfo = () => {
  const isLogged = true;
  const isUser = true;
  return (
    <div
      className={`flex justify-center gap-4 bg-Azul h-full rounded-tl-xl rounded-bl-xl items-center ${
        isLogged ? "w-[410px]" : "w-[300px]"
      }`}>
      {isLogged ? (
        <div className="flex gap-8 items-center justify-around">
          <Image
            src={bellIcon}
            alt="Notificaciones"
          />
          {isUser && (
            <Image
              src={heartIcon}
              alt="Favoritos"
            />
          )}
          <div className="w-[224px] h-[61px] bg-blue-400 rounded-full flex items-center justify-around">
            <Image
              src={avatarHome}
              alt="avatar"
            />
            <p className="text-lg font-medium text-white">Sara Gradial</p>
            <Image
              src={arrowDrop}
              alt="drop down"
            />
          </div>
        </div>
      ) : (
        <>
          <Link
            href={"/login"}
            className="text-lg font-semibold text-white">
            Iniciar Sesión
          </Link>
          <p className="font-thin text-white">|</p>
          <Link
            href={"/register"}
            className="text-lg font-semibold text-white">
            Registrase
          </Link>
        </>
      )}
    </div>
  );
};
