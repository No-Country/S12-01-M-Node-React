import { Usuario, Role } from "@/helpers/interfaces";
import { create } from "zustand";

const getInitialUserState = (): UserState["loginInfo"] => {
  const storedUser = localStorage.getItem("user");
  const storedIsLogged = localStorage.getItem("isLogged");

  if (storedUser && storedIsLogged) {
    return {
      usuario: JSON.parse(storedUser),
      isLogged: JSON.parse(storedIsLogged),
    };
  }

  return {
    usuario: {
      id: "",
      nombre: "",
      email: "",
      telefono: "",
      role: Role.user,
    },
    isLogged: false,
  };
};

interface UserState {
  loginInfo: {
    usuario: Usuario;
    isLogged: boolean;
  };
  setLogin: (newLogin: UserState["loginInfo"]) => void;
  setLogOut: () => void;
}

const useUser = create<UserState>((set) => ({
  loginInfo: getInitialUserState(),

  setLogin: (newLogin: UserState["loginInfo"]) => {
    set((prevState) => {
      const nextState = { loginInfo: { ...prevState.loginInfo, ...newLogin } };
      localStorage.setItem("user", JSON.stringify(nextState.loginInfo.usuario));
      localStorage.setItem("isLogged", JSON.stringify(nextState.loginInfo.isLogged));
      return nextState;
    });
  },

  setLogOut: () => {
    set(() => {
      localStorage.removeItem("user");
      localStorage.removeItem("isLogged");
      return {
        loginInfo: {
          usuario: {
            id: "",
            nombre: "",
            email: "",
            password: "",
            telefono: "",
            role: Role.user,
          },
          isLogged: false,
        },
      };
    });
  },
}));

export default useUser;
