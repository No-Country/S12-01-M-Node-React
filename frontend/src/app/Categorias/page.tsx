import React from 'react'
import categoriesimg from "@/assets/img/CategoriasImg.jpg"
import Image from 'next/image'
import { TfiWorld } from "react-icons/tfi";
import { TbMicrophone2 } from "react-icons/tb";
import { GiDramaMasks , GiKnifeFork } from "react-icons/gi";
import { PiHandshakeLight } from "react-icons/pi";
import { HiOutlineUserGroup } from "react-icons/hi";
  

const page = () => {
  return (
    <div>
        <div className="relative h-[31.4rem]  ">
            <Image src={categoriesimg} alt='a' width={1980} className='absolute top-0 -z-10 ' />
            <h2 className=' text-6xl font-bold text-[#fafafa] h-full   flex items-end pb-10  ml-10  uppercase tracking-wider	 '>Categorías</h2>
        </div>
        <div className='grid grid-cols-4 grid-rows-3 gap-6 pt-10 border-2 h-fit '>

            <div className='flex flex-col items-center'>
< TfiWorld className="border-2 w-[150px] h-[150px] p-8 cursor-pointer mb-2 rounded-full shadow-md" />

                <span>Educación</span>
            </div>

            <div className='flex flex-col items-center'>
< TbMicrophone2  className="border-2 w-[150px] h-[150px] p-8 cursor-pointer mb-2 rounded-full shadow-md" />

                <span>Conciertos</span>
            </div>
            <div className='flex flex-col items-center'>
< GiDramaMasks   className="border-2 w-[150px] h-[150px] p-8 cursor-pointer mb-2 rounded-full shadow-md" />

                <span>Teatro</span>
            </div>
            <div className='flex flex-col items-center'>
< GiKnifeFork    className="border-2 w-[150px] h-[150px] p-8 cursor-pointer mb-2 rounded-full shadow-md" />

                <span>Gastronomia</span>
            </div>
            <div className='flex flex-col items-center'>
< PiHandshakeLight    className="border-2 w-[150px] h-[150px] p-8 cursor-pointer mb-2 rounded-full shadow-md" />

                <span>Gastronomia</span>
            </div>
            <div className='flex flex-col items-center'>
< HiOutlineUserGroup     className="border-2 w-[150px] h-[150px] p-8 cursor-pointer mb-2 rounded-full shadow-md" />

                <span>Gastronomia</span>
            </div>


        </div>
    </div>
  )
}

export default page