
import React from "react";

const Curations = () => {
  return (
    <section className="text-center my-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Handcrafted Curations</h2>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-10 justify-center">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden shadow-lg">
            <img src="/coffee.jpeg" alt="Bestseller" className="w-full h-full object-cover" />
          </div>
          <p className="mt-2 text-sm font-semibold text-gray-700">Bestseller</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden shadow-lg">
            <img src="/food.jpeg" alt="Drinks" className="w-full h-full object-cover" />
          </div>
          <p className="mt-2 text-sm font-semibold text-gray-700">Drinks</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden shadow-lg">
            <img src="/mug.jpeg" alt="Food" className="w-full h-full object-cover" />
          </div>
          <p className="mt-2 text-sm font-semibold text-gray-700">Food</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden shadow-lg">
            <img src="/food.jpeg" alt="Merchandise" className="w-full h-full object-cover" />
          </div>
          <p className="mt-2 text-sm font-semibold text-gray-700">Merchandise</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden shadow-lg">
            <img src="/coffee.jpeg" alt="Coffee At Home" className="w-full h-full object-cover" />
          </div>
          <p className="mt-2 text-sm font-semibold text-gray-700">Coffee At Home</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden shadow-lg">
            <img src="/mug.jpeg" alt="Ready to Eat" className="w-full h-full object-cover" />
          </div>
          <p className="mt-2 text-sm font-semibold text-gray-700">Ready to Eat</p>
        </div>
      </div>
    </section>
  );
};

export default Curations;

