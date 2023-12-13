import Image from "next/image";
import checked from "@/assets/svg/checked.svg";

export const EventDetail = () => {
  return (
    <div>
      <h4 className="font-bold text-2xl">Detalles</h4>
      <div className="p-10 flex flex-col gap-4">
        <div className="flex items-center justify-start gap-8">
          <Image
            src={checked}
            alt="checked"
            width={24}
            height={24}
          />
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="flex items-center justify-start gap-8">
          <Image
            src={checked}
            alt="checked"
            width={24}
            height={24}
          />
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="flex items-center justify-start gap-8">
          <Image
            src={checked}
            alt="checked"
            width={24}
            height={24}
          />
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="flex items-center justify-start gap-8">
          <Image
            src={checked}
            alt="checked"
            width={24}
            height={24}
          />
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
    </div>
  );
};
