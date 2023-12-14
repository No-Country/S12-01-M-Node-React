"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavBarRegisterLogin = () => {
  const pathname = usePathname();

  const links = [
    { title: "Eventos", path: "/eventos" },
    { title: "Crear Eventos", path: "/crear-eventos" },
    { title: "Ayuda", path: "/ayuda" },
  ];

  return (
    <header className="h-20 flex items-center px-10 justify-between border-b[1px] border-b-Principal bg-Principal">
      <nav className="gap-8 flex items-center">
        <Link
          href="/"
          className="font-extrabold text-3xl text-white">
          Eventry
        </Link>
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
      </nav>
      <aside className="flex items-center gap-2">
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
      </aside>
    </header>
  );
};
