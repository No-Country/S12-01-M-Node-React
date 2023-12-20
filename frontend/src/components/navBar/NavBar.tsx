"use client";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

export const NavBar = () => {
  const pathname = usePathname();

  const CSRNavBarRegisterLogin = dynamic(
    () =>
      import("@/components/navBar/NavBarRegisterLogin").then(
        (mod) => mod.NavBarRegisterLogin
      ),
    {
      ssr: false,
    }
  );

  const CSRNavBarHome = dynamic(
    () =>
      import("@/components/navBar/NavBarHome").then((mod) => mod.NavBarHome),
    {
      ssr: false,
    }
  );

  return (
    <>
      {pathname === "/login" || pathname === "/register" ? (
        <CSRNavBarRegisterLogin />
      ) : (
        <CSRNavBarHome />
      )}
    </>
  );
};
