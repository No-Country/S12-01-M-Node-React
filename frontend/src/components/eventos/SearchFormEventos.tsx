import { Eventos } from "@/helpers/interfaces";
import useSearchBar from "@/hooks/useSearchBar";
import blueSearchIcon from "@/assets/svg/blueSearchIcon.svg";
import Image from "next/image";

interface SearchFormEventosProps {
  filteredEvents: Eventos[];
}

export const SearchFormEventos = ({
  filteredEvents,
}: SearchFormEventosProps) => {
  const { onSubmit, register, handleSubmit, setValue } = useSearchBar();

  return (
    <form className="relative">
      <input
        type="text"
        placeholder="Ingresá tu ubicación..."
        className="mt-5 border border-Azul px-4  w-[350px] h-[50px] rounded-lg font-medium text-sm text-black focus:outline-none  focus:border-[2px] focus:border-Azul "
        {...register("search")}
        onChange={(e) => {
          setValue("search", e.target.value.toLowerCase());
        }}
      />
      <Image
        src={blueSearchIcon}
        width={24}
        height={24}
        alt="Search Button"
        className="absolute top-[32px] left-[87%] cursor-pointer"
        onClick={() => handleSubmit(onSubmit)()}
      />
    </form>
  );
};
