import React from "react";

const recommendedItem = {
  name: "Java Chip Frappuccino",
  size: "TALL (345 ml)",
  calories: "392 kcal",
  price: "₹ 420.00",
  image: "/coffee.jpeg", 
};

const BaristaRecommends = () => {
  return (
    <section className="bg-gray-100 py-10 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Barista Recommends</h2>
          <a href="#" className="text-green-600 font-semibold hover:underline">
            View Menu
          </a>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-lg flex items-center space-x-4 w-96">
        
          <div className="w-20 h-20 rounded-lg overflow-hidden">
            <img src={recommendedItem.image} alt={recommendedItem.name} className="w-full h-full object-cover" />
          </div>

        
          <div className="flex-1">
            <h3 className="font-semibold text-lg">{recommendedItem.name}</h3>
            <p className="text-sm text-gray-600">{recommendedItem.size} • {recommendedItem.calories}</p>
            <p className="text-lg font-bold text-gray-800 mt-2">{recommendedItem.price}</p>
          </div>

          <button className="bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md hover:bg-green-800">
            Add Item
          </button>
        </div>
      </div>
    </section>
  );
};

export default BaristaRecommends;
