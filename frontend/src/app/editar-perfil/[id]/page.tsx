import { EditarPerfilBody } from "@/components/editarperfil/EditarPerfilBody";
import { HeaderEditarPerfil } from "@/components/editarperfil/HeaderEditarPerfil";

const EditarPerfilPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  console.log(id);
  return (
    <main>
      <HeaderEditarPerfil />
      <EditarPerfilBody />
    </main>
  );
};

export default EditarPerfilPage;
