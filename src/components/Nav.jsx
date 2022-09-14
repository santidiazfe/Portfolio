import React from 'react'

const Nav = () => {
  return (
    <nav className='w-screen px-2 flex items-center justify-around h-16 font-mono text-sm text-[#DADFE1] bg-[#181818] '>
            <button className='hover:text-white hover:text-md font-semibold hover:font-bold'>Projects</button>
            <button className='hover:text-white hover:text-md font-semibold hover:font-bold'>Technologies</button>
            <button className='hover:text-white hover:text-md font-semibold hover:font-bold'>About</button>
            <i class="fa-brands fa-github hover:text-white"></i>
            <i class="fa-brands fa-linkedin hover:text-white"></i>
    </nav>
  )
}

export default Nav