import React from "react";
import { BiSearch } from "react-icons/bi";
import "@/components/AyudaComp/style.css"
import Link from "next/link";
import SectionQuestion from "./SectionQuestion";

type Props = {};

const AyudaComp = (props: Props) => {
  return (
    <div>
      <div className='bg-[url("https://res.cloudinary.com/dhb9rdaoc/image/upload/v1702439888/bztwwq1sxqx201xi04mv.jpg")] h-[333px] relative'>
        <div className="bg-gradient-to-r from-[#BE316C]  to-[#526FD666] h-full absolute top-0 left-0 w-full opacity-70 "></div>
        <div className="relative bottom-0 h-full flex  justify-end p-10 flex-col">
          <h2 className="text-6xl font-bold text-[#fafafa] w-5/12">
            ¿Tenés preguntas? Nosotros las respuestas
          </h2>
        </div>
      </div>
      <div className="  h-screen flex justify-evenly ">
        <section className="border-2 border-black w-2/4 flex flex-col justify-start items-center pt-10">
          <div className="bg-gradient-to-r   text-3xl from-rose-600 to-indigo-800  rounded-[10px] p-[1px]  ">

            <div className="bg-white rounded-[10px] w-[350px] flex justify-evenly items-center">
            <input
              type="search"
              name="a"
              id=" a"
              className="ml-2 border-2 border-transparent rounded-[10px] bg-transparent focus:xring-2 appearance-none text-lg ring-transparent p-2 focus:border-transparent outline-none"
              placeholder="Buscar tema"
          
            />
   
            <BiSearch className="fill-Principal ml-6 " />

            </div>

            
          </div>
          <div className="  w-full flex justify-center items-center">
          <nav className="mt-10  w-full flex  justify-center items-center ">
                <ul className="h-fit w-1/2  flex flex-col justify-center items-center ">
                    <li className="border-b-[#B3B3B3] border-b-[1px] w-full p-3">
                        <Link href={"/"} className=" w-full cursor-pointer text-Principal">Preguntas frecuentes </Link>
                    </li>
                    <li className="border-b-[#B3B3B3] border-b-[1px] w-full p-3">
                        <Link href={"/"} className=" w-full cursor-pointer text-[#4E4E4E] "> Sobre Eventry </Link>
                    </li>
                    <li className="border-b-[#B3B3B3] border-b-[1px] w-full p-3">
                        <Link href={"/"} className=" w-full cursor-pointer text-[#4E4E4E]"> Términos y condiciones </Link>
                    </li>
                    <li className="border-b-[#B3B3B3] border-b-[1px] w-full p-3">
                        <Link href={"/"} className=" w-full cursor-pointer text-[#4E4E4E]"> Políticas de privacidad </Link>
                    </li>
                    <li className="border-b-transparent border-b-[1px] w-full p-3">
                        <Link href={"/"} className=" w-full cursor-pointer text-[#4E4E4E]"> Soporte </Link>
                    </li>
                                    </ul>
            </nav>
          </div>
     
        </section>
        <SectionQuestion/>
      </div>
    </div>
  );
};

export default AyudaComp;
