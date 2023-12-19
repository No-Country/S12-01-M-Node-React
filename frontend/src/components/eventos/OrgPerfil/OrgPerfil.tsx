import React from 'react'
import { FaFacebook, FaTwitter } from 'react-icons/fa'
import { EventosList } from '../EventosList'
import { eventosArray } from '@/helpers/eventosArray'
import { EventoCard } from '../EventoCard'
import CardsTestOrg from './OrgUltimReseñas'

type Props = {}

const OrgPerfil = (props: Props) => {
  return (
    <div className='flex justify-center items-center w-full h-full flex-col'>
    <div className='w-5/6'>

        <section className='bg-white shadow-lg rounded-[10px]  my-5 shadow-[#BE316C] flex w-full py-10 px-8 justify-around items-center '>
            <section className='flex justify-evenly w-1/2 mr-10 h-full '>
<article className='w-fit h-full flex justify-start items-center'>
<div className='w-fit h-full flex justify-center   '>
    <span className='bg-[url("https://res.cloudinary.com/dhb9rdaoc/image/upload/v1702569088/ftkud4locsktf1pjaubm.png")] h-32 w-32 bg-center bg-cover'/>
</div>
<div className='flex flex-col ml-4'>
<p className='text-[#0A0A0A] text-2xl font-bold'>Draw Brighton</p>
<p className='text-[#4E4E4E] text-base'>12356 seguidores</p>

</div>
</article>
<article className='flex flex-col justify-end mb-3'>
<p className='text-[#0A0A0A] text-base'>drawbrighton.com.ar</p>
<div className='flex justify-end mt-2'>
    <FaFacebook className="text-[#526FD6] mx-2 text-xl"/>
    <FaTwitter  className="text-[#526FD6] text-xl"/>
</div>
</article>

            </section>
<button className='bg-Principal w-40 py-2 text-white rounded-lg'> 

<span className='font-medium text-xl'>Seguir</span>
<span className='font-medium text-xl'> + </span>
</button>
        </section>
        
    <section className='w-full flex flex-col items-center justify-center  '>
    <div className=' flex  w-full items-center  '>
        <p className='mx-4 border-b-2 border-Principal text-Principal  py-2 cursor-pointer'>Próximos eventos</p>
        <p className='mx-4 border-b-2  border-transparent py-2'>Eventos pasados</p>

    </div>
 <div className=' my-4 flex justify-around shrink w-full  items-center '>
 {eventosArray.slice(0,3).map((evento) => (
     <EventoCard
            key={evento.id}
            evento={evento}
            
            />
            ))}
 </div>
 <div className='my-20 w-full rela'>
  
         <CardsTestOrg/>
 </div>
    </section>
            </div>
    </div>
  )
}

export default OrgPerfil