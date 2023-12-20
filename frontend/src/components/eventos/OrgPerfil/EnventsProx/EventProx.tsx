import { revalidatePath } from 'next/cache';
import React from 'react'
import { CardCambi } from '../cardcambiarcontainer';

type Props = {}
// api.ts
async function getData() {
    const res = await fetch(
      "https://s12-01-m-node-react.onrender.com/api/v1/events/"
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    revalidatePath("/", "layout");
  
    return res.json();
  }



const EventProx = async (props: Props) => {
  const events = await getData();

  return (
   <>
    <div className=' flex  w-full items-center  '>
        <p className='mx-4 border-b-2 border-Principal text-Principal  py-2 cursor-pointer'>Próximos eventos</p>
        <p className='mx-4 border-b-2  border-transparent py-2 opacity-40 pointer-events-none' title='No presenta Eventos Pasados'>Eventos pasados</p>

    </div>
 <CardCambi eventos={events} min={0} max={3} currentIndex={2} />
   </>
  )
}

export default EventProx