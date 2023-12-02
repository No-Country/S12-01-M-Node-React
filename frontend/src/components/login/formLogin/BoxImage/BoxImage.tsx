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
          className=" bg-white text-black my-4 w-full h-20   rounded-full flex justify-center items-center">
          <FaFacebookF className=" text-3xl opacity-80  " />
        </Link>
        <Link
          href={"#"}
          className=" bg-white text-black my-4 w-full h-20   rounded-full flex justify-center items-center">
          <FaYoutube className=" text-3xl opacity-80  " />
        </Link>
        <Link
          href={"#"}
          className=" bg-white text-black my-4 w-full h-20   rounded-full flex justify-center items-center">
          <FaTwitter className=" text-3xl opacity-80  " />
        </Link>
      </div>
    </section>
  );
};

export default BoxImage;
