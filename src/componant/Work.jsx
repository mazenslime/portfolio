import React from 'react'
import Projects from './Projects'
import weather from '../assets/لقطة الشاشة 2026-02-26 171531.webp'
import landing from '../assets/لقطة الشاشة 2026-02-27 000723 .webp'
import ecommerce from '../assets/لقطة الشاشة 2026-02-27 001650.webp'
const Work = ({Width}) => {
        const projects = [
        {
            image: weather,
            label: 'Weather App',
            link: 'https://weather-app-i51k-ok45d0arp-mazenslimes-projects.vercel.app/',
            description: 'built with Html ,css ,JavaScript and openweathermap API',
        },
        {
            image: landing,
            label: 'Landing page',
            link: 'https://landing-page-123456789.netlify.app/',
            description: 'Bulit with react and tailwind css',
        },
        {
            image: ecommerce,
            label: 'E-commerce Website',
            link: 'https://ecommerce-react-rose-three.vercel.app/',
            description: 'built with Html ,css and JavaScript,',
          },
    ]
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