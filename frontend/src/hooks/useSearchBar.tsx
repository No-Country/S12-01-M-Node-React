import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const useSearchBar = () => {
  const router = useRouter();
  const { register, handleSubmit, setValue, reset } = useForm();

  const onSubmit = (data: any) => {
    router.push(`/busquedaeventos/${data.search}`);
    reset();
  };

  return { onSubmit, register, handleSubmit, setValue };
};

export default useSearchBar;
