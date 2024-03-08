"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import tick from ".././assets/tick.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Section = () => {
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
    <div className="w-73 h-[300px] flex justify-between m-20">
      <div className="w-30 h-[28px] gap-4">
        <div className="w-30 h-8">
          <div className="w-[32rem] h-8">
            <p className="text-5xl font-poppins font-black">
              Get rewarded as you invest
            </p>
          </div>
          <div className="w-[28rem] h-[5rem] mt-20">
            <p>
              The more you invest, the more you get! All investors are
              automatically enrolled in our membership club, with rewards
              starting from only AED 500 invested
            </p>
          </div>
        </div>
        <div className="w-[30rem] h-[3rem] mt-[12rem] flex justify">
          <div className="w-[24rem] h-[1.5rem] ">
            <p>How much do you want to invest?</p>
          </div>
          <div className="w-[6rem] h-[1.75rem]">
            <p className="font-black">USDT 200</p>
          </div>
        </div>
        <div>
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
        className="w-[500px] h-23  rounded-2xl bg-white "
        data-aos="fade-left"
      >
        <div className="w-31 h-15 mt-12 mb-20 gap-4">
          <div className="w-31 h-4 gap-11 flex flex-wrap">
            <div className="w-9 h-4 ml-12 mr-20 text-3xl text-blue font-poppins font-black">
              <p>PLUS</p>
            </div>
            <div className="flex flex-col w-15 h-4 gap-2 ml-20 mr-1">
              <div className=" h-2 mb-2">
                <p className="text-sm font-poppins">When you invest</p>
              </div>
              <div className=" h-2">
                <p className="text-lg font-black font-poppins">
                  USDT 200 or more
                </p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div className="w-31 h-8 ml-10">
          <div className="flex mb-2">
            <Image src={tick} alt="home" />
            <p className="text-sm font-poppins mr-2 ml-2">
              USDT 20 for each qualified referral
            </p>
          </div>
          <div className="flex mb-2">
            <Image src={tick} alt="home" />
            <p className="text-sm font-poppins mr-2 ml-2">
              1% cashback equivalent on every investment
            </p>
          </div>
          <div className="flex mb-2">
            <Image src={tick} alt="home" />
            <p className="text-sm font-poppins mr-2 ml-2">Welcome gift pack</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
