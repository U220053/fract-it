import React from "react";
import Image from "next/image";
import img1 from ".././assets/Rectangle 69.png";

const Section4test = () => {
  return (
    <div className="max-w-screen-xl h-auto mx-auto flex flex-col md:flex-row justify-center items-center md:gap-[5rem] mt-10 md:mt-40 mb-10 md:mb-40">
      <div className="w-auto h-auto hover:shadow-lg ">
        <Image src={img1} alt="house" />
      </div>
      <div className="w-full lg:w-[30.8rem] h-auto lg:h-[22.47rem] gap-[2.8rem] mt-5 lg:mt-0">
        <div className="w-full h-auto md:h-[7rem]">
          <p className="font-poppins text-2xl lg:text-4xl font-extrabold max-sm:text-center">
            Real Estate Investing For Everybody.
          </p>
        </div>
        <div className="w-full h-auto">
          <p className="font-poppins text-sm lg:text-xl font-medium mt-4 max-sm:mt-2 max-sm:text-center">
            Investing with Revest is similar to owning a rental property,
            however, with us, you don't have to worry about day-to-day property
            management. In the periods of vacancy, the borrower is required to
            distribute fixed-interest payments.
          </p>
        </div>
        <div className=" w-[12rem] h-12 lg:w-[14rem] lg:h-[4rem] mt-5 ml-2 lg:mt-10 rounded-md bg-darkblue text-white flex justify-center ">
          <button>START EXPLORING</button>
        </div>
      </div>
    </div>
  );
};

export default Section4test;
