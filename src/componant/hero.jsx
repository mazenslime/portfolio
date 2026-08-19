import React from 'react'
import { motion } from 'motion/react'
import GradientWaves from '../components/GradientWaves'
import TextType from '../components/TextType'
const Hero = ({ Width }) => {
  const text=[
    'HI Welcom to my prtfolio',
    'Iam Mazen slime ',
    'Iam Front end devoloper '
  ]
  return (
    <div
      className="relative h-screen w-full overflow-hidden "
    >
      <div className="absolute inset-0 z-0">
        <GradientWaves
          horizonColor="#3B1F7A"
          waveColor="#AB7BFF"
          crestColor="#F5E9FF"
          speed={0.35}
          amplitude={2.8}
          waveScale={0.7}
          waveRatio={0.9}
          swell={32}
          turbulence={18}
          tilt={1.2}
          zoom={1.1}
          height={6}
          fogDepth={18}
          detail="medium"
          brightness={1.1}
          opacity={0.95}
          mouseInteraction
          parallaxStrength={0.45}
          grain
          grainIntensity={0.06}
        />
      </div>

    <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_58%)]" />

      <div
        className={`absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 text-center ${Width > 900 ? 'w-[38rem]' : 'w-full px-6'}`}
      >
        <div className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm text-white/90 shadow-[0_0_35px_rgba(168,85,247,0.18)] backdrop-blur-sm">
          Front end  Developer
        </div>
      <TextType 
              text={text}
              as='h2'
              className='text-4xl font-bold mt-6 m-4 text-white'
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
      </div>
    </div>
  )
}

export default Hero