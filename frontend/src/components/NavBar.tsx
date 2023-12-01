"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavBar = () => {
  const pathname = usePathname();

  const links = [
    { title: "Inicio", path: "/" },
    { title: "Eventos", path: "/eventos" },
    { title: "Agenda", path: "/agenda" },
    { title: "Ayuda", path: "/ayuda" },
  ];

  return (
    <header className="h-20 flex items-center px-10 justify-between border border-b[1px] border-b-Principal">
      <nav className="gap-8 flex items-center">
        <Link
          href="/"
          className="font-extrabold text-3xl">
          Eventry
        </Link>
        {links.map((link) => (
          <Link
            className={`text-lg font-semibold ${
              link.path === pathname ? "text-Principal" : "text-black"
            }`}
            key={link.title}
            href={link.path}>
            {link.title}
          </Link>
        ))}
      </nav>
      <aside className="flex items-center gap-2">
        <p className="text-lg font-semibold">Iniciar Sesión</p>
        <p className="font-thin text-Grey">|</p>
        <p className="text-lg font-semibold">Registrase</p>
      </aside>
    </header>
  );
};
