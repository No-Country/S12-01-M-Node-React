import { EditarPerfilBody } from "@/components/editarperfil/EditarPerfilBody";
import { HeaderEditarPerfil } from "@/components/editarperfil/HeaderEditarPerfil";
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

const EditarPerfilPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const user = await getData(id);
  const dataUser = user.data;
  return (
    <main>
      <HeaderEditarPerfil user={dataUser} />
      <EditarPerfilBody user={dataUser} />
    </main>
  );
};

export default EditarPerfilPage;
