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
import Start from './componant/start'
// import images from 'assets/imges.webp'
import weather from './assets/لقطة الشاشة 2026-02-26 171531.png'
import landing from './assets/لقطة الشاشة 2026-02-27 000723.png'
import ecommerce from './assets/لقطة الشاشة 2026-02-27 001650.png'
import car from './assets/لقطة الشاشة 2026-02-27 002313.png'
import { i } from 'motion/react-client'

function App() {
      const [Width, setWidth] = useState(window.innerWidth);
      const [isOpen, setIsOpen] = useState(false);
      window.addEventListener('resize', () => {
        setWidth(window.innerWidth);
      });
      console.log(Width);
      
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
      <h1 className={`${Width > 600 ? 'hidden' : 'block'} cursor-pointer fixed top-4 left-2 z-1000 text-white` } onClick={() => setIsOpen(!isOpen)}><i class="fa-solid fa-list"></i></h1>
      <Navbar Width={Width} isOpen={isOpen} />
      <Hero Width={Width} />
      <Start />
      <About  Width={Width}/>
      <Work projects={projects} Width={Width} />
      <Skills />
      <ContactForm Width={Width} />
      <Footar/>
    </>
  )
}

export default App
