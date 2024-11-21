import React, { useEffect } from 'react';
import homeImg from '../assets/homeimg2.png';
import { Link } from 'react-router-dom';
import projectFair from '../assets/projects/projectFair.png'
import taskmgmt from '../assets/projects/taskmgmt.png'
import recipeApp from '../assets/projects/recipeApp.png'
import 'animate.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { BiArrowFromTop } from 'react-icons/bi';
import { FaArrowUp, FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Home = () => {
  useEffect(() =>{
    Aos.init()
  },[])
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
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
  
     

    

      <div className="grid m-6 grid-cols-2 md:grid-cols-5 gap-8 items-center">
      <div className="flex flex-col items-center group">
        <div className="w-44 h-32  p-2 rounded-full flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110">
          <img className='rounded-full bg-cover w-full' src="https://clipground.com/images/html-logo-png-3.png" alt="HTML" />
        </div>
        <p className="text-xl font-bold group-hover:text-yellow-600 text-gray-400 transition-colors duration-500">
          HTML
        </p>
   
      </div>
      <div className="flex flex-col items-center group">
        <div className="w-32 h-32  p-2 rounded-full flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110">
          <img className='rounded-full bg-cover w-full h-full' src="https://logospng.org/download/css-3/logo-css-3-2048.png" alt="CSS" />
        </div>
        <p className="text-xl font-bold group-hover:text-yellow-600 text-gray-400 transition-colors duration-500">
          CSS
        </p>
        
      </div>
      <div className="flex flex-col items-center group">
        <div className="w-32 h-32  p-2 rounded-full flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110">
          <img className='rounded-full bg-cover w-full' src="https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png" alt="JavaScript" />
        </div>
        <p className="text-xl font-bold group-hover:text-yellow-600 text-gray-400 transition-colors duration-500">
          JavaScript
        </p>
      </div>
      <div className="flex flex-col items-center group">
        <div className="w-32 h-32  p-2 rounded-full flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110">
          <img className='rounded-full bg-cover w-full' src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="React" />
        </div>
        <p className="text-xl font-bold group-hover:text-yellow-600 text-gray-400 transition-colors duration-500">
          React
        </p>
   
      </div>
      <div className="flex flex-col items-center group">
        <div className="w-32 h-32  p-2 rounded-full flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110">
          <img className='rounded-full bg-cover w-full' src="https://freepngdesign.com/content/uploads/images/p-1698-1-angular-logo-png-transparent-logo-214688437269.png" alt="React" />
        </div>
        <p className="text-xl font-bold group-hover:text-yellow-600 text-gray-400 transition-colors duration-500">
          Angular
        </p>
   
      </div>
      </div>
     

 <section className="container my-52 mx-auto px-4 py-8">
 <div className="ml-5">
  <div data-aos="fade-up-right" className="flex justify-between w-full mb-12">
    <div className="w-2/5">
      <img
        className="w-full h-full object-cover rounded-lg shadow-lg"
        src={projectFair}
        alt="Virtual Reality"
      />
      <div className="mt-4 text-center">
        <h2 className="text-2xl font-semibold text-gray-300">Project fair</h2>
        <a
          href="#"
          className="text-yellow-500 hover:text-yellow-600 text-lg flex items-center justify-center mt-2"
        >
          
        </a>
      </div>
    </div>
  </div>

  <div data-aos="fade-up-left" className="flex justify-between w-full mb-12">
    <div className="w-2/5 ml-auto">
      <img
        width="450px"
        height="400px"
        src={taskmgmt}
        alt="Augmented Reality"
        className="w-full h-full object-cover rounded-lg shadow-lg"
      />
      <div className="mt-4 text-center">
        <h2 className="text-2xl font-semibold text-gray-300">Taskmanagement system</h2>
        <a
          href="#"
          className="text-yellow-500 hover:text-yellow-600 text-lg flex items-center justify-center mt-2"
        >
          
        </a>
      </div>
    </div>
  </div>

  <div data-aos="fade-up-right" className="flex justify-between w-full">
    <div className="w-2/5">
      <img
        width="450px"
        height="400px"
        src={recipeApp}
        alt="Smart Glasses"
        className="w-full h-full object-cover rounded-lg shadow-lg"
      />
      <div className="mt-4 text-center">
        <h2 className="text-2xl font-semibold text-gray-300">Recipe app</h2>
        <a
          href="#"
          className="text-yellow-500 hover:text-yellow-600 text-lg flex items-center justify-center mt-2"
        >
          
        </a>
      </div>
    </div>
  </div>
</div>
<div className="flex mt-24 justify-center items-center">
  <Link to={'/projects'} className="bg-yellow-600 p-2 font-semibold rounded-full">
    See more
  </Link>
</div>
</section>

<section id="about" className="py-16 text-white">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-yellow-500 text-center mb-10">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row gap-10">
        <div data-aos="zoom-out-right" className="md:w-1/2">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I am Athul Binu, a Full-Stack MERN Developer with a passion for
            crafting scalable, innovative, and user-friendly web applications.
            With experience in designing and implementing cutting-edge
            solutions, I specialize in JavaScript, React, Node.js, Express.js,
            and MongoDB. My focus is on writing clean, efficient code while
            delivering projects that exceed expectations.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            I am driven by curiosity and the desire to continuously grow in the
            field of web development. Whether working individually or
            collaborating with a team, I strive to create impactful digital
            experiences.
          </p>
        </div>
        <div data-aos="zoom-out-left" className="md:w-1/2 flex justify-center">
          <img
            src="https://clipart-library.com/images/8iG5zgjia.gif"
            alt="Athul Binu"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="mt-16">
        <h3 className="text-3xl font-semibold text-yellow-500 mb-6 text-center">
          Skills & Expertise
        </h3>
        <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="flex flex-wrap justify-center gap-6">
          <span className="px-4 py-2 border border-yellow-500 text-white rounded-full text-sm font-medium">
            JavaScript
          </span>
          <span className="px-4 py-2 border border-yellow-500 text-white rounded-full text-sm font-medium">
            React
          </span>
          <span className="px-4 py-2 border border-yellow-500 text-white rounded-full text-sm font-medium">
            Node.js
          </span>
          <span className="px-4 py-2 border border-yellow-500 text-white rounded-full text-sm font-medium">
            Express.js
          </span>
          <span className="px-4 py-2 border border-yellow-500 text-white rounded-full text-sm font-medium">
            MongoDB
          </span>
          <span className="px-4 py-2 border border-yellow-500 text-white rounded-full text-sm font-medium">
            Angular
          </span>
          <span className="px-4 py-2 border border-yellow-500 text-white rounded-full text-sm font-medium">
            Git & GitHub
          </span>
        </div>
      </div>
      <div className="mt-16">
        <h3 className="text-3xl font-semibold text-yellow-500 mb-6 text-center">
          My Journey
        </h3>
        <p className="text-lg text-gray-300 text-center leading-relaxed">
          Starting as a curious learner, I have grown into a professional
          developer capable of handling both the front-end and back-end of web
          applications. I am passionate about staying updated with industry
          trends and always seeking opportunities to improve and innovate.
        </p>
      </div>
    </div>
  </section>

  <div className="flex items-center my-10 justify-center h-10 ">
      <marquee className="w-1/2   px-auto" behavior="" direction="">
        <div className="flex animate-marquee justify-between text-yellow-400 text-4xl">
          <FaInstagram />
          <FaLinkedin />
          <FaGithub/>
          <FaFacebook />
          <FaXTwitter />
        </div>
      </marquee>
    </div>

  <div
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-yellow-600 text-white rounded-full cursor-pointer hover:bg-yellow-700 transition-colors duration-300"
        aria-label="Scroll to top"
      >
        <FaArrowUp/>
      </div>

      
  
    </>
  );
};

export default Home;
