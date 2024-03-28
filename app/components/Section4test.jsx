"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import img1 from ".././assets/Rectangle 69.png";
import Modal from "./Modal";
import ModalBody from "./ModalBody";

const Section4test = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Function to handle opening the modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="max-w-screen-xl h-auto mx-auto flex flex-col md:flex-row justify-center items-center md:gap-[5rem] mt-10 md:mt-20 mb-10 md:mb-20 p-4">
      <div className="w-auto h-auto hover:shadow-lg ">
        <Image src={img1} alt="house" />
      </div>
      <div className="w-full lg:w-[30.8rem] h-auto lg:h-[22.47rem] gap-[2.8rem] mt-5 lg:mt-0">
        <div className="w-full h-auto md:h-[7rem]">
          <p className="font-poppins text-2xl lg:text-4xl font-extrabold max-sm:text-center">
            Real Estate Investing For Everybody.
          </p>
        </div>
        <div className="w-full h-auto">
          <p className="font-poppins text-base lg:text-xl font-medium mt-4 max-sm:mt-2 max-sm:text-center">
            Own real estate like a pro, minus the stress. Fractit simplifies
            investing by handling management & vacancy risks. Earn rental income
            or potential profit sharing, even during vacancy periods. Invest
            smarter, choose Fractit.
          </p>
        </div>
        <div className=" w-[12rem] h-12 lg:w-[14rem] lg:h-[4rem] mt-5 ml-2 lg:mt-10 rounded-md bg-darkblue text-white flex justify-center ">
          <button onClick={handleOpenModal}>START EXPLORING</button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {/* Add modal content here */}

        <ModalBody onCloseModal={handleCloseModal} />
      </Modal>
    </div>
  );
};

export default Section4test;
