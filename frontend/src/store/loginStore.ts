import { Usuario, Role } from "@/helpers/interfaces";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserState {
  loginInfo: {
    usuario: Usuario;
    isLogged: boolean;
  };
  setLogin: (newLogin: UserState["loginInfo"]) => void;
  setLogOut: () => void;
}

const useUser = create<UserState>()(
  persist(
    (set) => ({
      loginInfo: {
        usuario: {
          id: "",
          nombre: "",
          // apellido: "",
          email: "",
          telefono: "",
          // favoritos: [],
          role: Role.user,
        },
        isLogged: false,
      },
      setLogin: (newLogin: UserState["loginInfo"]) => {
        set((prevState) => ({
          loginInfo: { ...prevState.loginInfo, ...newLogin },
        }));
      },
      setLogOut: () => {
        set({
          loginInfo: {
            usuario: {
              id: "",
              nombre: "",
              // apellido: "",
              email: "",
              password: "",
              telefono: "",
              // favoritos: [],
              role: Role.user,
            },
            isLogged: false,
          },
        });
      },
    }),
    { name: "loginStore" }
  )
);

export default useUser;
