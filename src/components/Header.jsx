import React from "react";
import { User } from "lucide-react"

const Header = () => {
  return (
    <header className="bg-white h-[80px] flex justify-between items-center px-10 shadow-md">
   
      <nav className="flex space-x-20">
        <div className="cursor-pointer hover:text-green-500 hover:underline">Home</div>
        <div className="cursor-pointer hover:text-green-500 hover:underline">Gift</div>
        <div className="cursor-pointer hover:text-green-500 hover:underline">Order</div>
        <div className="cursor-pointer hover:text-green-500 hover:underline">Pay</div>
        <div className="cursor-pointer hover:text-green-500 hover:underline">Store</div>
      </nav>

     
      <div className="relative">
        <input
          type="text"
          placeholder="Looking for something specific?"
          className="pl-10 pr-4 py-2 w-80 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </div>

   
      <div className="p-2 rounded-full bg-gray-100 cursor-pointer hover:bg-gray-200">
        <User size={24} className="text-gray-600" />
      </div>
    </header>
  );
};

export default Header;

