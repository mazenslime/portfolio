import React from 'react'
import { useState } from 'react';
export default function ContactForm({ Width }) {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "c645f6a0-b5a3-4c36-b090-4119c07c9b90");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };

  return (
    <div className={` ${Width > 900 ? 'bg-gray-900 min-h-screen w-full text-white grid grid-cols-2 cursor-pointer content-center border-b-1 border-gray-500' : 'flex flex-col justify-start items-start px-8 text-white  -bottom-10'} bg-gray-900 gap-4`} id='contact'>
        <div className={` ${Width > 900 ? 'flex flex-col justify-start items-start px-8 sticky -bottom-10' : 'flex flex-col justify-start text-center  items-center  px-8 sticky -bottom-10'}  gap-4`}>
            <div className='text-center px-4 py-2  mt-30 h-10 py-2  bg-purple-500/10 rounded-4xl border-1 border-purple-600'>
                Contact Us
            </div>
            <h2 className='text-5xl font-extrabold'>Got a problem to solve?</h2>
            <p className='text-lg text-gray-500'>Get your space suit ready and tell us your ideas to develop <span className='text-white'>your dream web solution</span>.</p>
        </div>
        <form onSubmit={onSubmit} className={` ${Width > 900 ? 'flex flex-col gap-4 w-full h-full justify-center items-center' : 'flex flex-col gap-4 w-full h-full justify-center items-center'}`}>
            <div className='flex flex-col gap-2 w-full'>
                <label className='text-xl text-bold' htmlFor="name">Name:</label>
                <input className={` ${Width > 900 ? 'w-150' : 'w-full'} text-xl outline-none  bg-gray-800 border-1 rounded-lg px-3 border-white h-15 focus:border-purple-500 `} type="text" name="name" required/>
            </div>
            <div className='flex flex-col gap-2 w-full'>
                <label className='text-xl text-bold' htmlFor="email">Email:</label>
                <input  className={` ${Width > 900 ? 'w-150' : 'w-full'} text-xl outline-none  bg-gray-800 border-1 rounded-lg px-3 border-white h-15 focus:border-purple-500 `}type="email" name="email" required/>
            </div>
            <div className='flex flex-col gap-2 w-full'>
                <label className='text-xl text-bold' htmlFor="message">Message:</label>
                <textarea className={` ${Width > 900 ? 'w-150' : 'w-full'} border-1 rounded-lg px-3 py-2 border-white bg-gray-800 h-15 outline-none focus:border-purple-500`} name="message" required></textarea>
            </div>
            <div className='flex flex-row justify-end w-full'>
                <button className={` ${Width > 900 ? 'w-50' : 'w-full'}  h-15 cursor-pointer text-black justify-start items-end mx-20 rounded-lg border-1 border-white font-bold relative `} id='sub' type="submit"><div className='absolute w-full  bg-white  rounded-lg h-15 top-0 left-0' id='sub2'></div><span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Submit</span></button>
            </div>
            <p className='bg-green w-80 h-20 p-5 '>{result}</p>
        </form>
    </div>
  );
}