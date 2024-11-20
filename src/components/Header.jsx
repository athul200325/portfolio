import React from 'react'
import { FaGithub, FaLinkedin, FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
<header className="bg-gradient-to-r h-20 from-black  text-white py-4">
  <div className="container mx-auto flex justify-between items-center px-4">
    <div className="text-2xl font-bold">
      <Link to={'/'} className="hover:text-gray-300"><span className='text-yellow-600'>A</span>B</Link>
    </div>
    <nav className="space-x-6 font-semibold">
      <Link to={'/projects'} className="hover:text-gray-300">Projects</Link>
      <Link to={'/skills'} className="hover:text-gray-300">Skills</Link>
      <Link to={'/contact'} className="hover:text-gray-300">Contact</Link>
      <Link to={'/about'} className="hover:text-gray-300">About</Link>
    </nav>
    <div className="space-x-4">
      <button
      href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="text-yellow-600 font-semibold  px-4 py-2 rounded-lg hover:border border-yellow-600 "
      >
      <FaGithub className='text-2xl'/>
      </button>

      <button
      href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="text-yellow-600 font-semibold  px-4 py-2 rounded-lg hover:border border-yellow-600"
      >
      <FaLinkedinIn className='text-2xl'/>
      </button>
    </div>
  </div>
</header>
  )
}

export default Header