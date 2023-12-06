"use client";
import { usePathname } from "next/navigation";
import { NavBarRegisterLogin } from "./NavBarRegisterLogin";
import { NavBarHome } from "./NavBarHome";

export const NavBar = () => {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/login" || pathname === "/register" ? (
        <NavBarRegisterLogin />
      ) : (
        <NavBarHome />
      )}
    </>
  );
};
