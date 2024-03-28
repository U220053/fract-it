"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import house from ".././assets/house.png";
import Modal from "./Modal";
import ModalBody from "./ModalBody";

const Hero = () => {
  const [typewriterLoaded, setTypewriterLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    import("react-typewriter-effect").then(() => {
      setTypewriterLoaded(true);
    });
  }, []);

  // Function to handle opening the modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto px-6 lg:px-0 rounded-3xl bg-bluelight overflow-hidden">
      {/* <div className="grid grid-cols-1 lg:grid-cols-2   items-center"> */}
      <div className="flex flex-col lg:flex-row items-center justify-between ">
        <div className="md:mx-auto lg:ml-10  lg:max-w-md">
          <div className="mb-8">
            <p className="text-xl md:text-4xl lg:text-5xl font-poppins leading-loose font-black mb-2 ">
              {/* Dive into the World of
              {typewriterLoaded && <TypewriterText />}
              Real Estate Investment */}
              Dive into the World of{" "}
              <span className="typewriter-container inline-block">
                {typewriterLoaded && <TypewriterText />}
              </span>{" "}
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
            <button
              onClick={handleOpenModal}
              className="w-[10rem] h-[2.8rem] md:w-[16.25rem] md:h-[3.8rem] rounded-md bg-black text-white font-bold"
            >
              Join Waitlist
            </button>
          </div>
        </div>

        <div className="relative h-auto  w-full ">
          <Image
            src={house}
            alt="home"
            layout="responsive"
            width={550}
            height={450}
          />
        </div>
      </div>

      {/* Render the modal only if isModalOpen is true */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {/* Add modal content here */}

        <ModalBody onCloseModal={handleCloseModal} />
      </Modal>
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
    <p className="text-xl md:text-4xl lg:text-5xl font-poppins leading-normal font-black text-darkblue relative top-0 left-0">
      {text}
    </p>
  );
};

export default Hero;
