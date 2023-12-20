import { HeaderPerfil } from "@/components/perfil/HeaderPerfil";
import { PerfilBody } from "@/components/perfil/PerfilBody";
import { revalidatePath } from "next/cache";

async function getData(id: string) {
  const res = await fetch(
    `https://s12-01-m-node-react.onrender.com/api/v1/user/${id}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  revalidatePath("/", "layout");
  return res.json();
}

async function getEventsWithTickets(id: string) {
  const res = await fetch(
    `https://s12-01-m-node-react.onrender.com/api/v1/tickets/${id}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  revalidatePath("/", "layout");
  return res.json();
}

const PerfilPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const user = await getData(id);
  const tickets = await getEventsWithTickets(id);
  const ticketValues = Object.values(tickets.tickets);
  console.log(ticketValues);
  /*   const ticketIds = ticketValues.map((ticket) => ticket._id);
  console.log(ticketIds); */

  return (
    <main className="p-10">
      <HeaderPerfil user={user.data} />
      <PerfilBody events={tickets.tickets} />
    </main>
  );
};

export default PerfilPage;
