import React from "react";
import { roboto } from "@/assets/font";
import Link from "next/link";
import RegisterForm from "./formRegister/FormRegister";
import BoxImage from "./formRegister/BoxImage/BoxImage";

type Props = {};

const Register = (props: Props) => {
  return (
    <main className="flex items-center gap-20">
      <BoxImage />
      <section className="w-[500px] mx-10 my-10 space-y-4">
        <div className="">
          <h2 className={`text-[34px] leading-[51px] text-${roboto} font-bold`}>
            Registrate Ahora
          </h2>
          <p
            className={`text-base text-${roboto} text-[#666666] first-letter:uppercase`}>
            ingresa tus datos para crear una cuenta.
          </p>
        </div>
        <RegisterForm />

        <div className="my-4">
          <p className="text-sm font-semibold">
            Al registrarme acepto los{" "}
            <span className="text-[#1e75f7] hover:underline font-medium">
              Términos y condiciones
            </span>
          </p>
        </div>
        <div className="flex">
          <Link
            href={"/login"}
            className="text-Principal underline text-base font-semibold">
            Ya tengo cuenta en Eventry
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Register;
