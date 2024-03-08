import React from "react";
import Image from "next/image";
import img1 from ".././assets/img1.png";

const Propertytest = () => {
  return (
    <div className="container mx-auto px-4  lg:px-24">
      <div className="flex justify-between items-center my-8">
        <h1 className="text-3xl font-poppins font-extrabold">
          Featured Properties
        </h1>
        <div className="border border-gray-400 rounded-md px-4 py-2">
          <p className="text-sm font-poppins font-bold">
            EXPLORE ALL PROPERTIES
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 rounded-4xl lg:grid-cols-2 gap-8">
        {/* Repeat this block for each property */}
        {[1, 2, 3, 4].map((index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-md"
          >
            <div className="h-56 md:h-64 relative">
              <Image src={img1} alt="home" layout="fill" objectFit="cover" />
            </div>
            <div className="p-4">
              <p className="text-sm font-poppins leading-4">1 | Dubai</p>
              <p className="text-sm font-poppins leading-4 mt-2 font-bold">
                1 Bed in Zaya Hameni Tower, Jumeirah Village Circle (W1405)
              </p>
              <div className="flex justify-between items-center mt-4">
                <p className="text-sm font-poppins leading-4 font-bold text-blue-700">
                  1,453 USDT
                </p>
                <p className="text-xs font-poppins leading-4">347 investors</p>
              </div>
              <div className="mt-4 bg-green">
                <div className=" rounded-md text-xs text-black px-4 py-2 flex justify-between">
                  <p>APY</p>
                  <p className="font-bold">6.07 %</p>
                </div>
                <div className=" rounded-md text-xs text-black mt-2 px-4 py-2 flex justify-between">
                  <p>VALUE IN TREASURY</p>
                  <p className="font-bold">$18,888.30</p>
                </div>
              </div>
              <div className="mt-4 flex justify-between">
                <button className="bg-blue  text-white px-4 py-2 rounded-md font-bold">
                  Invest Now
                </button>
                <p className="text-xs font-bold font-poppins leading-4 cursor-pointer">
                  DETAILS
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Propertytest;
