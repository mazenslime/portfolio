import React, { useState } from 'react'
import { motion } from "motion/react"
import images from '../assets/imges.webp'
import weather from '../assets/لقطة الشاشة 2026-02-26 171531.png'
import landing from '../assets/لقطة الشاشة 2026-02-27 000723.png'
import ecommerce from '../assets/لقطة الشاشة 2026-02-27 001650.png'
import car from '../assets/لقطة الشاشة 2026-02-27 002313.png'
const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Weather App',
            description: 'built with Html ,css ,JavaScript and openweathermap API',
            image: weather,
            link: 'https://weather-app-i51k-ok45d0arp-mazenslimes-projects.vercel.app/',
        },
        {
            id: 2,
            title: 'Landing page',
            description: 'Bulit with react and tailwind css',
            image: landing,
            link: 'https://landing-page-123456789.netlify.app/',
        },
        {
            id: 3,
            title: 'E-commerce Website',
            description: 'built with Html ,css and JavaScript,',
            image: ecommerce,
            link: 'https://e-commerce-123456789.netlify.app/',
        },
        {
            id: 4,
            title: 'car rental website',
            description: 'built with Html ,css and JavaScript',
            image: car,
            link: 'https://car-rental-123456789.netlify.app/',
        },
    ]
    const [hoveredId, setHoveredId] = useState(null)
  return (
    <div className="overflow-x-auto h-100 w-7xl bg-gray-900 text-white flex flex-row flex-nowrap mt-5 justify-start gap-4 py-10 " id='pro'>
        <div className="w-2xl h-48 bg-gray-800 opacity-0"></div>
        {projects.map((project) => (
        <a href={project.link}>
        <motion.div
          initial={{opacity:0,x:-500}}
          whileInView={{opacity:1,x:0}}
          transition={{duration: 1}}
          key={project.id}
          onMouseEnter={() => setHoveredId(project.id)}
          onMouseLeave={() => setHoveredId(null)}
          className="w-lg h-80  relative flex-shrink-0 rounded-lg overflow-hidden cursor-pointer"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-lg h-100 object-cover rounded-lg "
          />
          <div className={`bg-gray-500/70  absolute top-0 left-0 w-xl h-80 z-9 ${hoveredId === project.id ? "opacity-100" : "opacity-0"} transition-opacity duration-300 ease-linear`}></div>
          <h3
            className={`text-2xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 transition duration-300
            ${hoveredId === project.id ? "visible opacity-100" : "invisible opacity-0"}`}
          >
            {project.title}
          </h3>

          <p
            className={`text-lg absolute bottom-20   left-1/2 transform -translate-x-1/2 text-center  w-100  z-10 transition 
            ${hoveredId === project.id ? "visible opacity-100" : "invisible opacity-0"}`}
          >
            {project.description}
          </p>
        </motion.div>
        </a>
      ))}
    </div>
  )
}

export default Projects