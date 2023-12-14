'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import arrowDrop from '@/assets/svg/arrowDropDown.svg';
import avatarHome from "@/assets/img/avatarHome.png";
import Link from 'next/link';
import useUser from '@/store/loginStore';

const UserInformation = ({ userName }) => {
  const [isBoxOpen, setIsBoxOpen] = useState(false);
  const { setLogOut } = useUser();

  const handleBoxClick = () => {
    setIsBoxOpen(!isBoxOpen);
  };
  const handleLogOut = () => {
    setLogOut(); // Call setLogOut function to log the user out
    setIsBoxOpen(false); // Close the dropdown after logging out
  };

  return (
    <div className="relative">
      <div className="w-[224px] h-[61px] bg-blue-400 rounded-full flex items-center justify-around" onClick={handleBoxClick}>
        <Image src={avatarHome} alt="avatar" />
        <p className="text-lg font-medium text-white capitalize">{userName}</p>
        <Image src={arrowDrop} alt="drop down" />
      </div>

      {isBoxOpen && (
        <div className="absolute top-14 left-0 mt-2 w-full bg-[#787878] p-2 rounded-[30px] shadow z-10  ">
            <div className='flex justify-evenly items-center'>
          <Image src={avatarHome} alt="avatar" />
        <p className="text-lg font-medium text-white capitalize">{userName}</p>

            </div>
            <div className='my-2  flex justify-center' >
            <nav >
                <ul>
                    <li className='my-2 text-white'><Link href={"/perfil"}>Perfil</Link></li>
                    <li className='my-2 text-white'><Link href={"/perfil"}>Método de pago</Link></li>
                    <li className='my-2 text-white'><Link href={"/ayuda#QaQuestions"}>Preguntas frecuentes</Link></li>
                </ul>
            </nav>

            </div>
            <div className='flex justify-center'>
          <button className="text-black border-t-2 border-black mr-4 pt-2 pr-6 flex justify-center items-center w-2/3" onClick={handleLogOut}>
          Cerrar sesión
          </button>

            </div>

        </div>
      )}
    </div>
  );
};

export default UserInformation;
