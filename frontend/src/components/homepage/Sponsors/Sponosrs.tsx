import Image from 'next/image'
import React from 'react'
import a from "@/assets/img/Marcas.jpg"

const Sponosrs = () => {
  return (
    <div className='flex justify-center items-center h-fit p-10 border-2'>
        <div className='flex justify-evenly items-start p-10'>
            <article className=' flex-1 py-10 px-2 w-3/4'>
                <h2 className='font-bold text-Principal text-2xl'>Nuestros Sponsors</h2>
                <p className='font-bold text-5xl w-2/3'>Quienes hacen esto posible</p>
            </article>
            <article className='p-5 flex-2 w-1/2 '>
                <Image src={a} height={500} width={1000} alt='a'/>


            </article>

        </div>
    </div>
  )
}

export default Sponosrs