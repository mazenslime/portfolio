import React from 'react'
import OPI from '../assets/OIP.webp'
import { motion } from "motion/react"

const Hero = ({ Width }) => {
  return (
    <div className="" id='home'>
        <img 
            src={OPI}
            alt="Tailwind Styled Image"
            className="w-1 h-1vh rounded-lg shadow-lg position-relative object-cover"
        />
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center cursor-pointer ${Width > 900 ? 'w-150' : 'w-full'}`}>
            <h1 className= {` ${Width > 900 ? 'text-7xl' : 'text-5xl'} font-bold text-white mb-6 p-4`}>Web Devolopment</h1>
            <p
             className={ ` ${Width > 900 ? 'text-7xl' : 'text-5xl'} font-bold text-white p-4`}>and Desine stiduio </p>
            <p 
            className={ ` ${Width > 900 ? 'text-7xl' : 'text-5xl'} font-bold text-white p-4`}>From the future</p>
        </div>
    </div>
  )
}

export default Hero