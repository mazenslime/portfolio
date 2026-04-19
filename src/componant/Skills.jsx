import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import js  from '../assets/3d-javascript-logo-design-free-png.png'
import react  from '../assets/react.svg'
import bootstap  from '../assets/bootstrap-logo-png_seeklogo-272883.png'
import Mysql  from '../assets/mysql-5-logo-png-transparent.png'
import tillwend  from '../assets/tailwind_css.png'
import sql  from '../assets/79_sql-database-generic.494ff6320e.png'
import Xamp from '../assets/R.png'
import php from '../assets/php.png'
import Python from '../assets/python-logo.png'
import { motion } from "motion/react"
const Skills = () => {
    const skills = [
        {
            id: 1,
            name: 'React',
            experience: '3 years',
            img: react,
        },
        {
            id: 2,
            name: 'JavaScript',
            experience: '4 years',
            img: js,
        },
        {
            id: 3,
            name: 'Tailwind CSS',
            experience: '5 years',
            img: tillwend,
        },
        {
            id: 4,
            name: 'Bootstrap',
            experience: '5 years',
            img: bootstap,
        },
        {
            id: 5,
            name: 'MySQL',
            experience: '2 years',
            img: Mysql,
        },
        {
            id: 6,
            name: 'SQL',
            experience: '2 years',
            img: sql,
        },
        {
            id: 7,
            name: 'XAMPP',
            experience: '2 years',
            img: Xamp,
        },
        {
            id: 8,
            name: 'PHP',
            experience: '1 year',
            img: php,
        },
        {
            id: 9,
            name: 'Python',
            experience: '1 year',
            img: Python,
        }
    ]
  return (
    <div className='bg-gray-900 min-h-screen w-full text-white flex flex-col  justify-start items-center cursor-pointer' id='skills'>
        <div className='text-center px-4 py-2  mt-30 h-10 py-2  bg-purple-500/10 rounded-4xl border-1 border-purple-600'>
            My Skills
        </div>
        <p className='text-lg text-gray-300'>My skills in web applications</p>
        <div className='flex flex-row  flex-wrap justify-center items-center gap-10 mt-10'>
            {skills.map((skill) => (
                <motion.div
                initial={{transform:'scale(0.8)', opacity: 0}}
                whileInView={{transform:'scale(1)', opacity: 1}}
                transition={{duration: 0.5 ,delay: skill.id * 0.1}}
                 key={skill.id} className='w-50 h-40 bg-gray-800 rounded-lg flex flex-col  justify-center items-center'>
                    <img className="w-20 h-16 text-blue-500 mb-2" src={skill.img} alt={skill.name} />
                    <h3 className='text-xl font-bold text-white'>{skill.name}</h3>
                    <p className='text-sm text-gray-300'>Experience: {skill.experience}</p>
                </motion.div>
            ))}
        </div>
    </div>
  )
}

export default Skills