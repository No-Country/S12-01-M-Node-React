import React from 'react'
import CardsTest from '../Cards/CardsTest'

type Props = {}

const Testimonios = (props: Props) => {
  return (
    <div className='bg-[#B9D8FF] py-8 px-2 h-full '>

    <section className=' flex justify-center items-center  flex-col ' >
        <div className='py-2 text-center flex flex-col justify-center items-center'>
        <h2 className='uppercase font-bold text-2xl text-Principal'>testimonios</h2>
        <h3 className='font-bold text-4xl  w-1/2 my-2'>El mejor publico lo tenemos nosotros</h3>


        </div>
        
        <CardsTest/>
    </section>

    </div>
  )
}

export default Testimonios