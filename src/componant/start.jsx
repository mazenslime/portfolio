import React from 'react'
import { motion } from "motion/react"
const Start = () => {
  return (
    <motion.div 
    initial={{width:'100%', height:'100vh',visibility:'visable'}}
    animate={{width:'100%', height:'0%',visibility:'hidden'}}
    transition={{duration: 0.5 ,delay:0.5}}
    className='absolute top-0 left-0 w-full h-full z-1000 bg-blue-500 text-white '>
        <motion.h1 
        initial={{opacity: 1, visibility:'visable'}}
        animate={{opacity: 0,visibility:'hidden'}}
        transition={{duration: 0.5, delay: 0.5}}
        className='text-4xl font-bold text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Welcome to My Portfolio</motion.h1>
    </motion.div>
  )
}

export default Start