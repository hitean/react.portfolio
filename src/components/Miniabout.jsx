import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../components/FancyButton';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const pRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      pRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: pRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse", 
        },
      }
    );
  }, []);

  return (
    <section className="bg-[#282434] w-screen text-white py-16 px-6 md:px-20" id="about">
      <h2 className="text-4xl text-[orange] font-semibold mb-20">About Me</h2>

      <div className="flex items-center  justify-around flex-col md:flex-row">
        <p ref={pRef} className="text-gray-200 text-lg leading-relaxed max-w-3xl">
          I'm a passionate developer focused on crafting clean, user-friendly digital experiences.
          Whether it's frontend with React or backend with Node.js, I love turning ideas into real-world apps.
          Alongside full-stack development, I’m also deeply interested in Cyber Security — from ethical hacking to securing web applications.
          I enjoy exploring vulnerabilities, testing tools like Kali Linux, and understanding how systems can be better protected.
          Combining development with security helps me build not just powerful, but safe digital solutions.
        </p>

        <div className="mt-10 md:mt-0">
          <Button text="About" onClick={() => navigate('/about')} />
        </div>
      </div>
    </section>
  );
};

export default About;
