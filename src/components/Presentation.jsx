import React from 'react'
import img from "../images/fotoperfil.jpg"
const Presentation = () => {
  return (
    <div className='flex flex-col items-center justify-center py-8 px-12 bg-[#181818] text-[#DADFE1] w-full h-auto '>
        <h1 className='pb-8 pr-4 font-bold font-mono text-2xl ml-2'>Hello World!</h1>
        <img 
        className='opacity-15 rounded-full mb-4 h-36 w-36 shadow-lime-300/50 shadow-2xl' 
        src={img} />
      <h2 className='pl-4 ml-2 text-bold text-xl font-thin '>I'm <h2 className='font-bold text-lime-100'>Santiago Díaz</h2>a Full Stack Web Developer Junior with knowledge in JavaScript languge and all the enviroment of JS technologies like React and Node.JS. I also used SQL in a few of my projects.</h2>
      
  </div>
  )
}

export default Presentation