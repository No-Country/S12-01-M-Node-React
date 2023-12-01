import React from "react";
import FormImg from "@/assets/img/FormImg.jpg";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

type Props = {};

const BoxImage = (props: Props) => {
  return (
    <section className="w-full relative">
      <div className="w-full">
        <Image
          src={FormImg}
          alt="a"
          width={1200}
          height={800}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full h-full object-cover"
        />
      </div>
      <span className="absolute top-0 w-full h-full bg-gradient-to-t from-[#BE316C] from-100% to-[#F006B0] to-0% opacity-30"></span>
      <div className="absolute top-[35%] right-0 mr-4 flex flex-col justify-evenly w-20">
        <Link
          href={"#"}
          className="my-4 rounded-full">
          <FaFacebookF className="text-white text-3xl rounded-full p-10 mr-2 opacity-50 z-10 bg-black" />
        </Link>
        <Link
          href={"#"}
          className="bg-white my-4 rounded-full">
          <FaYoutube className="text-white text-3xl rounded-full p-10 mr-2 opacity-50 z-10 bg-black" />
        </Link>
        <Link
          href={"#"}
          className="my-4 rounded-full">
          <FaTwitter className="text-white text-3xl rounded-full p-10 mr-2 opacity-50 z-10 bg-black" />
        </Link>
      </div>
    </section>
  );
};

export default BoxImage;
