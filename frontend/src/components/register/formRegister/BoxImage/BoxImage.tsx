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
        </div>
      </div>
    </section>
  );
};

export default BoxImage;
