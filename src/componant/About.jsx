import React, { useRef,useEffect, useState } from 'react'
import photo from '../assets/photo .webp'
import { motion,animate,stagger } from "motion/react"
import TextType from '../components/TextType'
const About = ({ Width }) => {
  const aboutData = [
    "Developer",
    "Creative Minds",
    "poroplem solver",
    'visioners',

  ]
  return (
  <div
    className={`${Width > 900 ? 'flex flex-row items-start ' : 'flex flex-col gap-3'}  min-h-screen  text-white `} id='about'>
      <div className={`${Width > 900 ? 'h-90 w-1/2' : 'h-1/4 items-center mx-auto w-3/4'}   rounded-2xl flex justify-center `}>
        <motion.img 
        initial={{transform:'scale(0.8)', opacity: 0}}
        whileInView={{transform:'scale(1)', opacity: 1}}
        transition={{duration: 0.5}}
        src={photo} alt="About Us" className={` rounded-r-2xl ${Width > 900 ? '  object-contain w-full  h-3/4' : 'w-full h-1/2 '} h-screen object-cover`} />
      </div>
       <div className={` ${Width > 900 ? 'w-1/2 items-start pt-10' : 'w-full items-center '} flex flex-col justify-center   px-12`}>
      <div className='mt-30 mb-10 flex h-10 items-center justify-center rounded-full border border-purple-600 px-5 text-center text-white'>
        About me
      </div>
        <TextType 
          text={aboutData}
          as='h2'
          className={`text-4xl font-bold mt-6 m-4  ${Width > 900 ? '' : 'h-20 mb-5 nowrap'} `}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor
          cursorCharacter="_"
          texts={["Welcome to React Bits! Good to see you!","Build some amazing experiences!"]}
          deletingSpeed={50}
          variableSpeedEnabled={false}
          variableSpeedMin={60}
          variableSpeedMax={120}
          cursorBlinkDuration={0.5}
        />
        <p className={` ${Width > 900 ? 'mt-4  ' : 'mt-2 mb-5'}  text-white text-md font-medium  text-balance`}> 
                        About Me

              I'm a Frontend Developer specialized in JavaScript and React.js, passionate about building modern, responsive, and interactive web applications.

              I focus on clean UI, performance, SEO, and smooth user experiences. I also have a background in PHP, Laravel, REST APIs, and MySQL, giving me a solid understanding of frontend-backend communication.

              I'm always learning and improving my skills to build better and more scalable web experiences.


        </p>
       </div>
    </div>
  )
}

export default About