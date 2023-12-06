"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavBarHome = () => {
  const links = [
    { title: "Eventos", path: "/eventos" },
    { title: "Crear Eventos", path: "/crear-eventos" },
  ];
  const pathname = usePathname();

  return (
    <header className="h-20 w-full flex items-center pl-10 justify-between border-b[1px] border-b-Principal bg-Principal">
      <nav className="gap-8 flex items-center justify-start w-1/2">
        <Link
          href="/"
          className="font-extrabold text-3xl text-white">
          Eventry
        </Link>
        <input
          type="text"
          className="w-[350px] h-[50px] rounded-[10px]  bg-pink-500 text-white placeholder-white px-4 focus:outline-none"
          placeholder="Busca tu evento..."
        />
      </nav>
      <aside className="flex items-center justify-end w-1/2 gap-8 h-20">
        {links.map((link) => (
          <Link
            className={`text-base font-medium text-white ${
              link.path === pathname ? "underline" : ""
            }`}
            key={link.title}
            href={link.path}>
            {link.title}
          </Link>
        ))}
        <div className="w-[300px] flex justify-center gap-4 bg-Azul h-full rounded-tl-xl rounded-bl-xl items-center">
          <Link
            href={"/login"}
            className="text-lg font-semibold text-white">
            Iniciar Sesión
          </Link>
          <p className="font-thin text-white">|</p>
          <Link
            href={"/register"}
            className="text-lg font-semibold text-white">
            Registrase
          </Link>
        </div>
      </aside>
    </header>
  );
};
