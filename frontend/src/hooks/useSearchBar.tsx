import { Eventos } from "@/helpers/interfaces";
import { useForm } from "react-hook-form";

const useSearchBar = (eventosArray: Eventos[]) => {
  const { register, handleSubmit, setValue, reset } = useForm();

  const filterEvents = (data: any) => {
    console.log(data);
    const searchInput = data.search.toLowerCase();
    return eventosArray.filter((evento: Eventos) => {
      const lowerCaseNombre = evento.nombre.toLowerCase();
      const lowerCaseCategoria = evento.categoria.toLowerCase();
      const lowerCaseLocation = evento.location.toLowerCase();

      return (
        lowerCaseNombre.includes(searchInput) ||
        lowerCaseCategoria.includes(searchInput) ||
        lowerCaseLocation.includes(searchInput)
      );
    });
  };

  const onSubmit = (data: any) => {
    console.log(data);
    const filteredEvents = filterEvents(data);
    console.log("Eventos filtrados:", filteredEvents);
    reset();
  };

  return { onSubmit, register, handleSubmit, setValue };
};

export default useSearchBar;
