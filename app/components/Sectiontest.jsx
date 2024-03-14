"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import tick from ".././assets/tick.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Sectiontest = () => {
  const [sliderValue, setSliderValue] = useState(0);

  useEffect(() => {
    const lightBlue = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--dark-blue");
    const darkBlue = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--light-blue");
    const color = `linear-gradient(90deg, ${lightBlue} ${sliderValue}%, ${darkBlue} ${sliderValue}%)`;
    const slider = document.getElementById("slider");
    slider.style.background = color;
  }, [sliderValue]);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="max-w-screen-xl md:mt-32 flex flex-col md:flex-row justify-between m-auto p-7">
      {/* <div className="w-4/5 md:w-15 h-[28px] gap-4"> */}
      <div className="w-full md:w-4/5 h-auto md:mr-10 mb-10 md:mb-0">
        <div className="w-4/5 h-8">
          <p className=" text-2xl sm:text-3xl  lg:text-4xl font-poppins font-black">
            Get rewarded as you invest
          </p>
        </div>
        <div className="w-4/5 mt-16 mb-8">
          <p>
            The more you invest, the more you get! All investors are
            automatically enrolled in our membership club, with rewards starting
            from only AED 500 invested
          </p>
        </div>
        <div className="w-4/5   flex justify-between mb-2">
          <div>
            <p>How much do you want to invest?</p>
          </div>
          <div>
            <p className="font-black">USDT 200</p>
          </div>
        </div>
        <div className="w-4/5">
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            className="slider appearance-none w-full h-3 bg-blue-100 rounded-full outline-2"
            id="slider"
            value={sliderValue}
            onChange={handleSliderChange}
          />
        </div>
      </div>

      <div
        // className="w-full md:w-[500px] h-auto rounded-2xl bg-white mt-10 md:mt-0"
        className="w-full md:w-[500px] h-auto rounded-2xl bg-white mt-10 md:mt-0"
        data-aos="fade-up"
      >
        <div className="p-6 md:p-8">
          <div className="mb-12">
            <div className="flex justify-between items-center gap-2">
              <p className="text-3xl text-blue font-poppins font-black">PLUS</p>
              <div>
                <p className="text-sm font-poppins">When you invest</p>
                <p className="text-lg font-black font-poppins">
                  USDT 200 or more
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center mb-2">
              <Image src={tick} alt="home" />
              <p className="text-sm font-poppins ml-2">
                USDT 20 for each qualified referral
              </p>
            </div>
            <div className="flex items-center mb-2">
              <Image src={tick} alt="home" />
              <p className="text-sm font-poppins ml-2">
                1% cashback equivalent on every investment
              </p>
            </div>
            <div className="flex items-center">
              <Image src={tick} alt="home" />
              <p className="text-sm font-poppins ml-2">Welcome gift pack</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sectiontest;
