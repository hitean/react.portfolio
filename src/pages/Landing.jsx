import React from "react";
import { motion } from "framer-motion"; 

import Nav from "../components/Navbar"
import Landing1 from '../components/Landing1'
import Miniabout from '../components/Miniabout'
import Miniskills from '../components/Miniskills'
import Miniblog from '../components/Miniblog'
import Miniproject from '../components/Miniproject'

import hitean from "../assets/pics/hitean.png";
import linkedin from "../assets/pics/linkedin.png"
import githublogo from "../assets/pics/githublogo.png"
const Landing = () => {
 
  return (
    <> <Nav/>
    <section className="section_intro flex  overflow-hidden px-9 w-screen h-[80vh] bg-[#383444]">
     
      <motion.div 


  className="  relative text-[orange] z-50   py-[100px] w-[30%] h-full  ">

        <motion.h1  initial={{ x:-80, y: 50, opacity: 0 }}
  animate={{ x: 0, y: 0, opacity: 1 }}
  transition={{ duration: 1.5, ease: "easeOut" }}
         className=" ml-[150px] ml-10 text-[100px] font-bold " >Hitean</motion.h1>

        <motion.h1 
        initial={{ x:-80, y: 50, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}  
        className="  ml-[350px] text-[100px] font-bold z-30" >Kumar</motion.h1>
        <span className="px-6 flex gap-5 absolute bottom-0 left-1/2 pb-5 -translate-x-1/2">
         <img  src={linkedin} className="h-10  inline-block " alt="" />
         <img  src={githublogo} className="h-10    inline-block  " alt="" />
        </span>
      </motion.div>

    <motion.img
    initial={{  y: 100, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
     src={hitean} className="   z-10 w-[650px] " alt="" />


    <motion.div 
        initial={{ x:100, y: 50, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
    className=" flex justify-center items-center p-5 flex-col gap-10  w-[30%]">
      <h1 className="text-4xl text-[orange]" >A Passionate Frontend and MERN Stack Developer.</h1>
      <h2 className="text-white" >I bring digital ideas to life with modern technologies, seamless UI/UX, and scalable architecture. I focused on crafting clean, responsive, and user-centric web applications</h2>
    </motion.div>
    </section>

    <Landing1/>
    <Miniabout/> 
    <Miniskills/>
     <Miniblog/>
 <Miniproject/>
   <div className="w-screen h-[200vh] bg-[#282434]"></div>
    </>
  );
};

export default Landing;
