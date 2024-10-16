import React from "react";
import Image from "next/image";
import arrow from ".././assets/arrow.png";
import dubai from ".././assets/dubai.png";
import ny from ".././assets/ny.png";
import sanfransisco from ".././assets/sanfransisco.png";
import arrowsingle from ".././assets/arrowsingle.png";

const City = () => {
  return (
    // <div className="w-full md:w-[75rem] h-[16.83rem] gap-[1.8rem] m-20">
    <div className="w-full max-w-screen-xl  m-auto px-6 lg:px-0  pt-20 pb-12">
      <div className="flex  justify-between ">
        <div className="flex justify-between">
          <p className="text-3xl font-poppins leading-7 font-black">
            Explore By Cities
          </p>
        </div>
        {/* <Image src={arrow} alt="home" class=" max-w-full h-auto" /> */}
      </div>
      <div className=" w-full max-w-screen-xl h-auto grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
        {/* <div className="w-full max-w-screen-xl  gap-5 flex justify-center mt-10 md:mt-0  sm:flex-col sm:m-auto md:flex-row"> */}
        <div className="h-[12rem]  rounded-2xl bg-white flex md:justify-between justify-between gap-2 p-8">
          <div className="ml-10 mt-2">
            <Image src={dubai} alt="home" width={100} />
          </div>
          <div className="flex flex-col w-32 h-8  mr-2 ml-2">
            <div className="w-full h-2 mt-2">
              <p className="text-lg font-poppins leading-5 font-bold">Dubai</p>
            </div>
            <div className="w-full h-2 mt-8 ">
              <p className="font-poppins text-xs">
                {Math.floor(Math.random() * 10) + 1} Properties
              </p>
            </div>
            {/* <div className="w-full h-2 mt-12 flex flex-row ">
              <p className="font-poppins text-xs text-blue">Coming Soon</p>
              <Image src={arrowsingle} alt="home" width={20} />
            </div> */}
            <div className="w-full h-auto mt-12 flex flex-row">
              <p className="font-poppins text-xs text-blue">Coming Soon</p>
              <Image src={arrowsingle} alt="home" width={20} />
            </div>
          </div>
        </div>

        <div className="h-[12rem] rounded-2xl bg-white flex md:justify-between justify-between gap-2 p-8">
          <div className="ml-10 mt-2">
            <Image src={sanfransisco} alt="home" width={100} />
          </div>
          <div className="flex flex-col w-auto md:w-40 h-auto mr-2 ml-2">
            <div className="w-full h-auto mt-2">
              <p className="text-lg font-poppins leading-5 font-bold">
                San Fransisco
              </p>
            </div>
            <div className="w-full h-auto mt-4 ">
              <p className="font-poppins text-xs">
                {Math.floor(Math.random() * 10) + 1} Properties
              </p>
            </div>

            <div className="w-full h-auto mt-12 flex flex-row">
              <p className="font-poppins text-xs text-blue">Coming Soon</p>
              <Image src={arrowsingle} alt="home" width={20} />
            </div>
          </div>
        </div>

        <div className="h-[12rem] rounded-2xl bg-white flex md:justify-between justify-between gap-5 p-8">
          <div className="ml-10 mt-2 ">
            <Image src={ny} alt="home" />
          </div>
          <div className="flex flex-col w-32 h-8  mr-2 ml-2">
            <div className="w-full h-2 mt-2">
              <p className="text-lg font-poppins leading-5 font-bold">
                New York
              </p>
            </div>
            <div className="w-full h-2 mt-8 ">
              <p className="font-poppins text-xs">
                {Math.floor(Math.random() * 10) + 1} Properties
              </p>
            </div>
            {/* <div className="w-full h-2 mt-12 flex flex-row ">
              <p className="font-poppins text-xs text-blue">Coming Soon</p>
              <Image src={arrowsingle} alt="home" width={20} />
            </div> */}
            <div className="w-full h-auto mt-12 flex flex-row">
              <p className="font-poppins text-xs text-blue">Coming Soon</p>
              <Image src={arrowsingle} alt="home" width={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default City;
