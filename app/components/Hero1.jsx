"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import house from ".././assets/house.png";

const Hero = () => {
  const [typewriterLoaded, setTypewriterLoaded] = useState(false);

  useEffect(() => {
    import("react-typewriter-effect").then(() => {
      setTypewriterLoaded(true);
    });
  }, []);

  return (
    <div className="w-full max-w-screen-xl mx-auto px-6 lg:px-0 bg-bluelight overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="ml-10">
          <div className="mb-8">
            <p className="text-lg md:text-3xl lg:text-4xl font-poppins leading-normal font-black">
              Dive into the World of
            </p>
            <div className="typewriter-container text-xl md:text-3xl lg:text-4xl">
              {typewriterLoaded && <TypewriterText />}
            </div>
            <p className="text-xl md:text-3xl lg:text-4xl font-poppins leading-normal font-black">
              Real Estate Investment
            </p>
          </div>
          <div className="mb-8">
            <p className="text-sm font-poppins leading-normal">
              Start earning rental yield and capital growth with our
              property-backed tokenised investments with benefits of DeFi
            </p>
          </div>
          <div>
            {/* <button className="w-full md:w-auto h-[62px] rounded-md bg-black text-white font-bold">
              Invest Now
            </button> */}
            <button className="w-full md:w-[16.25rem] h-[3.8rem] rounded-md bg-black text-white font-bold">
              Join Waitlist
            </button>
          </div>
        </div>
        <div className="relative h-96 lg:h-auto w-full">
          <Image src={house} alt="home" />
        </div>
      </div>
    </div>
  );
};

const TypewriterText = () => {
  const [textIndex, setTextIndex] = useState(0);
  const dataText = [
    "Frictionless",
    "Simplified",
    "Fractionalised",
    "Tokenised",
  ];

  useEffect(() => {
    let timer;
    if (textIndex < dataText.length) {
      // Display the current word
      setText(dataText[textIndex]);
      // Set a timer to clear the current word after 1000ms
      timer = setTimeout(() => {
        setText("");
        // Increment the text index to move to the next word
        setTextIndex((prevIndex) => (prevIndex + 1) % dataText.length);
      }, 2000);
    }
    return () => clearTimeout(timer); // Clear the timer when component unmounts or text index changes
  }, [textIndex]);

  const [text, setText] = useState("");
  return (
    <p className="text-xl md:text-3xl lg:text-4xl font-poppins leading-normal font-black text-darkblue relative top-0 left-0">
      {text}
    </p>
  );
};

export default Hero;
