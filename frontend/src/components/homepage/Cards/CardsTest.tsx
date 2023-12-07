// CardsTest.js
'use client'
import React, { useState } from "react";
import { BiSolidQuoteSingleLeft } from "react-icons/bi";
import {
    IoIosArrowDropleftCircle,
    IoIosArrowDroprightCircle
} from "react-icons/io";

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

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % ContTest.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + ContTest.length) % ContTest.length
    );
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-10 h-10" onClick={goToPrevSlide}>
        <IoIosArrowDropleftCircle className="text-black fill-[#526FD6] text-5xl cursor-pointer hover:fill-[#5287d6] duration-200 " />
      </div>
      <div className="w-full px-10 flex justify-center flex-col items-center">
        <section className="flex justify-around mt-12">
          {ContTest.map((card, index) => (
            <div
              key={card.id}
              className={`w-[368px] h-[285px] rounded-[10px] shadow-lg bg-white py-3 px-4 mx-2 ${
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
            </div>
          ))}
        </section>

        <div className=" flex justify-evenly items-center ">
        {ContTest.map((_, index) => (
            <span
              key={index}
              className={`w-4 h-4 shadow-lg duration-300 cursor-pointer ${
                index === currentIndex ? "bg-Principal w-4 h-4 " : "w-9 h-4 bg-white"
              } mx-2 rounded-full`}
            ></span>
          ))}
          
        </div>
      </div>
      <div className="w-10 h-10" onClick={goToNextSlide}>
        <IoIosArrowDroprightCircle className="text-black fill-[#526FD6] text-5xl cursor-pointer hover:fill-[#5287d6] duration-200 " />
      </div>
    </div>
  );
};

export default CardsTest;
