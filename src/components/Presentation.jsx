import React from 'react'
import img from "../images/fotoperfil.jpg"
const Presentation = () => {
  return (
    <div className='flex flex-col items-center justify-center py-8 px-12 bg-gradient-to-b from-gray-800 to-blue-500 text-lime-100 w-full h-auto '>
        <h1 className='pb-8 pr-4 font-semibold text-2xl'>Santiago Díaz</h1>
        <img 
        className='opacity-15 rounded-full mb-8 h-36 w-36' 
        src={img} />
      <h2 className='pl-4 text-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis odit, aperiam distinctio harum amet tempore explicabo necessitatibus labore repellendus molestias consequuntur animi</h2>
  </div>
  )
}

export default Presentation