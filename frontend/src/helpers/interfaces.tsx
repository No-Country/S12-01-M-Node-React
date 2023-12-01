export interface Usuario {
  id?: string;
  nombre: string;
  apellido: string;
  email: string;
  password: string;
  telefono: string;
  favoritos?: string[];
  role: Role;
}

enum Role {
  admin,
  user,
  event_manager,
}

export interface Eventos {
  nombre: string;
  dueño?: string;
  categoria: string;
  location: string;
  fecha: string;
  stock: number;
  precio: number;
  comentarios: string[];
  imagen: string;
}
