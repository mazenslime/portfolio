import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footar = ({width}) => {
  return (
    <div className={` h-fit py-4  w-full text-white flex ${width<600?'flex-col':'flex-row'}  cursor-pointer content-center justify-between `}>
        <div className='flex flex-row justify-center items-center gap-4 w-full h-10 '>
            <ul className='flex flex-row gap-8 text-white text-xl font-semibold'>
                <li className='text-gray-400 hover:text-white transition duration-300 ease-in'><a href="https://www.instagram.com/mazenslime26?igsh=dnVtbjNqeTgwcmcy"><i class="fa-brands fa-instagram"></i></a></li>
                <li className=' text-gray-400 hover:text-white transition duration-300 ease-in'><a href="https://github.com/mazenslime"><i class="fa-brands fa-github"></i></a></li>
                <li className='text-gray-400 hover:text-white transition duration-300 ease-in'><a href="https://www.linkedin.com/in/mazen-slime-6a2b93375?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i class="fa-brands fa-linkedin"></i></a></li>
            </ul>
        </div>
        <div className='flex flex-row justify-center items-center gap-4 w-full h-10 '>
            <p className='text-gray-400 text-sm'>© 2024 My Portfolio. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footar