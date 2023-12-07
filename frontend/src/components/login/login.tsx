import React from "react";
import LoginForm from "./formLogin/FormLogin";
import FormAuth from "./formLogin/FormAuth";
import { roboto } from "@/assets/font";
import BoxImage from "./formLogin/BoxImage/BoxImage";
import Link from "next/link";

type Props = {};

const Login = (props: Props) => {
  return (
    <main className=" flex   h-full">
      <section className=" w-2/3 mx-10 my-auto ">
        <div className="">
          <h2 className={`text-[34px] leading-[51px]  text-${roboto} font-bold`}>Bienvenido nuevamente</h2>
          <p className={`text-base text-${roboto} text-[#666666] first-letter:uppercase`}>ingresa los datos para acceder a tu cuenta</p>
        </div>
        <LoginForm />
        <div className="w-full  flex justify-center items-center my-4">
          <span className="border-[1px] border-[#C6C6C9] w-full h-fit"></span>
          <span className="text-xl px-3">O</span>
          <span className="border-[1px] border-[#C6C6C9] w-full h-fit"></span>
        </div>
        <div className="my-4">
          <FormAuth />
        </div>
        <div className="flex justify-center items-center  w-full">
          <Link href={"/register"} className="text-Principal underline text-xl">No tengo cuenta en Eventry</Link>
        </div>
      </section>
     <BoxImage/>
    </main>
  );
};

export default Login;
