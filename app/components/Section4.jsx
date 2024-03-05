import React from "react";
import Image from "next/image";
import img1 from ".././assets/Rectangle 69.png";
const Section4 = () => {
  return (
    <div className="w-[74rem] h-[24rem] flex flex-row gap-[5rem] ml-20 mr-20 mt-40 mb-40">
      <div className="w-[37rem] h-[24.3rem] ">
        <Image src={img1} alt="house" />
      </div>
      <div className="w-[30.8rem] h-[22.47rem] gap-[2.8rem]">
        <div className="w-[30rem] h-[7rem]">
          <p className="font-poppins text-4xl font-extrabold">
            Real Estate Investing For Everybody.
          </p>
        </div>
        <div className="w-[30rem] h-[7.5rem]">
          <p className="font-poppins text-xl font-medium mt-4">
            Investing with Revest, is similar to owning a rental property,
            however with us you don't have to worry about day-to-day property
            management and in the periods of vacancy the borrower is required to
            distribute fixed-interest payments.
          </p>
        </div>
        {/* <div className="w-[14rem] h-[4rem] mt-10 rounded-md bg-darkblue text-white">
          <button>INVEST NOW</button>
        </div> */}
        <div className="w-[14rem] h-[4rem] mt-10 rounded-md bg-darkblue text-white flex justify-center items-center">
          <button>START EXPLORING</button>
        </div>
      </div>
    </div>
  );
};

export default Section4;
