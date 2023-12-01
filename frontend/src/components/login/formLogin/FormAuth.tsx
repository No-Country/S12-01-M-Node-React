// Ensure you have the required imports
"use client";
import React from "react";
/* import GoogleAuth from './google/GoogleAuth';
import FacebookAuth from './facebook/facebookAuth'; */
import AppleIcon from "@/assets/icons/Appleicon";

type FormAuthProps = {};

const FormAuth: React.FC<FormAuthProps> = (props: FormAuthProps) => {
  //   const responseFacebook = (response) => {
  //     console.log(response);
  //   };

  return (
    <div className="flex flex-col justify-center items-center">
      <span>A través de</span>
      <ul className="flex justify-evenly">
        <li className="p-2  border-2  shadow shadow-[#C6C6C9] rounded-full flex mx-5 my-4 items-center w-fit justify-center">
          <AppleIcon
            fill="fff"
            className="w-8 flex justify-center items-center"
          />
        </li>
        <li className="p-2  border-2  shadow shadow-[#C6C6C9] rounded-full flex mx-5 my-4 items-center w-fit justify-center">
          {/* <GoogleAuth/>    */}
        </li>
        <li className="p-2  border-2  shadow shadow-[#C6C6C9] rounded-full flex mx-5 my-4 items-center  justify-center w-[52px] h-[52px]">
          {/* <FacebookAuth/>  */}
        </li>
      </ul>
    </div>
  );
};

export default FormAuth;
