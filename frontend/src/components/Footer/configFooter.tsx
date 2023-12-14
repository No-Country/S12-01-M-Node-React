'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import FooterComp from './footer'

type Props = {}

const Footer = (props: Props) => {
    const pathname = usePathname()
  return (

    
    <>
  {pathname === "/login" || pathname === "/register"  ?  ("") : ( <FooterComp/> )}
    </>
  )
}

export default Footer