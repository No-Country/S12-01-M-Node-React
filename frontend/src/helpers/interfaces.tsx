export interface Usuario {
  id?: string;
  nombre: string;
  apellido: string;
  email: string;
  password?: string;
  telefono: string;
  favoritos?: string[];
  role: Role;
}

export enum Role {
  admin,
  user,
}

export interface Eventos {
  nombre: string;
  dueño: string;
  categoria: string;
  location: string;
  fecha: string;
  stock: number;
  precio: number;
  comentarios: string[];
  imagen: string;
  popular?: boolean;
  online?: boolean;
}

export interface UserLoginState {
  loginInfo: {
    usuario: {
      id: string;
      email: string;
    };
    isLogged: boolean;
  };
}
