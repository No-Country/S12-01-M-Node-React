import Link from "next/link";

export const NavBar = () => {
  return (
    <header className="h-20 flex items-center px-10 justify-between border border-b[1px] border-b-Principal">
      <nav className="gap-8 flex items-center">
        <Link href="/">
          <h1 className="font-extrabold text-3xl">Eventry</h1>
        </Link>
        <Link
          href="/"
          className="text-lg font-semibold">
          Inicio
        </Link>
        <Link
          href="/eventos"
          className="text-lg font-semibold">
          Eventos
        </Link>
        <Link
          href="/agenda"
          className="text-lg font-semibold">
          Agenda
        </Link>
        <Link
          href="/ayuda"
          className="text-lg font-semibold">
          Ayuda
        </Link>
      </nav>
      <aside className="flex items-center gap-2">
        <p className="text-lg font-semibold">Iniciar Sesión</p>
        <p className="font-thin text-Grey">|</p>
        <p className="text-lg font-semibold">Registrase</p>
      </aside>
    </header>
  );
};
