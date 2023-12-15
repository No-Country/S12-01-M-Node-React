"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import searchIcon from "@/assets/svg/SearchIcon.svg";
import useSearchBar from "@/hooks/useSearchBar";
import { LoggedInfo } from "./LoggedInfo";

export const NavBarHome = () => {
  const links = [
    { title: "Eventos", path: "/eventos" },
    { title: "Crear Eventos", path: "/crear-eventos" },
  ];
  const pathname = usePathname();

  const {
    onSubmit,
    register,
    handleSubmit,
    setValue,
    searchTerm,
    setSearchTerm,
  } = useSearchBar();

  return (
    <header className="h-20 w-full flex items-center pl-10 justify-between border-b[1px] border-b-Principal bg-Principal">
      <nav className="gap-8 flex items-center justify-start w-1/2">
        <Link
          href="/"
          className="font-extrabold text-3xl text-white">
          Eventry
        </Link>
        <form className="relative">
          <input
            type="text"
            className="w-[350px] h-[50px] rounded-[10px]  bg-pink-500 text-white placeholder-white px-4 focus:outline-none"
            placeholder="Busca tu evento..."
            {...register("search")}
            onChange={(e) => {
              setValue("search", e.target.value.toLowerCase());
              setSearchTerm(e.target.value);
            }}
          />
          <Image
            src={searchIcon}
            width={23}
            height={23}
            alt="search icon"
            className="absolute top-[14px] left-[310px] cursor-pointer"
            onClick={() => {
              if (searchTerm !== "") {
                handleSubmit(onSubmit)();
              }
            }}
          />
        </form>
      </nav>
      <aside className="flex items-center justify-end w-1/2 gap-8 h-20">
        {links.map((link) => (
          <Link
            className={`text-base font-medium text-white ${
              link.path === pathname
                ? "underline underline-offset-[16px] decoration-4"
                : ""
            }`}
            key={link.title}
            href={link.path}>
            {link.title}
          </Link>
        ))}
        <LoggedInfo />
      </aside>
    </header>
  );
};
