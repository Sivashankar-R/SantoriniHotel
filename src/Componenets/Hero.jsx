import React from 'react'

const Hero = () => {
  return (
    <div className="container-fluid mx-auto bg-cover bg-center bg-[url('./Componenets/Assets/pexels-jimmy-teoh-294331-1010657.jpg')] h-100 w-full ">
      <div className='h-100  bg-black/60 px-1 py-8 md:p-20' >
      <h1 className='text-white font-bold font-serif text-3xl md:text-5xl leading-relaxed '>Your Vacation<br/>Starts Here</h1>
      <p className='text-white pt-2 md:pt-4'>Kale chips knausgaard mustache blog fashion axe selfies salvia.Gluten-free<br/>post-ironic deep vtypewriter.</p>
      <button className='bg-white text-blue-600 px-6 py-3 mt-8'>View Rooms</button>
      </div>

    </div>
  )
}

export default Hero;