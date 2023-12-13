import Link from "next/link";
import React from "react";

type Props = {};

function LinksInteres({}: Props) {
  return (
    <div className=" w-full ml-4 ">
      <span className="font-medium text-lg uppercase  ">De interés</span>
      <div className="w-fit flex flex-col justify-center items-start">
        <nav>
          <ul>
            <li className="cursor-pointer  py-2 ">
              <Link
                className="  hover:border-b-2 hover:border-b-white"
                href={"/Terms&Services"}
              >
                Términos y Condiciones
              </Link>
            </li>
            <li className="cursor-pointer  py-2 ">
              <Link
                className="  hover:border-b-2 hover:border-b-white"
                href={"/Privacy"}
              >
                Políticas de Privacidad
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default LinksInteres;
