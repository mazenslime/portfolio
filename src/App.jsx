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

function App() {
  
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Skills />
      <ContactForm />
      <Footar/>
    </>
  )
}

export default App
