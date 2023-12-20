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
        "¡Una experiencia asombrosa! Desde el primer momento hasta el último, todo fue increíble. La atención al detalle y la calidad del servicio fueron excepcionales. Sin duda, una experiencia que recordaré para siempre.",
      img: {
        url:
          "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Octavius Aurelius",
        date: "May. 14, 2023",
      },
    },
    {
      id: 2,
      param:
        "¡Increíble evento! Nunca imaginé que podría vivir algo tan emocionante. Desde la organización hasta las actuaciones, todo fue simplemente espectacular. Definitivamente, un momento que marcará mi vida.",
      img: {
        url:
          "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Livia Valerius",
        date: "June 5, 2023",
      },
    },
    {
      id: 3,
      param:
        "¡Una noche inolvidable! La energía en este evento fue contagiosa. Las actuaciones fueron impresionantes y la atmósfera era mágica. Gracias a todos los involucrados por crear una experiencia tan única.",
      img: {
        url:
          "https://images.pexels.com/photos/3556538/pexels-photo-3556538.jpeg",
        name: "Aurelia Vipsania",
        date: "July 20, 2023",
      },
    },
    {
      id: 4,
      param:
        "¡Evento sorprendente! La organización fue impecable, las actuaciones fueron impactantes y la energía fue contagiosa. Gracias a todos los involucrados por crear momentos que atesoraré siempre.",
      img: {
        url:
          "https://images.pexels.com/photos/4484131/pexels-photo-4484131.jpeg",
        name: "Marcus Antonius",
        date: "August 12, 2023",
      },
    },
    {
      id: 5,
      param:
        "¡Experiencia única! Desde la primera actuación hasta la última, cada momento fue memorable. La diversidad de talentos y la atmósfera amigable hicieron de este evento algo extraordinario.",
      img: {
        url:
          "https://images.pexels.com/photos/5862455/pexels-photo-5862455.jpeg",
        name: "Valeria Maxima",
        date: "September 8, 2023",
      },
    },

  ];
  
  const CardsTestOrg = (props: Props) => {
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
     <section className="relative flex flex-col">
       <div className="flex justify-between items-center">
         <h2 className="text-[#0A0A0A] font-bold text-4xl">Últimas reseñas</h2>
         <div className="flex">
           <div
             className={`h-[40px] flex items-center rounded-md justify-center cursor-pointer mr-4 duration-500 ${
               isFirstSlide
                 ? "w-[40px] bg-[#FAFAFA] p-[1px]"
                 : "w-[80px] text-[#B3B3B3] bg-[#FAFAFA]"
             }`}
             onClick={goToPrevSlide}
           >
             {isFirstSlide ? (
               <BackArrow fill="#B3B3B3" className="text-[#B3B3B3] opacity-80" />
             ) : (
               <FowardArrow
                 fill="#B3B3B3"
                 className="text-[#B3B3B3] rotate-180"
                 width="54"
                 height="24"
               />
             )}
           </div>
           <div
             className={`h-[40px] bg-[#526FD6] rounded-md flex items-center justify-center cursor-pointer py-2 duration-500 ${
               isLastSlide
                 ? "w-[40px] bg-[#FAFAFA] p-[1px]"
                 : "w-[80px] bg-[#FAFAFA]"
             }`}
             onClick={goToNextSlide}
           >
             {isLastSlide ? (
               <BackArrow
                 fill="#B3B3B3"
                 className="text-[#B3B3B3] opacity-60 rotate-180"
               />
             ) : (
               <FowardArrow
                 width="54"
                 height="24"
                 className="text-[#B3B3B3]"
                 fill="#B3B3B3"
               />
             )}
           </div>
         </div>
       </div>
 
       <div className="flex justify-start items-start overflow-hidden space-x-4">
         {ContTest.map((card, index) => (
           <div
             key={card.id}
             className={`w-full h-full rounded-[10px] shadow-2xl mt-10 bg-white py-3 mr-3 px-4 border-2 border-Principal transform transition-transform ease-in-out duration-500 ${
               index === currentIndex ? "  border-Principal" : "  border-[#526FD6] "
             }`}
           >
             <div className="flex">
               <BiSolidQuoteSingleLeft className={`w-16 h-16 relative right-4 fill-Principal ${index === currentIndex ? "fill-Principal" : "fill-[#526FD6]"}`} />
               <BiSolidQuoteSingleLeft className={`w-16 h-16 relative right-12 fill-Principal ${index === currentIndex ? "fill-Principal" : "fill-[#526FD6]"}`} />
             </div>
             <div className="h-fit my-3">
               <p className="text-lg text-[#4e4e4e]">{card.param}</p>
             </div>
             <div className="w-full h-fit flex mt-2">
               <span className="w-12 h-12 rounded-full flex justify-center">
                 <img
                   src={card.img.url}
                   alt={`${card.img.name} testimonial`}
                   className="rounded-full shadow-xl"
                 />
               </span>
               <div className="ml-2">
                 <p className="text-lg font-bold">{card.img.name}</p>
                 <p className="text-[#4E4E4E]">{card.img.date}</p>
               </div>
             </div>
             <div className="ml-2 mt-auto underline text-Principal">
               <Link href={"/"} passHref className="font-bold">
                 Ver Winona Riders + Fonso en Club TRi
               </Link>
             </div>
           </div>
         ))}
       </div>
     </section>
   );
 };
 
 export default CardsTestOrg;