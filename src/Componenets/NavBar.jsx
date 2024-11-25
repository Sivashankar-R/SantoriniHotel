import React from 'react'

const NavBar = () => {
  return (
    <div className='py-4'>
        <nav className=' container mx-auto md:flex justify-between item-center'>
            <div>
                <h1 className='text-3xl font-serif md:text-lg font-bold'>Santorini</h1>
            </div>
            <ul className='md:flex space-x-8'>
                <li className='text-blue-700 ms-8 md:ms-0'><a href="#">HOME</a></li>
                <li className='text-slate-700'><a href="#">ABOUT</a></li>
                <li className='text-slate-700'><a href='#'>ROOMS</a></li>
                <li className='text-slate-700'><a href="#">CONTACT</a></li>
                <button className='bg-blue-700 text-white font-bold px-3 py-1'>BOOK NOW</button>
            </ul>
        </nav>

    </div>
  )
}

export default NavBar