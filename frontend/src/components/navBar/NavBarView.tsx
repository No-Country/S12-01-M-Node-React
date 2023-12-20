import useUser from "@/store/loginStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

interface NavBarViewProps {
  id: string | undefined;
  setIsOpen: Dispatch<SetStateAction<Boolean>>;
}

export const NavBarView = ({ id, setIsOpen }: NavBarViewProps) => {
  const { setLogOut } = useUser();

  const router = useRouter();
  const handleLogout = async () => {
    setLogOut();
    setIsOpen(false);
    router.push("/");
    const data = await fetch(
      "https://s12-01-m-node-react.onrender.com/api/v1/auth/logout"
    );
    const res = await data.json();

    if (res.ok) {
      setLogOut();
      setIsOpen(false);
      router.push("/");
    }
    return res;
  };

  return (
    <div className="absolute top-[30px] left-[-195px] bg-blue-400 z-20 w-[180px] rounded-b-[16px] pb-4">
      <ul className="flex items-end pr-4 flex-col gap-4 ">
        <li className="list-none">
          <Link
            href={`/perfil/${id}`}
            className=" mt-8 text-white font-medium text-right">
            Perfil
          </Link>
        </li>
        <li
          className="list-none"
          onClick={handleLogout}>
          <span className=" mt-8 text-white font-medium text-right mb-4 cursor-pointer">
            Cerrar Sesión
          </span>
        </li>
      </ul>
    </div>
  );
};
