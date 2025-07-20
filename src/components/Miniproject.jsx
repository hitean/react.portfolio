import React from "react";

const Projects = () => {
  return (
    <section className="bg-[#0f0f1a] text-white px-6 md:px-24 py-24">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
        {/* Left Side - Text Section */}
        <div className="lg:w-1/2">
          <p className="text-sm text-gray-400 mb-2">— Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            All Creative Works, <br /> Selected projects.
          </h2>
          <p className="text-gray-400 text-base mt-4 mb-8 max-w-md">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
          </p>
          <button className="text-yellow-400 font-medium flex items-center gap-2 hover:underline">
            Explore more <span className="text-xl">→</span>
          </button>
        </div>

        {/* Right Side - Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-6 lg:w-1/2">
          {/* BeServer Card */}
          <div className="bg-[#161622] p-4 rounded-lg transform rotate-2 hover:scale-105 transition">
            <img src="/assets/beserver.png" alt="BeServer" className="rounded-lg mb-4" />
            <div>
              <h3 className="text-xl font-semibold">BeServer.</h3>
              <p className="text-gray-400 text-sm">Branding, Product</p>
            </div>
          </div>

          {/* Seone Card */}
          <div className="bg-[#161622] p-4 rounded-lg transform -rotate-2 hover:scale-105 transition">
            <img src="/assets/seone.png" alt="Seone" className="rounded-lg mb-4" />
            <div>
              <h3 className="text-xl font-semibold">Seone.</h3>
              <p className="text-gray-400 text-sm">Product, Development</p>
            </div>
          </div>

          {/* Energetic Tumbler Card */}
          <div className="bg-[#161622] p-4 rounded-lg transform rotate-2 hover:scale-105 transition md:col-span-2">
            <img src="/assets/tumbler.png" alt="Energetic Tumbler" className="rounded-lg mb-4" />
            <div>
              <h3 className="text-xl font-semibold">Energetic Tumbler.</h3>
              <p className="text-gray-400 text-sm">Product, Development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
git add .