import React from 'react'
import ProjectoMiniatura from './ProjectoMiniatura'


const Projects = () => {
  const pages = [
    {
        "name": "Pokedex",
        "image":"https://thumbs2.imgbox.com/9d/8e/a5IRqM3h_t.png",
        "url":"https://visionary-bubblegum-5fdce5.netlify.app/",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi laborum repellendus ducimus eos atque",
        "technologies": ["CSS", "HTML","React"]
    
    },
    {
        "name": "Nexos",
        "image":"https://thumbs2.imgbox.com/43/0d/mSwkuw3q_t.png",
        "url":"https://startling-kitsune-c8d472.netlify.app/",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi laborum repellendus ducimus eos atque",
        "technologies": ["CSS", "HTML","JavaScript"]
    },
    {   
        "name": "Nexos",
        "image":"https://thumbs2.imgbox.com/43/0d/mSwkuw3q_t.png",
        "url":"https://startling-kitsune-c8d472.netlify.app/",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi laborum repellendus ducimus eos atque",
        "technologies": ["CSS", "HTML","JavaScript"]
    }
  ]
  return (
    <div className='h-auto w-auto  text-[#DADFE1] bg-[#181818] flex flex-col items-center justify-center'>
      <h1 className='py-4 font-bold text-2xl font-mono'>• Projects •</h1>
      <br />
        { pages.map((page) =>
         < ProjectoMiniatura
          name={page.name}
          image={page.image}
          url={page.url}
          description={page.description} 
          technologies={page.technologies}
          />)}
    </div>
  )
}

export default Projects