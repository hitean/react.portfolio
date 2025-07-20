import React from 'react';
import Button from '../components/FancyButton'
const ContactStats = () => {
  return (
    <div className="bg-[#0F172A] w-screen text-white py-16 px-6 md:px-20 flex flex-col md:flex-row justify-between items-start gap-12">
      {/* Left Section - Contact */}
      <div className="md:w-1/2">
        <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">Contact</p>
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Any Type Of Query<br />& Discussion.
        </h2>
        <p className="text-gray-400 mb-6">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
        </p>
        <a href="mailto:hiteank@gmail.com" className="text-yellow-400 font-medium  flex items-center gap-2">
       <Button  text = "Contact"/> 
        </a>
      </div>

      {/* Right Section - Stats */}
      <div className="md:w-1/2">
        <h3 className="text-2xl md:text-3xl font-semibold mb-4 leading-relaxed">
          You can’t use up creativity,<br />
          the more you use, more you have<br />
          in your significant mind.
        </h3>
        <p className="text-gray-400 mb-8">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
        </p>
        <div className="flex gap-12">
          <div>
            <span className="text-yellow-400 text-4xl font-bold">2</span>
            <p className="text-sm text-gray-400 mt-1">Years of<br />Experience. in coding</p>
          </div>
          <div>
            <span className="text-yellow-400 text-4xl font-bold">187</span>
            <p className="text-sm text-gray-400 mt-1">Satisfied<br />Clients.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactStats;