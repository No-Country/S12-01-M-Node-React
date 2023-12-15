"use client";
import Image from "next/image";
import searchButton from "@/assets/svg/SearchIcon.svg";
import useSearchBar from "@/hooks/useSearchBar";

export const SearchBarUbicacion = () => {
  const { onSubmit, register, handleSubmit, setValue } = useSearchBar();

  return (
    <form className="relative">
      <input
        type="text"
        placeholder="Buscá por ubicación..."
        className="text-white border border-[#D9D9D9] rounded-[10px] w-[350px] h-[50px] px-4 outline-none"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        }}
        {...register("search")}
        onChange={(e) => {
          setValue("search", e.target.value.toLowerCase());
        }}
      />
      <Image
        src={searchButton}
        width={23}
        height={23}
        alt="Search Button"
        className="absolute top-[15px] left-[87%] cursor-pointer"
        onClick={() => handleSubmit(onSubmit)()}
      />
    </form>
  );
};
