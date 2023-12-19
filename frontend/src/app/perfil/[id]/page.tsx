import { Usuario, UsuarioLogged } from "@/helpers/interfaces";
import { HeaderPerfil } from "@/components/perfil/HeaderPerfil";
import { PerfilBody } from "@/components/perfil/PerfilBody";

async function getData(id: string) {
  const res = await fetch(
    `https://s12-01-m-node-react.onrender.com/api/v1/user/${id}`
  );
  console.log(res);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getEvents() {
  const res = await fetch(
    `https://s12-01-m-node-react.onrender.com/api/v1/events/`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const PerfilPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const user = await getData(id);
  console.log(user);
  const events = await getEvents();

  return (
    <main className="p-10">
      <HeaderPerfil user={user.data} />
      <PerfilBody events={events} />
    </main>
  );
};

export default PerfilPage;
