import React from 'react'
import { FaGithub, FaLinkedin, FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import portLOgo from '../assets/portLOgo.png'

const Header = () => {
  return (
<header className="bg-gradient-to-r h-20 from-black  text-white ">
  <div className="container mx-auto flex justify-between items-center pb-2 px-4">
    <div className=" font-bold">
      <Link to={'/'} className="hover:text-gray-300"><img  width={'100px'} src={portLOgo} alt="" /></Link>
    </div>
    <nav className="space-x-6 font-semibold">
      <Link to={'/projects'} className="hover:text-gray-300">Projects</Link>
      <Link to={'/skills'} className="hover:text-gray-300">Skills</Link>
      <Link to={'/contact'} className="hover:text-gray-300">Contact</Link>
      <Link to={'/about'} className="hover:text-gray-300">About</Link>
    </nav>
    <div className="space-x-4">
      <button
        className="text-yellow-600 font-semibold  px-4  rounded-lg hover:border border-yellow-600 "
      >
      <a href="https://github.com/athul200325"
        target="_blank"
        rel="noopener noreferrer" ><FaGithub  className='text-2xl'/></a>
      </button>

      <button

        className="text-yellow-600 font-semibold  px-4  rounded-lg hover:border border-yellow-600"
      >
      <a       
      href="https://www.linkedin.com/in/athul-binu-7a4a46317"
        target="_blank"
        rel="noopener noreferrer"><FaLinkedinIn className='text-2xl'/></a>
      </button>
    </div>
  </div>
</header>
  )
}

export default Header