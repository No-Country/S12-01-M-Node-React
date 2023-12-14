'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

type Props = {}

const LinkNavProv = (props: Props) => {
    const pathname = usePathname()
  return (
    <nav className="mt-10 w-full flex justify-center items-center">
            <ul className="h-fit w-2/3 flex flex-col justify-center items-center">
                <li className={`border-b-[#B3B3B3] border-b-[1px] w-full p-3 ${pathname === '/ayuda#QaQuestions' ? 'text-Principal' : 'text-[#4E4E4E] bg-black'}`}>
                    <Link href="/ayuda#QaQuestions" className={`w-full cursor-pointer ${pathname === '/ayuda#QaQuestions' ? 'text-Principal' : 'text-[#4E4E4E] border-2'} `}>Preguntas frecuentes</Link>
                </li>
                <li className={`border-b-[#B3B3B3] border-b-[1px] w-full p-3 ${pathname === '/ayuda#AboutEventry' ? 'text-Principal' : 'text-[#4E4E4E]'}`}>
                    <Link href="/ayuda#AboutEventry" className="w-full cursor-pointer">Sobre Eventry</Link>
                </li>
                <li className={`border-b-[#B3B3B3] border-b-[1px] w-full p-3 ${pathname === '/ayuda#terms' ? 'text-Principal' : 'text-[#4E4E4E]'}`}>
                    <Link href="/ayuda#terms" className="w-full cursor-pointer">Términos y condiciones</Link>
                </li>
                <li className={`border-b-[#B3B3B3] border-b-[1px] w-full p-3 ${pathname === '/ayuda#privacy' ? 'text-Principal' : 'text-[#4E4E4E]'}`}>
                    <Link href="/ayuda#privacy" className="w-full cursor-pointer">Políticas de privacidad</Link>
                </li>
                <li className={`border-b-transparent border-b-[1px] w-full p-3 ${pathname === '/ayuda#soporte' ? 'text-Principal' : 'text-[#4E4E4E]'}`}>
                    <Link href="/ayuda#soporte" className="w-full cursor-pointer">Soporte</Link>
                </li>
            </ul>
        </nav>
  )
}

export default LinkNavProv