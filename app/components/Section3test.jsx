import React from "react";
import Image from "next/image";
import building from ".././assets/building.png";
import building2 from ".././assets/image 17.png";
import building3 from ".././assets/image 18.png";

const Section3test = () => {
  return (
    <div className="w-full gap-6 mt-6 md:mt-32   lg:flex lg:flex-col lg:items-center">
      <div className="w-full text-center">
        <p className="font-poppins text-4xl font-extrabold">
          It's Easy to Get Started.
        </p>
      </div>
      <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="w-full lg:w-auto  rounded-lg flex flex-col justify-center items-center hover:shadow-lg">
          <div className="w-64 h-64 mb-6 rounded-lg flex justify-center items-center bg-blue2">
            <Image src={building} alt="home" />
          </div>
          <div className="w-full">
            <p className="font-poppins text-3xl font-bold text-center mb-4">
              Browse Properties
            </p>
            <p className="font-poppins text-base font-medium text-center">
              Select a property that fits your goal from our huge variety of
              hand-picked properties.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-auto  rounded-lg flex flex-col justify-center items-center hover:shadow-lg">
          <div className="w-64 h-64 mb-6 rounded-lg flex justify-center items-center bg-green2">
            <Image src={building2} alt="home" />
          </div>
          <div className="w-full">
            <p className="font-poppins text-3xl font-bold text-center mb-4">
              View Details & Invest
            </p>
            <p className="font-poppins text-base font-medium text-center">
              View detailed metrics for that property like Rental Yield, etc.
              and invest like institutions.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-auto  rounded-lg flex flex-col justify-center items-center hover:shadow-lg">
          <div className="w-64 h-64 mb-6 rounded-lg flex justify-center items-center bg-blue2">
            <Image src={building3} alt="home" />
          </div>
          <div className="w-full">
            <p className="font-poppins text-3xl font-bold text-center mb-4">
              Earn and Track
            </p>
            <p className="font-poppins text-base font-medium text-center">
              You have full visibility into the performance of your investment.
              Track your total current.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3test;
