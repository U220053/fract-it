"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import house from ".././assets/house.png";
import chakra from ".././assets/chakra.png";
import Modal from "./Modal";
import ModalBody from "./ModalBody";
import { ReactTyped } from "react-typed";

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
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="md:mx-auto lg:ml-10  lg:max-w-md md:mt-16 max-sm:mt-10">
          <div className="mb-8 ">
            <p className="text-3xl md:text-4xl lg:text-42 font-poppins font-black mb-2 lg:leading-normal">
              Dive into the World of{" "}
              <span className="w-[10rem] typewriter-container inline-block  text-3xl md:text-4xl lg:text-42 font-poppins lg:leading-normal font-black text-darkblue relative top-0 left-0">
                <ReactTyped
                  strings={[
                    "Frictionless",
                    "Simplified",
                    "Fractionalised",
                    "Tokenised",
                  ]}
                  typeSpeed={150}
                  backSpeed={100}
                  loop
                />
              </span>
              {""}
            </p>

            <p className="text-3xl md:text-4xl lg:text-42 font-poppins lg:leading-normal font-black mb-2">
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
            <div
              className=" md:w-[16.25rem] md:h-[3.8rem] rounded-md bg-lightblue 
  text-black font-bold flex items-center justify-center"
            >
              <div className="md:px-2 py-1">
                <Image src={chakra} width={50} height={20} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <p>Total Value Locked</p>
                <p className="text-darkblue ">$235,000</p>
              </div>
            </div>
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

export default Hero;
