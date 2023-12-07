import React from 'react'
import { FaFacebookF , FaRegEnvelope, FaTwitter, FaYoutube } from 'react-icons/fa'
import { AiOutlineYoutube  } from 'react-icons/ai'
import Link from 'next/link'
import { roboto } from '@/assets/font'

type Props = {}

const FooterComp = (props: Props) => {
  return (
    <footer className='bg-Principal h-full  text-white py-4 z-10' >
        <div className='flex  justify-evenly  items-center'>
        <section className='  w-1/5  flex items-start flex-col justify-center  ml-2  '> 
                <h2 className='text-6xl w-full font-bold my-2  '>Eventry</h2>
                <p className='text-lg  my-2   '>Todos los eventos en un solo lugar, aprovecha cada día y descubri nuevas experiencias.</p>
                <div className='flex justify-around items-center w-1/3  my-2 '>
                    <FaFacebookF  className="bg-white w-7 h-7 p-[6px] rounded-full text-Principal"/>
                    <AiOutlineYoutube className="bg-white w-7 h-7 p-[6px] rounded-full text-Principal" />
                    <FaTwitter className="bg-white w-7 h-7 p-[6px] rounded-full text-Principal"/>
                </div>
            </section>
            <section className='  flex  justify-center items-start   mx-10 flex-row-reverse flex-1'>
                <div className=' w-full ml-4 '>

            <span className='font-medium text-lg uppercase  '>De interés</span>
            <div className='w-fit flex flex-col justify-center items-start'>
                <nav>
                    <ul>
                        <li className='cursor-pointer  py-2 '><Link className='  hover:border-b-2 hover:border-b-white' href={"/"}>Términos y Condiciones</Link></li>
                        <li className='cursor-pointer  py-2 '><Link className='  hover:border-b-2 hover:border-b-white' href={"/"}>Políticas de Privacidad</Link></li>
                   
                    </ul>
                </nav>
            </div> 
                </div>

            <div className=' w-full ml-4 '>

            <span className='font-medium text-lg uppercase'>Menu</span>

            <div className='w-fit flex flex-col justify-center items-start'>
                <nav>
                    <ul>
                    <li className='cursor-pointer  py-2 '><Link className='  hover:border-b-2 hover:border-b-white' href={"/"}>Inicio</Link></li>
                        <li className='cursor-pointer  py-2 '><Link className='  hover:border-b-2 hover:border-b-white' href={"/"}>Eventos</Link></li>
                        <li className='cursor-pointer  py-2 '><Link className='  hover:border-b-2 hover:border-b-white' href={"/"}>Ayuda</Link></li>
                   
                    </ul>
                </nav>
            </div>
            </div>
              
        

            </section>
           
            <section className=' ml-12 w-fit h-full relative top-10   '> 
                <div className='bg-[#526FD6] w-full h-fit flex justify-center items-left py-5 px-5 rounded-tl-lg rounded-bl-lg flex-col'>
               <h2 className='uppercase font-medium text-lg'>suscribite a nuestro newsletter</h2>
               <p className='text-lg'>Enterate primero de todos los eventos.</p>
               <div className='my-2 flex flex-col ' >
                    <label className={`text-[${roboto}]`}>Correo electronico</label>
                    <form action="" >
                    <div className="flex items-center h-10 rounded-lg  w-full px-5 py-6  bg-white ">
          <FaRegEnvelope className="text-base w-5 h-5 opacity-20 fill-[#000000]" />
          <input
            type="email"
        
            placeholder="Tu correo electrónico"
            className="ring-transparent ring-0 w-full focus:ring-0 focus:ring-transparent text-[#4e4e4e] outline-none pl-2 appearance-none bg-transparent  "
            autoComplete='off'
            name="user"
          />
        </div>
        <button type='submit' className={`font-medium text-[${roboto}] text-lg text-white bg-Principal hover:bg-[#bb4f7c] duration-300 py-2 my-2 w-full rounded-lg  `} > Suscribirme</button>
                    </form>
    
               </div>
                </div>
            </section>
        </div>
        <div className=' '>
            <div className='border-t-[1px]  w-1/6 ml-2'></div>
            <p className=' ml-2 font-medium  py-2'>
            ©Copyright-2024. Todos los derechos reservados. Eventry.com

            </p>
        </div>
    </footer >
  )
}

export default FooterComp