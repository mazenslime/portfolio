import React, { useRef,useEffect, useState } from 'react'
import photo from '../assets/photo.jpg'
import { data } from 'motion/react-client'
import { motion,animate,stagger } from "motion/react"
const About = ({ Width }) => {
  const aboutData = [
    "Developers",
    "Creative Minds",
    "poroplem solver",
    'visioners',

  ]
  const [data, setData] = useState("")
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setData(aboutData[index]);
      index = (index + 1) % aboutData.length;
    }, 2000);
    return () => clearInterval(interval);
  },[])
  return (
    <div className={`${Width > 900 ? 'flex flex-row' : 'flex flex-col gap-3'} min-h-screen bg-gray-900 text-white border-b-1 border-gray-600`} id='about'>
       <motion.img 

       initial={{transform:'scale(0.8)', opacity: 0}}
       whileInView={{transform:'scale(1)', opacity: 1}}
       transition={{duration: 0.5}}
       src={photo} alt="About Us" className={` ${Width > 900 ? 'w-1/2' : 'w-full'} h-screen object-cover`} />
       <div className={` ${Width > 900 ? 'w-1/2 items-start' : 'w-full items-center'} flex flex-col justify-center  px-12`}>
        <div className="px-4 py-2  bg-purple-500/10  rounded-4xl border-1 border-purple-600">
            <h3 className="text-purple-600 font-bold ">About Us</h3>
        </div>
        <motion.h2 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1}}
        className="text-6xl font-bold mt-4">{data}</motion.h2>
        <p className={` ${Width > 900 ? 'mt-4' : 'mt-2'} text-lg font-semibold text-olive-500`}>A web developer builds and maintains websites and web applications. They work with code, databases, servers, and user interfaces to create functional and interactive web systems.<span className='text-white'>Laudantium minima ipsa minus</span></p>
       </div>
    </div>
  )
}

export default About