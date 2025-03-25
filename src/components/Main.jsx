import React from 'react'
import Curations from './curations'
import BaristaRecommends from './BaristaRecommends'
import HeroSection from './HeroSection'

const Main = () => {
  return (
    <>
    <section className='bg-[#0E382C] h-[80px]'>
          <h1 className='w-[30px] p-[25px] text-2xl text-[white] absolute left-35'>Starbucks</h1>
    </section>
    {/* <section className='h-[250px] bg-amber-700 border-1 rounded-4xl w-[50%] justify-center align-middle'>

    </section> */}
 {/* <section className="h-[250px] bg-amber-700 border border-gray-300 rounded-4xl w-[50%] flex justify-center items-center mx-auto my-10">
</section> */}
<div className="flex justify-center p-5 h-[250px]">
      <div className="relative w-[90%] bg-gradient-to-r from-yellow-200 via-green-300 to-pink-400 rounded-xl shadow-lg p-6 flex items-center">
        
    
        <div className="flex-shrink-0">
          <img
            src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/Refreshers_dashboard_03_1_10aa41bbca.png" 
            alt="Starbucks Refreshers"
            className="w-30 h-50"
          />
        </div>

      
        <div className="ml-6 flex-1">
          <p className="text-sm text-gray-700">All New</p>
          <h2 className="text-xl font-bold text-gray-900">Starbucks Refreshers</h2>
          <p className="text-sm text-gray-700">
            Beat the heat with your bestie, Refreshers now available in Lychee Raspberry and Kiwi Calamansi flavours.
          </p>
        </div>

        <button className="bg-green-700 text-white font-semibold py-2 px-5 rounded-full shadow-md hover:bg-green-800">
          Order Now
        </button>

        
      </div>
    </div>
    <Curations/>
    <BaristaRecommends/>
    <HeroSection/>
</>
  )}
  export default Main
