import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-full bg-gradient-to-b  from-black to-gray-800 p-4'>
       <div className='flex flex-col justify-center p-4 max-w-screen-lg mx-auto h-full'>
        <div>
            <p className=' text-4xl font-bold inline border-b-4 border-gray-500 shadow-red-500 text-white'>Contact</p>
            <p className='text-xl py-6 text-white'>Submit the form below to get in touch with me </p>
        </div>
         <div className=' flex justify-center items-baseline'>
            <form action="https://getform.io/f/bgdyqkla" method='POST' className='flex flex-col gap-2 md:w-1/2'>
                <input type="text" name='name' placeholder='Enter Your name' className='p-2 bg-transparent border-2  rounded-md focus:outline-none text-white '  />
          
                <input type="email" name='name' placeholder='Enter Your Email' className='p-2 bg-transparent border-2  rounded-md focus:outline-none text-white'  />

                <textarea name="message" rows="10" placeholder='Enter your message' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none '  ></textarea>

                <button className='text-white bg-gradient-to-b from-cyan-300 to-blue-600 px-6 py-3 mx-auto items-center rounded-md hover:scale-105 duration-300'>Let`s talk</button>
                
            </form>
         </div>
       </div>
    </div>
  )


}

export default Contact
