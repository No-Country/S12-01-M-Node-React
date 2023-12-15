"use client";
import Image from "next/image";
import searchButton from "@/assets/svg/SearchLocationIcon.svg";
import useSearchBar from "@/hooks/useSearchBar";

export const SearchBarHome = () => {
  const { onSubmit, register, handleSubmit, setValue } = useSearchBar();

  return (
    <form className="relative w-[458px] h-[60px]">
      <input
        type="text"
        placeholder="Buscar evento..."
        className="mt-5 border border-[#D9D9D9] px-4 w-[458px] h-[60px] rounded-lg font- font-medium text-sm text-[#666666] focus:outline-none  focus:border-[3px] focus:border-Principal "
        {...register("search")}
        onChange={(e) => {
          setValue("search", e.target.value.toLowerCase());
        }}
      />
      <Image
        src={searchButton}
        width={58}
        height={58}
        alt="Search Button"
        className="absolute top-[21px] left-[87%] cursor-pointer"
        onClick={() => handleSubmit(onSubmit)()}
      />
    </form>
  );
};
