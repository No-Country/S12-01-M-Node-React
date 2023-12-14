import Link from 'next/link'
import React from 'react'

type Props = {}

const LinkMenu = (props: Props) => {
  return (
  <>
       <Link
          href={"/login"}
          className="text-lg font-semibold text-white">
          Iniciar Sesión
        </Link>
        <p className="font-thin text-white">|</p>
        <Link
          href={"/register"}
          className="text-lg font-semibold text-white">
          Registrase
        </Link>
  </>
  )
}

export default LinkMenu