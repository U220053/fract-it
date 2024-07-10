"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import hands from ".././assets/Group 41.png";
import img1 from ".././assets/Group 43.png";
import img2 from ".././assets/Rectangle 44.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Hard = () => {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 2000,
  //   });
  // }, []);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });

    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1024); // Assuming large screen width is 1024px, adjust as needed
    };

    // Initial check
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="w-full bg-blue my-20 pb-20 mx-auto relative p-2 overflow-hidden">
      <div className="p-8 text-center text-white">
        <p className="font-semibold md:font-extrabold text-2xl md:text-3xl lg:text-5xl mb-8">
          So, how will you generate capital from FNFT?
        </p>
        <p className="font-base text-xl">
          Fractit was built to empower everyone to own and build wealth through
          real estate
        </p>
      </div>
      {isLargeScreen && (
        <React.Fragment>
          <div className="w-[18.18rem] h-[18.23rem] absolute left-[18rem] top-[12rem] bg-lightblue opacity-40 "></div>
          <div className="w-[18.5rem] h-[18.23rem] absolute left-[60rem] top-[12rem] bg-lightblue opacity-40 "></div>
          <div className="w-[18.5rem] h-[18.23rem] absolute left-[-1rem] top-[32rem]  bg-lightblue opacity-40 "></div>
          <div className="w-[18.5rem] h-[18.23rem] absolute left-[38rem] top-[32rem]  bg-lightblue opacity-40 "></div>
          <div className="w-[18.5rem] h-[18.23rem] absolute left-[76.2rem] top-[32rem]  bg-lightblue opacity-40 "></div>
        </React.Fragment>
      )}
      {/* <div className="w-[18.18rem] h-[18.23rem] absolute left-[18rem] top-[12rem] bg-lightblue opacity-40 "></div>
      <div className="w-[18.5rem] h-[18.23rem] absolute left-[60rem] top-[12rem] bg-lightblue opacity-40 "></div>
      <div className="w-[18.5rem] h-[18.23rem] absolute left-[-1rem] top-[32rem]  bg-lightblue opacity-40 "></div>
      <div className="w-[18.5rem] h-[18.23rem] absolute left-[38rem] top-[32rem]  bg-lightblue opacity-40 "></div>
      <div className="w-[18.5rem] h-[18.23rem] absolute left-[76.2rem] top-[32rem]  bg-lightblue opacity-40 "></div> */}
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-12">
        <div
          className="w-auto sm:w-1/2 md:w-1/3 md:h-auto rounded-2xl bg-green1 flex flex-col items-center justify-center hover:shadow-lg mb-8 md:mb-0 p-8"
          data-aos="fade-up"
        >
          <div className="w-full flex flex-col items-center justify-center">
            <Image src={hands} alt="hand" />
            <div className="text-center">
              <p className="font-bold">Monthly rental yield</p>
              <p>
                Steady passive earnings generated through monthly rental yeilds.
              </p>
            </div>
          </div>
        </div>
        <div
          className=" md:w-1/3 md:h-auto  bg-white flex flex-col items-center justify-center hover:shadow-lg mb-8 md:mb-0"
          style={{ borderRadius: "2rem" }}
        >
          <div className="w-full flex flex-col">
            <Image
              src={img2}
              alt="hand"
              className="object-cover w-full rounded-t-3xl"
              width={400}
              //   height={300}
            />
            <div className="m-4">
              <p className="font-bold">
                1 Bed in Zaya Hameni Tower, Jumeirah Village Circle
              </p>
            </div>
            <div className="mt-4 mr-4 ml-4 flex flex-row justify-between">
              {" "}
              <p className="text-darkblue font-extrabold">453,000 USDC </p>{" "}
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
          className=" w-auto sm:w-1/2  md:w-1/3 md:h-auto rounded-2xl bg-green1 flex flex-col items-center justify-center hover:shadow-lg p-8"
          data-aos="fade-up"
        >
          <div className="w-full  flex flex-col items-center justify-center">
            <Image src={img1} alt="hand" />
            <div className="text-center">
              <p className="font-bold">Long term capital appreciation</p>
              <p>
                Experience long-term wealth accumulation as your property gains
                value over time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hard;
