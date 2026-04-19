import React from 'react'
import OPI from '../assets/OIP.webp'
import { motion } from "motion/react"

const Hero = ({ Width }) => {
  return (
    <div className="" id='home'>
        <img 
            src={OPI}
            alt="Tailwind Styled Image"
            width="100%"
            style={{height:'100vh'}}
            className="rounded-lg shadow-lg position-relative object-cover"
        />
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center cursor-pointer ${Width > 900 ? 'w-150' : 'w-full'}`}>
            <motion.h1      
            initial={{opacity:0}}
            animate={{opacity:1}}
            // whileHover={{ border: '2px solid white' }}
            transition={{ duration: 1 ,delay: 1.5}}
            className= {` ${Width > 900 ? 'text-7xl' : 'text-5xl'} font-bold text-white mb-6 p-4`}>Web Devolopment</motion.h1>
            <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            // whileHover={{ border: '2px solid white' }}
            transition={{ duration: 1,delay:1.6}}
             className={ ` ${Width > 900 ? 'text-7xl' : 'text-5xl'} font-bold text-white p-4`}>and Desine stiduio </motion.p>
            <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            // whileHover={{ border: '2px solid white' }}
            transition={{ duration: 1,delay:1.7 }}
            className={ ` ${Width > 900 ? 'text-7xl' : 'text-5xl'} font-bold text-white p-4`}>From the future</motion.p>
        </div>
    </div>
  )
}

export default Hero