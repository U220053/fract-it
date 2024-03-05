import React from "react";
import Image from "next/image";
import building from ".././assets/building.png";
import building2 from ".././assets/image 17.png";
import building3 from ".././assets/image 18.png";
const Section3 = () => {
  return (
    <div className="w-full h-[33rem] gap-[3rem] mt-[6rem] flex flex-col  items-center">
      <div className="w-[48.65rem] h-[4rem] text-center">
        <p className="font-poppins text-4xl font-extrabold ">
          It's Easy to Get Started.
        </p>
      </div>
      <div className=" w-[71.71rem] h-[26rem] gap-[6rem] flex flex-row justify-between">
        <div className="w-1/3 h-[26.14rem] gap-[2.25rem] flex flex-col justify-center items-center ">
          <div className="w-[17.26rem] h-[16rem] bg-blue2 rounded-lg flex justify-center items-center">
            <Image src={building} alt="home" />
          </div>
          <div className="w-[19.35rem] h-[8rem]">
            <div className=" h-[3rem]">
              <p className="font-poppins text-3xl font-bold flex justify-center">
                Browse Properties
              </p>
            </div>
            <div className="w-[19.35rem] h-[4.5rem] m-2">
              <p className="font-poppins text-base font-medium flex justify-center">
                Select a property that fits your goal from our huge variety of
                hand-picked properties.
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/3 h-[26.14rem] gap-[2.25rem] flex flex-col justify-center items-center ">
          <div className="w-[17.26rem] h-[16rem] bg-green2 rounded-lg flex justify-center items-center">
            <Image src={building2} alt="home" />
          </div>
          <div className="w-[19.35rem] h-[8rem]">
            <div className=" h-[3rem]">
              <p className="font-poppins text-3xl font-bold flex justify-center">
                View Details & Invest
              </p>
            </div>
            <div className="w-[19.35rem] h-[4.5rem] m-2">
              <p className="font-poppins text-base font-medium flex justify-center">
                View detailed metrics for that property like Rental Yield, etc.
                and invest like institutions.
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/3 h-[26.14rem] gap-[2.25rem] flex flex-col justify-center items-center ">
          <div className="w-[17.26rem] h-[16rem] bg-blue2 rounded-lg flex justify-center items-center">
            <Image src={building3} alt="home" />
          </div>
          <div className="w-[19.35rem] h-[8rem]">
            <div className=" h-[3rem]">
              <p className="font-poppins text-3xl font-bold flex justify-center">
                Earn and Track
              </p>
            </div>
            <div className="w-[19.35rem] h-[4.5rem]  ml-4 flex justify-center">
              <p className="font-poppins text-base font-medium flex ">
                You have full visibility into the performance of your
                investment. Track your total current.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
