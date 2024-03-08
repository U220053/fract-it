"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import hands from ".././assets/Group 41.png";
import img1 from ".././assets/Group 43.png";
import img2 from ".././assets/Rectangle 44.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Hard = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="h-[50rem] bg-blue my-20 relative">
      <div className="w-[48.65rem] h-[8.3rem] relative left-[25rem] top-[3.5rem] gap-[1rem] flex flex-col items-center mb-4">
        <p className="font-extrabold font-poppins text-5xl text-white mb-8">
          So, how will you make money?
        </p>
        <p className="font-base font-poppins text-xl text-white">
          Fractit was built to empower everyone to own and build wealth through
          real estate
        </p>
      </div>
      <div className="w-[18.18rem] h-[18.23rem] absolute left-[18rem] top-[12rem] bg-lightblue opacity-40"></div>
      <div className="w-[18.5rem] h-[18.23rem] absolute left-[60rem] top-[12rem] bg-lightblue opacity-40"></div>
      <div className="w-[18.5rem] h-[18.23rem] absolute left-[-1rem] top-[32rem]  bg-lightblue opacity-40"></div>
      <div className="w-[18.5rem] h-[18.23rem] absolute left-[38rem] top-[32rem]  bg-lightblue opacity-40"></div>
      {/* <div className="w-[18.5rem] h-[18.23rem] absolute left-[76.2rem] top-[32rem]  bg-lightblue opacity-40"></div> */}
      <div className="h-[36rem] relative">
        <div className="flex flex-row items-center justify-center h-[40rem] gap-12">
          <div
            className="w-[16rem] h-[21rem] rounded-2xl bg-green1 flex flex-col items-center justify-center hover:shadow-lg"
            data-aos="fade-right"
          >
            <div className="w-full h-full flex flex-col items-center justify-center">
              <Image src={hands} alt="hand" />
              <div className="text-center">
                <p className="font-bold">Monthly rental income</p>
                <p>Consistent passive income from monthly rental payments</p>
              </div>
            </div>
          </div>
          <div className="w-[30rem] h-[30rem] rounded-2xl bg-white  flex flex-col items-center justify-center hover:shadow-lg">
            <div className="w-full h-full flex flex-col ">
              <Image
                src={img2}
                alt="hand"
                className="object-cover w-full h-[15rem] rounded-t-2xl"
              />

              <div className="w-[20.8rem] h-[2.8rem] m-4">
                <p className="font-bold">
                  1 Bed in Zaya Hameni Tower, Jumeirah Village Circle (W1405)
                </p>
              </div>
              <div className="mt-4 mr-4 ml-4 flex flex-row justify-between">
                {" "}
                <p className="text-darkblue font-extrabold">1,453 USDT </p>{" "}
                <p>347 Investors</p>
              </div>
              <div className="m-4 p-4 rounded-xl flex flex-row justify-between bg-lightblue">
                <div className="flex flex-col text-center">
                  <p className="font-bold">9 %</p>
                  <p>Gross Yield</p>
                </div>
                <div className="flex flex-col text-center">
                  <p className="font-bold">31 %</p>
                  <p>Capital Appreciation</p>
                </div>
                <div className="flex flex-col text-center">
                  <p className="font-bold">52 %</p>
                  <p>Total ROI</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-[16rem] h-[21rem] rounded-2xl bg-green1 flex flex-col items-center justify-center hover:shadow-lg"
            data-aos="fade-left"
          >
            <div className="w-full h-full flex flex-col items-center justify-center">
              <Image src={img1} alt="hand" />
              <div className="text-center">
                <p className="font-bold">Long term capital appreciation</p>
                <p>
                  Watch your investment grow as the property value appreciates
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hard;
