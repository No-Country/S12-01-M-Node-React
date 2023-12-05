import React from "react";
import RegisterFormImge from "@/assets/img/RegisterFormImge.png";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const BoxImage = () => {
  return (
    <section className="relative">
      <div>
        <div className="relative">
          <Image
            src={RegisterFormImge}
            alt="a"
            width={640}
            height={832}
            className=" object-contain"
          />
          <span className="absolute top-0 w-[640px] h-full bg-gradient-to-t from-[#BE316C] via-[#F006B0] to-[#F006B0] opacity-30"></span>
        </div>
      </div>
      {/*       <div className="absolute top-[14rem] left-0 ml-10 flex flex-col justify-evenly w-20">
        <Link
          href={"#"}
          className=" bg-white text-black my-4 w-12 h-12 rounded-full flex justify-center items-center">
          <FaFacebookF className=" text-lg opacity-80" />
        </Link>
        <Link
          href={"#"}
          className=" bg-white text-black my-4 w-12 h-12 rounded-full flex justify-center items-center">
          <FaYoutube className=" text-lg opacity-80" />
        </Link>
        <Link
          href={"#"}
          className=" bg-white text-black my-4 w-12 h-12 rounded-full flex justify-center items-center">
          <FaTwitter className=" text-lg opacity-80" />
        </Link>
      </div> */}
    </section>
  );
};

export default BoxImage;
