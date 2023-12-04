import { Usuario, Role } from "@/helpers/interfaces";
import { create } from "zustand";

interface UserState {
  loginInfo: {
    usuario: Usuario;
    isLogged: boolean;
  };
}

const useUser = create<UserState>()((set) => ({
  loginInfo: {
    usuario: {
      id: "",
      nombre: "",
      apellido: "",
      email: "",
      password: "",
      telefono: "",
      favoritos: [],
      role: Role.user,
    },
    isLogged: false,
  },
  setLogin: (newLogin: UserState) => {
    set({ loginInfo: newLogin.loginInfo });
  },
  setLogOut: () => {
    set({
      loginInfo: {
        usuario: {
          id: "",
          nombre: "",
          apellido: "",
          email: "",
          password: "",
          telefono: "",
          favoritos: [],
          role: Role.user,
        },
        isLogged: false,
      },
    });
  },
}));

export default useUser;
