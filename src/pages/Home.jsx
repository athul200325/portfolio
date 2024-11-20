import React from 'react';
import homeImg from '../assets/homeimg2.png';
import { Link } from 'react-router-dom';
import 'animate.css';

const Home = () => {
  return (
    <section
      className="h-screen flex flex-col items-center justify-center text-center text-white relative overflow-hidden"
      style={{
        backgroundColor: 'transparent',
        backgroundImage: `url(${homeImg})`,
        backgroundSize: '60%',
        backgroundPosition: 'center 20px',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950"></div>

      <div className="relative max-w-screen-md mx-auto px-4 pt-[500px] z-10">
        <h2 className="text-4xl font-bold mb-4">
          Hi, I'm <h1 className="text-yellow-600 text-6xl animate__animated animate__backInUp">ATHUL BINU</h1>
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl">
          I'm a Full-Stack MERN Developer specializing in creating scalable and innovative web applications.
        </p>
        <div className="mt-6 font-medium space-x-4">
          <Link
            to={'/projects'}
            className="bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700"
          >
            View Projects
          </Link>
          <Link
            to={'/contact'}
            className="bg-gray-200 text-yellow-900 px-6 py-2 rounded-lg hover:bg-gray-300"
          >
            Contact Me
          </Link>
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="relative font-medium w-full h-full">
          <div className="absolute top-1/4 left-36 bg-yellow-500 text-white px-4 py-2 rounded-full shadow-lg animate-bounce">
            JavaScript
          </div>
          <div className="absolute top-2/4 left-64 bg-red-500 text-white px-4 py-2 rounded-full shadow-lg animate-pulse">
            Angular
          </div>
          <div className="absolute top-28  right-44 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg animate-bounce">
            React.js
          </div>
          <div className="absolute bottom-1/4 left-12 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg animate-bounce">
            Node.js
          </div>
          <div className="absolute bottom-64 right-72 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg animate-pulse">
            MongoDB
          </div>
          <div className="absolute top-1/3 right-10 bg-red-500 text-white px-4 py-2 rounded-full shadow-lg animate-bounce">
            Express.js
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
