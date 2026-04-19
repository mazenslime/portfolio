import React from 'react'
import Projects from './Projects'

const Work = ({projects, Width}) => {
    let number = projects.length;    
    const rclick = () => {
        const container = document.getElementById('pro');
        container.scrollBy({ left: -300, behavior: 'smooth' });
      }
      const lclick = () => {
        const container = document.getElementById('pro');
        container.scrollBy({ left: 300, behavior: 'smooth' });
      }
  return (
    <div id='work' className='relative min-h-screen bg-gray-900 text-white flex flex-col justify-start items-center'>
        <div className='text-center px-4 py-2  mt-30 h-10 py-2  bg-purple-500/10 rounded-4xl border-1 border-purple-600'>
            My Work
        </div>
        <div>
            <p className={` ${Width > 900 ? 'mt-4 ' : 'mt-2 text-center'} text-5xl font-bold text-white-500`}>Dig into our universe</p>
        </div>
        <div className='flex flex-row justify-end w-full gap-4 mr-25 mt-20 '>
              <button className='cursor-pointer' onClick={rclick} ><i class="fa-solid fa-angle-left"></i></button>
              <h2>{number}</h2>
              <button className='cursor-pointer' onClick={lclick} ><i class="fa-solid fa-angle-right"></i></button>
        </div>
        <Projects projects={projects} />
    </div>
  )
}

export default Work