import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gray-300 py-8 mb-35 mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Learn more about the world of coffee!
        </h2>
        <div 
          className="relative bg-white rounded-lg shadow-lg overflow-hidden h-80 bg-cover bg-center"
          style={{ backgroundImage: "url('/coffepour1.jpeg')" }}
        >
          <div className="absolute bg-blue bg-opacity-50 flex flex-col justify-end p-6">
            <span className="bg-green-100 text-green-700 px-3 py-1 text-xs font-semibold rounded-full w-[130px]">
              Coffee Culture
            </span><br/><br/><br/><br/><br/>
            <h3 className="text-white text-2xl font-bold mt-2">
              Art & Science Of Coffee Brewing
            </h3>
            <p className="text-gray-200 mt-1">
              Master the perfect brew with Starbucks! Learn the art and science of coffee brewing.
            </p>
            <div className="mt-4">
              <button className="bg-white text-gray-900 font-semibold px-6 py-2 rounded-full shadow-md hover:bg-gray-200">
                Learn More
              </button>
            </div>
          </div>
          <div className="absolute top-4 right-6">
            <a href="#" className="text-green-700 font-semibold hover:underline">
              Discover More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
