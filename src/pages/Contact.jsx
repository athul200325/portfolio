import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { FaInstagram, FaLinkedin, FaGithub, FaFacebook, FaTwitter } from 'react-icons/fa';
import { FaX, FaXTwitter } from "react-icons/fa6";
import 'animate.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mi614x7", 
        "template_69igqrb", 
        form.current,
        "nQl5-lGCOAg0d_Ioe" 
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send message. Try again later.");
        }
      );
  };

  return (
    <>
<h1 className='text-center animate__bounceInDown animate__animated text-white font-bold mt-10 text-4xl'>CONTACT <span className="text-yellow-600">ME</span></h1> 
<form
    ref={form}
    onSubmit={sendEmail}
    className=" p-6 rounded-lg shadow-2xl m-20 max-w-md mx-auto space-y-4"
  >
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      required
      className="w-full px-4 py-2 text-gray-100 bg-black rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none"
    />
    <input
      type="email"
      name="email"
      placeholder="Your Email"
      required
      className="w-full px-4 py-2 text-gray-100 bg-black rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none"
    />
    <textarea
      name="message"
      placeholder="Your Message"
      required
      className="w-full px-4 py-2 text-gray-100 bg-black rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none h-32"
    ></textarea>
    <button
      type="submit"
      className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300"
    >
      Send Message
    </button>
  </form>

  
  <div className="flex items-center my-10 justify-center h-10 ">
      <marquee className="w-1/2   px-auto" behavior="" direction="">
        <div className="flex animate-marquee justify-between text-yellow-400 text-4xl">
          <FaInstagram />
          <FaLinkedin />
          <FaGithub />
          <FaFacebook />
          <FaXTwitter />
        </div>
      </marquee>
    </div>

    </>
   

  );
};

export default Contact;
