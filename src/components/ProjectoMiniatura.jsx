import React from 'react'


const ProjectoMiniatura = (page, technologies) => {
  console.log(page)
  return (
    <div className='h-auto w-2/3 my-8 flex flex-col p-4 items-center justify-center border-2 border-lime-100 bg-[#181818] text-[#DADFE1] rounded-tl-3xl rounded-br-3xl shadow-lime-300/50 shadow-xl'>
       <a 
       href={page.url}
       target='_blank'>
          <img 
          src={page.image} 
          className=' h-18 w-full  mb-2 rounded-md'
          />
        </a>
         
        <h1 className='py-2 text-xl font-semibold text-lime-100'>{page.name}</h1>
        <p className='font-mono'>{page.description}</p>
        
    </div>
  )
}

export default ProjectoMiniatura