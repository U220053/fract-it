"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import img1 from ".././assets/property1.webp";
import property2 from ".././assets/property2.jpg";
import property3 from ".././assets/property3.webp";
import property4 from ".././assets/property4.webp";
import img2 from ".././assets/icons8-bed-24.png";
import india from ".././assets/icons8-india-48.png";
import canada from ".././assets/icons8-canada-48.png";
import dubai from ".././assets/icons8-united-arab-emirates-48.png";
import london from ".././assets/icons8-united-kingdom-48.png";
import lock from ".././assets/lock.png";
import Modal from "./Modal";
import ModalBody from "./ModalBody";
import "./Property.css";
import Link from "next/link";
import "../Cliffton-inhp1001/page";

// Sample data array containing property information
const properties = [
  {
    image: img1,
    location: "Shimla",
    title: "3 BHK Luxury Apartment in Cliffton Valley - Shimla",
    price: "235,000 USDC",
    investors: "17 investors",
    apy: "12.07%",
    treasuryValue: "235,000 USDC",
    value: "3",
    img: india,
    type: " Holiday Home",
    text: "This property is coming soon",
  },

  {
    image: property3,
    location: "Toronto",
    title: "1 BHK Apartment in 1 BLOOR ST E - Toronto",
    price: "1,800 USDC",
    investors: "182 investors",
    apy: "5.95%",
    treasuryValue: "$17,200.75",
    value: "1",
    img: canada,
    type: "Rental",
    text: "Coming soon",
  },
  {
    image: property2,
    location: "Dubai",
    title: "2 BHK Apartment in Princess Tower - Dubai Marina",
    price: "2,200 USDC",
    investors: "215 investors",
    apy: "5.80%",
    treasuryValue: "$21,500.50",
    value: "2",
    img: dubai,
    type: "Rental",
    text: "Coming soon",
  },
  {
    image: property4,
    location: "London",
    title: "2 BHK Apartment in One Park Drive - London",
    price: "3,500 USDC",
    investors: "400 investors",
    apy: "6.20%",
    treasuryValue: "$35,000.00",
    value: "2",
    img: london,
    type: "Rental",
    text: "Coming soon",
  },
];

const Propertytest = () => {
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
    <div className="container mx-auto px-4  lg:px-24">
      <div className="flex justify-between items-center my-8">
        <h1 className="text-3xl font-poppins font-extrabold">
          Featured Properties
        </h1>
        <div className="border border-gray-400 rounded-md px-4 py-2">
          <button onClick={handleOpenModal}>
            <p className="text-sm font-poppins font-bold">
              EXPLORE ALL PROPERTIES
            </p>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 rounded-3xl lg:grid-cols-2 gap-10">
        {/* Map over properties array to render each property */}
        {properties.map((property, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-md"
          >
            <div className="h-56 md:h-64 relative">
              <Image
                src={property.image}
                alt="home"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <p className="flex flex-row text-sm font-poppins leading-4 gap-2">
                {" "}
                <Image
                  src={img2}
                  alt="home"
                  width="20"
                  height="10"
                  style={{ marginTop: "-5px" }}
                />
                {property.value} |
                <Image
                  src={property.img}
                  alt="home"
                  width="20"
                  height="10"
                  style={{ marginTop: "-5px" }}
                />{" "}
                {property.location} | {property.type}
              </p>
              <p className="text-sm font-poppins leading-4 mt-2 font-bold">
                {property.title}
              </p>
              {/* <div className="container">
                <div className="glass"></div>
                <div className="text-overlay">
                  <p className="text-center">{property.text}</p>
                  {index === 0 && (
                    // <button className="bg-blue w-full text-white px-4 py-2 rounded-md font-bold flex justify-center items-center mt-2">
                    //   Join Waitlist
                    // </button>
                    <button
                      onClick={handleOpenModal}
                      className="bg-blue w-full text-white px-4 py-2 rounded-md font-bold flex justify-center items-center mt-2"
                      // className="w-full md:w-[16.25rem] h-[3.8rem] rounded-md bg-black text-white font-bold"
                    >
                      Join Waitlist
                    </button>
                  )}
                  {index !== 0 && (
                    <Image
                      src={lock}
                      className="ml-12 max-sm:ml-10"
                      alt="alt"
                    />
                  )}
                </div>
                <div className="flex justify-between items-center mt-4 ">
                  <p className="text-sm font-poppins leading-4 font-bold text-blue-700">
                    {property.price}
                  </p>
                  <p className="text-xs font-poppins leading-4">
                    {property.investors}
                  </p>
                </div>
                <div className="mt-4 bg-green">
                  <div className=" rounded-md text-xs text-black px-4 py-2 flex justify-between">
                    <p>APY</p>
                    <p className="font-bold">{property.apy}</p>
                  </div>
                  <div className=" rounded-md text-xs text-black mt-2 px-4 py-2 flex justify-between">
                    <p>VALUE IN TREASURY</p>
                    <p className="font-bold">{property.treasuryValue}</p>
                  </div>
                </div>

                <div className="mt-4 flex justify-between">
                  <button className="bg-blue  text-white px-4 py-2 rounded-md font-bold">
                    Invest Now
                  </button>
                  <p className="text-xs font-bold font-poppins leading-4 cursor-pointer">
                    DETAILS
                  </p>
                </div>
              </div> */}
              <div className="container">
                {index !== 0 && (
                  <>
                    <div className="glass"></div>
                    <div className="text-overlay">
                      <p className="text-center">{property.text}</p>
                      <Image
                        src={lock}
                        className="ml-12 max-sm:ml-10"
                        alt="alt"
                      />
                    </div>
                  </>
                )}
                <div className="flex justify-between items-center mt-4 ">
                  <p className="text-sm font-poppins leading-4 font-bold text-blue-700">
                    {property.price}
                  </p>
                  <p className="text-xs font-poppins leading-4">
                    {property.investors}
                  </p>
                </div>
                <div className="mt-4 bg-green">
                  <div className=" rounded-md text-xs text-black px-4 py-2 flex justify-between">
                    <p>APY</p>
                    <p className="font-bold">{property.apy}</p>
                  </div>
                  <div className=" rounded-md text-xs text-black mt-2 px-4 py-2 flex justify-between">
                    <p>CURRENT PRICE</p>
                    <p className="font-bold">{property.treasuryValue}</p>
                  </div>
                </div>
                <div className="mt-4 flex justify-between">
                  {/* <button className="bg-blue  text-white px-10 md:px-20 py-2 md:py-4 rounded-md font-bold"> */}
                  <button
                    className="bg-blue text-white px-10 md:px-20 py-2 md:py-4 rounded-md font-bold  cursor-not-allowed"
                    disabled
                  >
                    Sold Out
                  </button>
                  <Link href="/Cliffton-inhp1001">
                    <button className="text-xs md:text-sm font-bold font-poppins leading-4 cursor-pointer mr-10 md:mr-20 mt-2 md:mt-4">
                      DETAILS
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {/* Add modal content here */}

        <ModalBody onCloseModal={handleCloseModal} />
      </Modal>
    </div>
  );
};

export default Propertytest;
