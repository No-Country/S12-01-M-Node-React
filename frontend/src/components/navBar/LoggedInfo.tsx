import Link from "next/link";
import Image from "next/image";
import heartIcon from "@/assets/svg/heartIcon.svg";
import bellIcon from "@/assets/svg/bellIcon.svg";
import avatarHome from "@/assets/img/avatarHome.png";
import arrowDrop from "@/assets/svg/arrowDropDown.svg";
import useUser from "@/store/loginStore";
import { Role } from "@/helpers/interfaces";
import { useEffect, useRef, useState } from "react";
import { NavBarView } from "./NavBarView";

export const LoggedInfo = () => {
  const logged = useUser((state) => state.loginInfo);
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const containerRef = useRef<any>();

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      containerRef.current &&
      event.target instanceof Node &&
      !containerRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    console.log(logged);
  }, [logged.usuario.nombre]);

  return (
    <div
      ref={containerRef}
      className={`flex justify-center gap-4 bg-Azul h-full rounded-tl-xl rounded-bl-xl items-center ${
        logged.isLogged ? "w-[410px]" : "w-[300px]"
      }`}>
      {logged.isLogged ? (
        <div className="flex gap-8 items-center justify-around">
          <Image
            src={bellIcon}
            alt="Notificaciones"
          />
          {logged.usuario.role === Role.user && (
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
            <p className="text-lg font-medium text-white capitalize">
              {logged.usuario.nombre}
            </p>
            <Image
              src={arrowDrop}
              alt="drop down"
              className="cursor-pointer"
              onClick={handleOpen}
            />
            {isOpen && (
              <div className="relative">
                <NavBarView
                  id={logged.usuario.id}
                  setIsOpen={setIsOpen}
                />
              </div>
            )}
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
