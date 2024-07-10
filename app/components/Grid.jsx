import React from "react";
import Image from "next/image";
import tick from ".././assets/tick1.png"; // Replace with your tick image path
import cross from ".././assets/cross.png"; // Replace with your cross image path

const DataTable = () => {
  return (
    <div className="container mx-auto mt-16 md:mt-20 px-4 lg:px-24">
      <div className="w-full text-center mb-10">
        <p className="font-poppins text-4xl font-extrabold ">
          Fractit’s Advantage
        </p>
        <p className="font-poppins text-base font-medium text-center px-12 md:px-5 mt-4">
          The best of both worlds: Fractit Vs DeFi & Traditional Investment
        </p>
      </div>
      <div className="bg-white p-4 border-white rounded-lg">
        <div className="grid grid-cols-4 gap-2 text-xs md:text-base text-center">
          {/* Header Row */}
          <div className="flex justify-center items-center  p-4 border-white rounded-lg  bg-blue4 font-bold md:font-black">
            Aspect
          </div>
          <div className="flex justify-center items-center  p-4 border-white rounded-lg bg-pink font-bold md:font-black">
            Investing in DeFi
          </div>
          <div className="flex justify-center items-center  p-4 border-white rounded-lg bg-pink font-bold md:font-black">
            Traditional Fractional Investment
          </div>
          <div className="flex justify-center items-center  p-4 border-white rounded-lg bg-green font-bold md:font-black ">
            Fractit (Web3)
          </div>

          {/* Row 1 */}
          <div className="text-5 md:text-base flex justify-center items-center  p-4 border-white rounded-lg bg-blue4 font-semibold">
            High Liquidity
          </div>
          <div className="flex justify-center items-center  p-4 border-white rounded-lg bg-pink">
            <Image src={tick} alt="tick" width={30} height={30} />
          </div>
          <div className="flex justify-center items-center  p-4 border-white rounded-lg bg-pink">
            <Image src={cross} alt="cross" width={30} height={30} />
          </div>
          <div className="flex justify-center items-center  p-4 border-white rounded-lg bg-green">
            <Image src={tick} alt="tick" width={30} height={30} />
          </div>

          {/* Row 2 */}
          <div className="text-5 md:text-base flex justify-center items-center  p-4 border-white rounded-lg bg-blue4 font-semibold">
            Regulatory Framework
          </div>
          <div className="flex justify-center items-center  p-4 border-white rounded-lg bg-pink">
            <Image src={cross} alt="cross" width={30} height={30} />
          </div>
          <div className="flex justify-center items-center  p-4 border-white rounded-lg bg-pink">
            <Image src={tick} alt="tick" width={30} height={30} />
          </div>
          <div className="flex justify-center items-center  p-4 border-white rounded-lg bg-green">
            <Image src={tick} alt="cross" width={30} height={30} />
          </div>

          {/* Row 3 */}
          <div className="text-5 md:text-base flex justify-center items-center  p-4 border-white rounded-lg bg-blue4 font-semibold">
            Stable Return
          </div>
          <div className="flex justify-center items-center  p-4 border-white rounded-lg bg-pink">
            <Image src={cross} alt="tick" width={30} height={30} />
          </div>
          <div className="flex justify-center items-center  p-4 border-white rounded-lg bg-pink">
            <Image src={tick} alt="cross" width={30} height={30} />
          </div>
          <div className="flex justify-center items-center  p-4 border-white rounded-lg bg-green">
            <Image src={tick} alt="tick" width={30} height={30} />
          </div>

          {/* Row 4 */}
          <div className="text-5 md:text-base flex justify-center items-center  p-4 border-white rounded-lg bg-blue4 font-semibold">
            Minimal Documentation
          </div>
          <div className="flex justify-center items-center  p-4 border-white rounded-lg bg-pink">
            <Image src={tick} alt="cross" width={30} height={30} />
          </div>
          <div className="flex justify-center items-center  p-4 border-white rounded-lg bg-pink">
            <Image src={cross} alt="tick" width={30} height={30} />
          </div>
          <div className="flex justify-center items-center  p-4 border-white rounded-lg bg-green">
            <Image src={tick} alt="cross" width={30} height={30} />
          </div>

          {/* Row 5 */}
          <div className="text-5 md:text-base flex justify-center items-center  p-4 border-white rounded-lg bg-blue4 font-semibold">
            Low Transaction Cost
          </div>
          <div className="flex justify-center items-center  p-4 border-white rounded-lg bg-pink">
            <Image src={tick} alt="tick" width={30} height={30} />
          </div>
          <div className="flex justify-center items-center  p-4 border-white rounded-lg bg-pink">
            <Image src={cross} alt="cross" width={30} height={30} />
          </div>
          <div className="flex justify-center items-center  p-4 border-white rounded-lg bg-green">
            <Image src={tick} alt="tick" width={30} height={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
