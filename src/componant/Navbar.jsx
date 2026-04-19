import React from 'react'
import { useState } from 'react'
import { motion, useScroll } from "motion/react"
export const Navbar = ({ Width ,isOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const {scrollY} = useScroll();
  window.addEventListener('scroll', function() {
   if(scrollY.get() > 100){
    setIsScrolled(true);
   }else{
    setIsScrolled(false);
   }

    });
  return (
    <motion.div
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 ,delay: 1.5}}
    className={`${Width >600 ?`flex items-center justify-between p-5 px-20 fixed w-full z-11  ${isScrolled ? 'scrolled' : ''}`:`h-lvh w-1/2 px-4  flex flex-col justify-center items-start gap-5 bg-black text-white fixed left-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-all duration-300  z-11 `}`}>
        <div>
          <ul className={Width >600 ? 'flex items-center gap-5 text-white' : 'flex flex-col gap-5 text-white' }> 
            <li className='hover:text-blue-500 transition duration-300 ease-in hover:border-be-1 border-black-500 hover:semibold '><a href="#work">Work</a></li>
            {/* <li className='hover:text-blue-500 transition duration-300 ease-in hover:border-be-1 border-black-500 hover:semibold'><a href="#services">Services</a></li> */}
            <li className='hover:text-blue-500 transition duration-300 ease-in hover:border-be-1 border-black-500 hover:semibold'><a href="#skills">Skills</a></li>
            <li className='hover:text-blue-500 transition duration-300 ease-in hover:border-be-1 border-black-500 hover:semibold'><a href="#about">About</a></li>
          </ul>
        </div>
        <motion.h2 
        initial={{transform:'rotateZ(0deg)' }}
        whileHover={{ transform: 'rotateZ(-15deg)'}}
        transition={{ duration: 0.5 }}
        className='text-xl font-bold cursor-pointer text-white'>My Portfolio</motion.h2>
        <button className='px-4 py-2 border border-white-500 text-white rounded-3xl cursor-pointer hover:text-white hover:bg-blue-500 transition duration-300 ease-in  '><a href="#contact">Countact Us</a></button>
    </motion.div>
  )

}
