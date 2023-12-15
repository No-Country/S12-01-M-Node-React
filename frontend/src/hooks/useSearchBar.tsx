import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

const useSearchBar = () => {
  const router = useRouter();
  const { register, handleSubmit, setValue, reset } = useForm();
  const [searchTerm, setSearchTerm] = useState<string>("");

  const onSubmit = (data: any) => {
    router.push(`/busquedaeventos/${data.search}`);
    reset();
  };

  return {
    onSubmit,
    register,
    handleSubmit,
    setValue,
    searchTerm,
    setSearchTerm,
  };
};

export default useSearchBar;
