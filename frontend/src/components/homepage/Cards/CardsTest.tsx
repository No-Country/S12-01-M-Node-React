// CardsTest.js
'use client'
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiSolidQuoteSingleLeft } from "react-icons/bi";
import BackArrow from "@/assets/svg/BackArrow";
import FowardArrow from "@/assets/svg/FowardArrow";

type Props = {};

const ContTest = [
  {
    id: 1,
    param:
      "Cras eu molestie augue. Etiam et mi ex. Praesent tempus sollicitudin lorem et malesuada. Ut ut condimentum lorem, id semper ante. Duis a purus sem.",
    img: {
      url:
        "https://images.pexels.com/photos/925786/pexels-photo-925786.jpeg",
      name: "Sara Gradial",
      date: "May. 14 2023",
    },
  },
  {
    id: 2,
    param:
      "Cras eu molestie augue. Etiam et mi ex. Praesent tempus sollicitudin lorem et malesuada. Ut ut condimentum lorem, id semper ante. Duis a purus sem.",
    img: {
      url:
        "https://images.pexels.com/photos/925786/pexels-photo-925786.jpeg",
      name: "Sara Gradial",
      date: "May. 14 2023",
    },
  },
  {
    id: 3,
    param:
      "Cras eu molestie augue. Etiam et mi ex. Praesent tempus sollicitudin lorem et malesuada. Ut ut condimentum lorem, id semper ante. Duis a purus sem.",
    img: {
      url:
        "https://images.pexels.com/photos/10375901/pexels-photo-10375901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Sara Gradial",
      date: "May. 14 2023",
    },
  },
];

const CardsTest = (props: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);

  useEffect(() => {
    setIsFirstSlide(currentIndex === 0);
    setIsLastSlide(currentIndex === ContTest.length - 1);
  }, [currentIndex]);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % ContTest.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + ContTest.length) % ContTest.length
    );
  };

  return (
    <section>
      <div className="flex justify-end items-center">

        <div className={` h-[40px] flex items-center rounded-md justify-center cursor-pointer mr-4 duration-500 ${ isFirstSlide ? "w-[40px] bg-[#B3B3B3] p-[1px] " : " w-[80px] bg-[#526FD6]"}`} onClick={goToPrevSlide}>
          {isFirstSlide ?  (  <BackArrow fill="#fafafa" className="opacity-60 "/>) : (  <FowardArrow fill="#fafafa" className=" rotate-180 "  width="54" height="24"/>)}
        </div>
        <div className={` h-[40px] bg-[#526FD6]  rounded-md flex items-center justify-center cursor-pointer py-2 duration-500 ${isLastSlide ?  " w-[40px] bg-[#B3B3B3] p-[1px]" : " w-[80px] bg-[#526FD6] " }`} onClick={goToNextSlide}>
          {
            isLastSlide ? ( <BackArrow fill="#fafafa" className="opacity-60 rotate-180 "/>) : (<FowardArrow width="54" height="24" className="text-white" fill="#fff"/>) 
          }

        </div>
          
      </div>

    <div className="flex justify-center items-center">

      <div className="w-full px-10 flex justify-center flex-col items-center">
        <section className="flex justify-around mt-12">
          {ContTest.map((card, index) => (
            <div
              key={card.id}
              className={`w-[368px] h-full rounded-[10px] shadow-lg bg-white py-3 px-4 mx-2 ${
                index === currentIndex ? "opacity-100 relative bottom-10 mb-10  " : "opacity-50 duration-300"
              }`}
            >
              <div className="flex">
                <BiSolidQuoteSingleLeft className={`w-16 h-16 relative right-4  ${ index === currentIndex ? "fill-Principal " : "fill-[#526FD6]"}`} />
                <BiSolidQuoteSingleLeft className={`w-16 h-16 relative right-12  ${ index === currentIndex ? "fill-Principal " : "fill-[#526FD6]" }`} />
                
              </div>
              <div className="h-fit my-3">
                <p className="text-lg text-[#4e4e4e]">{card.param}</p>
              </div>
              <div className="w-full h-fit flex mt-2">
                <span className={`w-12 h-12 rounded-full flex`}>
                  <img
                    src={card.img.url}
                    alt={card.img.name}
                    className="rounded-full shadow-xl"
                  />
                </span>
                <div className="ml-2">
                  <p className="text-lg font-bold">{card.img.name}</p>
                  <p className="text-[#4E4E4E]">{card.img.date}</p>
                </div>
                
              </div>
              <div className={`ml-2 mt-2 underline ${index === currentIndex ? "text-Principal" : "text-[#526FD6]"}`}>
                <Link href={"/"} className="font-bold"> Ver Winona Riders + Fonso en Club TRi</Link>
                </div>
              
            </div>
          ))}
        </section>

 
      </div>
 
    </div>
    </section>
  );
};

export default CardsTest;
