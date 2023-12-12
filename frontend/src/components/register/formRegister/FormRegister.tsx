"use client";
import { roboto } from "@/assets/font";
import { Role } from "@/helpers/interfaces";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";
import { MAIN_ROUTE, REGISTER_ROUTE } from "@/routes";
import { useRouter } from "next/navigation";

interface RegisterFormInputs {
  first_name: string;
  last_name: string;
  telephone: string;
  email: string;
  password: string;
  role: Role.user;
}

const RegisterForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterFormInputs>();

  const onSubmit = async (data: RegisterFormInputs) => {
    console.log(data);
    try {
      const res = await fetch(`${MAIN_ROUTE}${REGISTER_ROUTE}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: data.first_name,
          last_name: data.last_name,
          telephone: data.telephone,
          email: data.email,
          password: data.password,
          role: Role.user,
        }),
      });
      console.log(res);
      if (res.ok) {
        console.log(res);
        const responseData = await res.json();
        console.log("Respuesta del servidor:", responseData);
        reset();
        router.push("/login");
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`flex flex-col gap-4 text-${roboto}`}>
      <div className="flex gap-2">
        <div className="flex flex-col w-full">
          <label htmlFor="first_name">Nombre</label>
          <input
            type="text"
            {...register("first_name", { required: true })}
            className="h-10 rounded-lg border-2 w-full px-5 py-6 border-[#D9D9D9] mt-1 "
            name="first_name"
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="last_name">Apellido</label>
          <input
            type="text"
            {...register("last_name", { required: true })}
            className="h-10 rounded-lg border-2 w-full px-5 py-6 border-[#D9D9D9] mt-1 "
            name="last_name"
          />
        </div>
      </div>
      <div>
        <label htmlFor="telephone">Teléfono</label>
        <input
          type="text"
          {...register("telephone", { required: true })}
          className="h-10 rounded-lg border-2 w-full px-5 py-6 border-[#D9D9D9] mt-1 "
          placeholder="+59 | 1234 123456"
          name="telephone"
        />
      </div>
      <div>
        <label
          className="  text-[#4e4e4e] font-semibold"
          htmlFor="email">
          Correo Electrónico
        </label>
        <div className="flex items-center h-10 rounded-lg border-2 w-full px-5 py-6 border-[#D9D9D9] mt-1">
          <EnvelopeIcon className="text-base w-5 h-5 opacity-20" />
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="Tu correo electrónico"
            className="ring-transparent ring-0 w-full focus:ring-0 focus:ring-transparent text-[#4e4e4e] outline-none pl-2 "
            name="email"
          />
        </div>
        {errors.email && <p>Este campo es requerido</p>}
      </div>
      <div>
        <label
          className="text-[#4e4e4e] font-semibold"
          htmlFor="password">
          Contraseña
        </label>
        <div className="flex items-center h-10 rounded-lg border-2 w-full px-5 py-6 border-[#D9D9D9] mt-1">
          <LockClosedIcon className="text-base w-5 h-5 opacity-20" />
          <input
            type="password"
            {...register("password", { required: true })}
            placeholder="Tu contraseña"
            className="ring-transparent ring-0 w-full focus:ring-0 focus:ring-transparent text-[#4e4e4e] outline-none pl-2 "
            name="password"
          />
        </div>
        {errors.password && (
          <p>La contraseña debe tener al menos 6 caracteres</p>
        )}
      </div>
      <button
        type="submit"
        className="py-[10px] my-3 px-6 bg-[#be316c] hover:bg-[#cf4f85] duration-300 rounded-lg font-medium text-xl text-white">
        Crear cuenta
      </button>
    </form>
  );
};

export default RegisterForm;
