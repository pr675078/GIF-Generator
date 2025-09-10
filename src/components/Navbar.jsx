import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav className="nav w-full max-w-6xl mx-auto fixed top-0 left-1/2 -translate-x-1/2 bg-blue-100 text-black flex justify-center items-center font-bold text-lg md:text-2xl p-3 md:p-4 rounded-lg shadow-md z-50">
        GIF Generator
      </nav>
    </div>
  )
}

export default Navbar
