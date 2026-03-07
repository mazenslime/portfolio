import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Navbar } from './componant/Navbar'
import Hero from './componant/hero'
import About from './componant/About'
import Work from './componant/Work'
import Skills from './componant/Skills'
import ContactForm from './componant/contactus'
import Footar from './componant/Footar'
// import images from 'assets/imges.webp'
import weather from './assets/لقطة الشاشة 2026-02-26 171531.png'
import landing from './assets/لقطة الشاشة 2026-02-27 000723.png'
import ecommerce from './assets/لقطة الشاشة 2026-02-27 001650.png'
import car from './assets/لقطة الشاشة 2026-02-27 002313.png'

function App() {
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
        }
    ]
  
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Work projects={projects} />
      <Skills />
      <ContactForm />
      <Footar/>
    </>
  )
}

export default App
