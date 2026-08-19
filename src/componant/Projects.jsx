import React, { useState } from 'react'
import { motion } from "motion/react"
import AccordionGallery from '../components/AccordionGallery'
const Projects = ({projects}) => {
  return (
    <div className='w-3/4 mx-auto my-4'>
            <AccordionGallery
          items={projects}
          defaultIndex={2}
          expandRatio={0.52}
          trigger="hover"
          accentColor="#ffffff"
          overlayColor="#060010"
          textColor="#ffffff"
          grayscale
          showLabels
          duration={0.6}
          ease="power3.out"
          parallax={0.5}
          tilt={8}
          stagger={0.06}
          height={460}
          gap={10}
          radius={16}
          orientation="horizontal"
        />

    </div>
  )
}

export default Projects