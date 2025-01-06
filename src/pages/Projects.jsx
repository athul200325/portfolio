import React from 'react'
import taskmgmt from '../assets/projects/taskmgmt.png'
import projectFair from '../assets/projects/projectFair.png'
import recipeApp from '../assets/projects/recipeApp.png'
import eCart from '../assets/projects/eCart.png'
import realEstate from '../assets/projects/realestate.png'


import { FaGithub } from 'react-icons/fa'
import 'animate.css';

const Projects = () => {
  return (
<>
<h2 className='text-center animate__bounceInDown animate__animated text-white font-bold mt-10 text-4xl'>PROJECTS </h2> 
  <div className="grid grid-cols-1 px-60  py-14  md:grid-cols-2 lg:grid-cols-3 gap-6">

  <div className="max-w-sm shadow-xl hover:shadow-yellow-900 transition-shadow duration-300 h-[450px] rounded-lg mt-10  overflow-hidden">
          <img
            className="w-full h-48 object-cover"
            src={realEstate}
            alt="Project Title" 
          />
          <div className="p-4">
            <h3 className="text-xl font-bold text-gray-100">Realestate Management System</h3>
            <p className="text-gray-400 h-20 mt-2">
            A Real Estate Management System is software that helps manage property listings and client interactions, streamlining tasks for property owners, agents, and tenants
            </p>
            <div className="mt-4 flex justify-between items-center">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://real-estate-mngt-sys-rys5.vercel.app/"
                className="bg-yellow-500  px-4 py-2 rounded-lg mt-10 hover:bg-yellow-600"
              >
                View Project
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/athul200325/realEstateMngtSys.git"
                className="text-yellow-400 border flex items-center px-4 py-2 rounded-lg mt-10 border-yellow-600 hover:text-yellow-600"
              >
                <FaGithub className="mr-2" />Github
              </a>
            </div>
          </div>
        </div>
    
        <div className="max-w-sm shadow-xl hover:shadow-yellow-900 transition-shadow duration-300 h-[450px] rounded-lg mt-10  overflow-hidden">
          <img
            className="w-full h-48 object-cover"
            src={projectFair}
            alt="Project Title" 
          />
          <div className="p-4">
            <h3 className="text-xl font-bold text-gray-100">Project fair</h3>
            <p className="text-gray-400 h-20 mt-2">
            A Project Fair Website showcases projects and ideas in an organized, interactive way, allowing users to explore, learn, and connect with contributors.
            </p>
            <div className="mt-4 flex justify-between items-center">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://project-fair-lyart.vercel.app/"
                className="bg-yellow-500  px-4 py-2 rounded-lg mt-10 hover:bg-yellow-600"
              >
                View Project
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/athul200325/projectFair.git"
                className="text-yellow-400 border flex items-center px-4 py-2 rounded-lg mt-10 border-yellow-600 hover:text-yellow-600"
              >
                <FaGithub className="mr-2" />Github
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-sm shadow-xl hover:shadow-yellow-900 transition-shadow duration-300  h-[450px] rounded-lg mt-10  overflow-hidden">
          <img
            className="w-full h-48 object-cover"
            src={taskmgmt}
            alt="Project Title" 
          />
          <div className="p-4">
            <h3 className="text-xl font-bold text-gray-100">Task management sysytem</h3>
            <p className="text-gray-400 h-20 mt-2">
            A Task Management System helps organize, track, and prioritize tasks to improve efficiency and productivity.
            </p>
            <div className="mt-4 flex justify-between items-center">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://task-mgmnt-704e13.netlify.app"
                className="bg-yellow-500  px-4 py-2 rounded-lg mt-10 hover:bg-yellow-600"
              >
                View Project
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/athul200325/taskMgnt.git"
                className="text-yellow-400 border flex items-center px-4 py-2 rounded-lg mt-10 border-yellow-600 hover:text-yellow-600"
              >
                <FaGithub className="mr-2"/>Github
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-sm shadow-xl hover:shadow-yellow-900 transition-shadow duration-300  h-[450px] rounded-lg mt-10  overflow-hidden">
          <img
            className="w-full h-48 object-cover"
            src={recipeApp}
            alt="Project Title" 
          />
          <div className="p-4">
            <h3 className="text-xl font-bold text-gray-100">Recipe app</h3>
            <p className="text-gray-400 h-20 mt-2">
            A Recipe App lets users find, save, and share cooking recipes easily.
            </p>
            <div className="mt-4 flex justify-between items-center">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://recipe-app-215188.netlify.app/"
                className="bg-yellow-500  px-4 py-2 rounded-lg mt-10 hover:bg-yellow-600"
              >
                View Project
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/athul200325/recipe-app.git"
                className="text-yellow-400 border flex items-center px-4 py-2 rounded-lg mt-10 border-yellow-600 hover:text-yellow-600"
              >
                <FaGithub className="mr-2"/>Github
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-sm shadow-xl hover:shadow-yellow-900 transition-shadow duration-300  h-[450px] rounded-lg mt-10  overflow-hidden">
          <img
            className="w-full h-48 object-cover"
            src={eCart}
            alt="Project Title" 
          />
          <div className="p-4">
            <h3 className="text-xl font-bold text-gray-100">E cart</h3>
            <p className="text-gray-400 h-20 mt-2">
            An eCart project is an online shopping platform where users can browse products, add items to a cart, and securely complete purchases.
            </p>
            <div className="mt-4 flex justify-between items-center">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://ecart-b923e0.netlify.app/"
                className="bg-yellow-500  px-4 py-2 rounded-lg mt-10 hover:bg-yellow-600"
              >
                View Project
              </a>
              <a
              target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/athul200325/eCart.git"
                className="text-yellow-400 border flex items-center px-4 py-2 rounded-lg mt-10 border-yellow-600 hover:text-yellow-600"
              >
                <FaGithub className="mr-2"/>Github
              </a>
            </div>
          </div>
        </div>
  </div>
</>

  )
}

export default Projects