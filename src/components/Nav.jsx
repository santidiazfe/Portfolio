import React from 'react'

const Nav = () => {
  return (
    <nav className='w-screen flex items-center justify-around h-16 text-lime-100  bg-gray-800  '>
            <button className='hover:text-white hover:text-l font-semibold hover:font-bold'>Projects</button>
            <button className='hover:text-white hover:text-l font-semibold hover:font-bold'>Technologies</button>
            <button className='hover:text-white hover:text-l font-semibold hover:font-bold'>About me</button>
            <i class="fa-brands fa-github hover:text-white"></i>
            <i class="fa-brands fa-linkedin hover:text-white"></i>
    </nav>
  )
}

export default Nav