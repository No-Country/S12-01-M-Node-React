import React from "react";
import RegisterFormImge from "@/assets/img/RegisterFormImge.png";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const BoxImage = () => {
  return (
    <section className="relative w-1/2">
      <div>
        <div className="relative">
          <Image
            src={RegisterFormImge}
            alt="a"
            className=" object-contain w-full min-h-full"
          />
          <span className="absolute top-0 w-full h-full bg-gradient-to-t from-[#BE316C] via-[#F006B0] to-[#F006B0] opacity-30"></span>
          <div className="absolute top-[35%] left-5 mr-4 flex flex-col justify-evenly w-20">
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
        </div>
      </div>
    </section>
  );
};

export default BoxImage;
