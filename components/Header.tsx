import React from 'react'
import { ImStack } from "react-icons/im";

export default function Header() {
  return (
    <div className=' font-body w-full text-white bg-neutral-700 flex justify-center p-4'>
      <h1 className='text-3xl sm:text-2xl mr-2'> MY TODOS</h1>
      <ImStack className="text-3xl sm:text-2xl" />
    </div>
  )
}
