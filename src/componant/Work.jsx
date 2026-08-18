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
    <div id='work'
    className='relative min-h-screen   text-white flex flex-col justify-start items-center'>
        <div className='text-center px-4 py-2  mt-30 h-10 py-2  bg-purple-500/10 rounded-4xl border-1 border-purple-600'>
            My Work
        </div>
        <div className='mb-30'>
            <p className={` ${Width > 900 ? 'mt-4 ' : 'mt-2 text-center'} text-5xl font-bold text-white-500`}>Dig into our universe</p>
        </div>
        <Projects projects={projects} />
    </div>
  )
}

export default Work