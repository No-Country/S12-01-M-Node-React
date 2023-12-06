import Image from "next/image";
import banner from "@/assets/img/EventHighlight.png";

export const HomeBanner = () => {
  return (
    <section className="px-10 py-10 flex items-center justify-center">
      <Image
        src={banner}
        alt="banner"
        width={1250}
        height={448}
      />
    </section>
  );
};
