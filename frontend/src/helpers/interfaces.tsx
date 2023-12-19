export interface UsuarioLogged {
  _id?: string;
  first_name: string;
  last_name: string;
  email: string;
  telephone: string;
  favorites?: string[];
  tickets?: string[];
  role: Role;
  isActive?: boolean;
}

export interface Usuario {
  id?: string;
  nombre: string;
  apellido?: string;
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
  _id?: string;
  name: string;
  users: string;
  categories: string;
  location: string;
  date_of_event: string;
  stock_tickets: number;
  price: number;
  comments: string[];
  image: string;
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
