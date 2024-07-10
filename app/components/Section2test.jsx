"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import hand from ".././assets/hand.png";
import img1 from ".././assets/Group 59.png";
import img2 from ".././assets/Group 60.png";
import img3 from ".././assets/Group 65.png";
import img4 from ".././assets/Group 64.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Section2test = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    // <div className="max-w-screen-xl mx-auto md:mt-32 px-4 sm:px-6 lg:px-6">
    <div className="container mx-auto md:mt-20 px-4 lg:px-24">
      <div className="md:flex md:flex-row md:gap-28">
        <div className="md:w-1/3 mt-12 md:mt-32">
          <p className="font-poppins text-4xl font-extrabold max-sm:text-center">
            Why Invest with Fractit
          </p>
          <p className="mt-8 mb-4 max-sm:text-center">
            Build Your Real Estate Investment Portfolio Today with Just $100
          </p>
        </div>
        <div
          className="md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-4"
          data-aos="fade-up"
        >
          <div className="border border-white rounded-lg bg-white flex flex-col justify-center items-center p-4">
            <div className="flex justify-center">
              <Image src={hand} alt="home" width={100} height={100} />
            </div>
            <div className="text-center mt-2">
              <p className="font-bold font-poppins">Passive Earnings</p>
              <p>
                Generate rental yields effortlessly without active oversight.
              </p>
            </div>
          </div>
          <div className="border border-white rounded-lg bg-white flex flex-col justify-center items-center p-4">
            <div className="flex justify-center">
              <Image src={img1} alt="home" width={100} height={100} />
            </div>
            <div className="text-center mt-2">
              <p className="font-bold font-poppins">Real Estate Gateway</p>
              <p>
                Access the benefits of property ownership with as low as $100.
              </p>
            </div>
          </div>
          <div className="border border-white rounded-lg bg-white flex flex-col justify-center items-center p-4">
            <div className="flex justify-center">
              <Image src={img2} alt="home" width={100} height={100} />
            </div>
            <div className="text-center mt-2">
              <p className="font-bold font-poppins">Capital Appreciation</p>
              <p>
                Benefit from historical trends of rising real estate values over
                time.
              </p>
            </div>
          </div>

          <div className="md:flex md:flex-row gap-4 md:mt-4 md:col-span-3 flex flex-col ">
            <div className="border border-white rounded-lg bg-white flex flex-col justify-center items-center  p-4 md:w-1/2">
              <div className="flex justify-center">
                <Image src={img3} alt="home" width={100} height={100} />
              </div>
              <div className="text-center mt-2">
                <p className="font-bold font-poppins">Inflation Hedge</p>
                <p>
                  Safeguard against inflation with appreciating home values and
                  rental income.
                </p>
              </div>
            </div>
            <div className="border border-white rounded-lg bg-white flex flex-col justify-center items-center  p-4 md:w-1/2 ">
              <div className="flex justify-center">
                <Image src={img4} alt="home" width={100} height={100} />
              </div>
              <div className="text-center mt-2">
                <p className="font-bold font-poppins">Diversification</p>
                <p>
                  Expand your investment portfolio by owning fractional shares
                  of real estate globally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2test;
