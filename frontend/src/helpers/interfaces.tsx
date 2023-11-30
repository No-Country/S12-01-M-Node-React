interface Usuario {
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
