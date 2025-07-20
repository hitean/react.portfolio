import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
//imgs  
import Html from '../assets/pics/html.png'
import Css from '../assets/pics/css.png'
import Js from '../assets/pics/js.png'
import MongoDB from '../assets/pics/MongoDB.png'
import Expressjs from '../assets/pics/expressjs.png'
import Reactimg from '../assets/pics/react.webp'
import Nodejs from '../assets/pics/nodejs.png'
import framermotion from '../assets/pics/framermotion.png'
import gsapimg from '../assets/pics/gsap.png'
const skills = [
  Html,Css,Js,MongoDB,Expressjs,Reactimg,Nodejs,gsapimg,framermotion
];

const Skills = () => {
  const containerRef = useRef(null);
    const skilllstext ="I specialize in building responsive, clean, and scalable apps using the MERN Stack. I also explore animation tools like GSAP and Framer Motion to add fluidity and interactivity to interfaces.";
  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play reverse play reverse',
        },
      }
    );
  }, []);


  return (
    <section
   
      className="h-[100vh] py-5  w-screen bg-[#0F172A] text-white px-2 flex flex-col items-center justify-between"
      id="skills"
    >
      <h1   ref={containerRef} className="text-6xl text-[orange] font-bold  mt-8">SKILLS</h1>

      <div className="flex w-full justify-evenly items-center    gap-6 flex-wrap  h-100  ">
        {/* Left Side Icons */}

        <div className="flex flex-col w-35  gap-8  ">
          {skills.slice(0, 3).map((skill ) => (
            <img className='    ' src={skill} alt="" />
          ))}
        </div>

        {/* Center Paragraph */}
        <div className="max-w-xl text-center ml-10 text-gray-100 text-xl px-4">
           {skilllstext}
        </div>

        {/* Right Side Icons */}
       
        <div className="flex flex-col w-55  gap-32  ">
          {skills.slice(3,6).map((skill) => (
            <img className='    ' src={skill} alt="" />
          ))}
        </div>
      </div>
   
   <div className='  flex flex-row items-center justify-center w-full h-50'>
      {skills.slice(6,9).map((skill) => (
            <img className='h-full w-auto  ' src={skill} alt="" />
          ))}
   </div>
          
    </section>
  );
};

export default Skills;
