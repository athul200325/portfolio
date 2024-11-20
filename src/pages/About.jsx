import React from 'react'
import 'animate.css';

const About = () => {
  return (
<section className=" text-white py-16 px-6 md:px-20">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    <div className="text-center md:text-left">
      <h2 className="text-3xl animate__bounceInLeft animate__animated md:text-5xl font-bold mb-6">
        About <span className="text-yellow-600">Me</span>
      </h2>
      <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
        I am a passionate Full-Stack MERN Developer with a focus on crafting scalable and user-friendly web applications. I enjoy solving complex problems and constantly strive to enhance my skills.
      </p>
    </div>
    <div className="flex justify-center">
      <img
        src="https://www.reactiongifs.com/wp-content/uploads/2013/09/name.gif"
        alt="About Me"
        className="rounded-lg shadow-lg w-full md:w-3/4"
      />
    </div>
  </div>
</section>

  )
}

export default About