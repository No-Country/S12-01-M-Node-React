// Ensure you have the required imports
"use client";
import React from "react";
import GoogleAuth from './google/GoogleAuth';
import AppleIcon from "@/assets/icons/Appleicon";
import { FaFacebookF } from "react-icons/fa";

type FormAuthProps = {};

const FormAuth: React.FC<FormAuthProps> = (props: FormAuthProps) => {


  return (
    <div className="flex flex-col justify-center items-center">
      <span>A través de</span>
      <ul className="flex justify-evenly">
        <li className="px-4 py-2  border-2  shadow shadow-[#C6C6C9] rounded-full flex mx-5 my-4 items-center w-fit cursor-pointer justify-center">
          <AppleIcon
            fill="fff"
            className="w-8 flex justify-center items-center "
          />
        </li>
        <li className="py-2 px-3  border-2  shadow shadow-[#C6C6C9] rounded-full flex mx-5 my-4 items-center w-fit justify-center">
           <GoogleAuth/>   
        </li>
        <li className="p-2  border-2  shadow shadow-[#C6C6C9] rounded-full flex mx-5 my-4 items-center cursor-pointer justify-center px-4">
          <FaFacebookF
            className=" flex justify-center items-center text-3xl text-blue-600  "/>
        </li>
      </ul>
    </div>
  );
};

export default FormAuth;
