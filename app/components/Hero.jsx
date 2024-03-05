import React from "react";
import Image from "next/image";
import house from ".././assets/house.png";

const Hero = () => {
  return (
    <div className="w-79 h-45 rounded-2xl flex justify-between m-20 bg-bluelight">
      <div className="w-29 h-24 gap-1 grid grid-cols-1">
        <div className="w-29 h-12 m-10">
          <p className="text-5xl font-poppins leading-normal font-black ">
            Dive into the World of Frictionless Real Estate Investment
          </p>
        </div>
        <div className="w-29 h-8 mt-[150px] ml-10">
          <p className="text-sm font-poppins leading-normal  ">
            Start earning rental yeild and capital growth with our
            property-backed tokenised investments with benifits of DeFi
          </p>
        </div>
        <div className="w-15 h-3 mt-20 ml-10">
          <button className="w-[242px] h-[62px] rounded-md bg-black text-white font-bold ">
            Invest Now
          </button>
        </div>
      </div>
      <div className="w-50 h-35 ml-25">
        <Image src={house} alt="home" width={1500} />
      </div>
    </div>
  );
};

export default Hero;
