import { useRef, useState } from 'react'
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
import SplashCursor from './components/SplashCursor'
function App() {
      const [Width, setWidth] = useState(window.innerWidth);
      const [isOpen, setIsOpen] = useState(false);
      window.addEventListener('resize', () => {
        setWidth(window.innerWidth);
      });      
      const projects = [
        {
            image: weather,
            label: 'Weather App',
            link: 'https://weather-app-i51k-ok45d0arp-mazenslimes-projects.vercel.app/',
            description: 'built with Html ,css ,JavaScript and openweathermap API',
        },
        {
            image: landing,
            label: 'Landing page',
            link: 'https://landing-page-123456789.netlify.app/',
            description: 'Bulit with react and tailwind css',
        },
        {
            image: ecommerce,
            label: 'E-commerce Website',
            link: 'https://ecommerce-react-rose-three.vercel.app/',
            description: 'built with Html ,css and JavaScript,',
          },
    ]

    const Contactus=useRef(null)
    const Aboutme=useRef(null)
    const Workme=useRef(null)
    const Skill=useRef(null)

  
  return (
    <>

        <SplashCursor
          DENSITY_DISSIPATION={3.5}
          VELOCITY_DISSIPATION={2}
          PRESSURE={0.1}
          CURL={3}
          SPLAT_RADIUS={0.2}
          SPLAT_FORCE={6000}
          COLOR_UPDATE_SPEED={10}
          SHADING
          RAINBOW_MODE={false}
          COLOR="#A855F7"
        />
      <h1 className={`${Width > 600 ? 'hidden' : 'block'} cursor-pointer fixed top-4 left-2 z-[2001] text-white` } onClick={() => setIsOpen(!isOpen)}><i className="fa-solid fa-list"></i></h1>
      <Navbar Width={Width} isOpen={isOpen} Workme={Workme} Skill={Skill} Aboutme={Aboutme} Contactus={Contactus}  />
      <Start />
      <div
          style={{
            background: 'radial-gradient(circle at 50% 28%, rgba(162, 94, 255, 0.85), rgba(41, 22, 86, 0.96) 42%, rgba(4, 2, 12, 1) 100%)',
          }}
      >
          <Hero Width={Width} />
      </div>
      <div
      style={{
        background: 'radial-gradient(circle at 50% 28%, rgba(41, 22, 86, 0.96) 42%, rgba(4, 2, 12, 1) 100%)',
      }}
      >
      <About  Width={Width} ref={Aboutme}/>
      <Work projects={projects} Width={Width} ref={Workme} />
      <Skills ref={Skill}/>
      <ContactForm Width={Width} ref={Contactus} />
      <Footar width={Width}/>
      </div>
    </>
  )
}

export default App
