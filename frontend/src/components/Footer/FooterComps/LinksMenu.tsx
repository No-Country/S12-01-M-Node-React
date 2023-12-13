import Link from "next/link";
import React from "react";

type Props = {};

const LinksMenu = (props: Props) => {
  return (
    <div className=" w-full ml-4 ">
      <span className="font-medium text-lg uppercase">Menu</span>

      <div className="w-fit flex flex-col justify-center items-start">
        <nav>
          <ul>
            <li className="cursor-pointer  py-2 ">
              <Link
                className="  hover:border-b-2 hover:border-b-white"
                href={"/"}
              >
                Inicio
              </Link>
            </li>
            <li className="cursor-pointer  py-2 ">
              <Link
                className="  hover:border-b-2 hover:border-b-white"
                href={"/"}
              >
                Eventos
              </Link>
            </li>
            <li className="cursor-pointer  py-2 ">
              <Link
                className="  hover:border-b-2 hover:border-b-white"
                href={"/ayuda"}
              >
                Ayuda
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default LinksMenu;
