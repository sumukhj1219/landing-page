import React from 'react'

const Navbar = () => {
  return (
    <nav className='max-w-7xl mx-auto p-4 h-22 bg-transparent'>
      <div className='flex items-center m-4  mx-auto text-white justify-between'>
        <div className='flex items-center hover:cursor-pointer justify-center gap-x-2 '>
            Logo
        </div>
        <div className='flex font-light items-center hover:cursor-pointer justify-center gap-x-16'>
            <span>Showcase</span>
            <span>Pricing</span>
            <span>Support</span>
            <span>Contact</span>
        </div>
        <div className='flex items-center hover:cursor-pointer justify-center gap-x-2'>
            <span>Sign In</span>
            <span>Get Started</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
