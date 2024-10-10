"use client";

import "../globals.css";
import React, { useState, useEffect, use } from "react";
import Image from "next/image";
import img from "../assets/images/hero.jpeg";
import "react-toastify/dist/ReactToastify.css";
import puzzle from "../assets/images/Puzzle.svg";
import owner from "../assets/images/Users.svg";
import usdc from "../assets/images/USDC.svg";

const ExpandableSection = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center bg-blue2 rounded-md p-2">
        <h2 className="text-xl font-semibold">{title}</h2>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-2xl font-bold"
        >
          {isExpanded ? "-" : "+"}
        </button>
      </div>
      {isExpanded && <div className="mt-2">{children}</div>}
    </div>
  );
};

export default function Redeem() {
  return (
    // <>
    //   <div className="flex flex-col md:flex-row items-center justify-between max-sm:px-5">
    //     <div className="md:mr-8 md:ml-8 md:mt-[8rem] flex-shrink-0">
    //       <Image src={img} width={600} height={675} alt="home" />
    //     </div>
    //     <div className="mt-4 md:mt-[4rem] flex-grow md:mr-8">
    //       <div
    //         className="text-3xl md:text-4xl font-bold title-text mt-4 md:mt-[2rem]"
    //         style={{ color: "#2253FF" }}
    //       >
    //         Cliffton-INHP1001
    //       </div>
    //       <div>
    //         <p className="text-black font-medium mt-4">
    //           The Cliffton Valley 3BHK Condo is a luxurious property located in
    //           Shimla, Himachal Pradesh. With stunning mountain views and modern
    //           amenities, this high-end holiday home offers a unique investment
    //           opportunity. Own a fraction of this premium property and earn
    //           rental income while benefiting from potential appreciation. Invest
    //           in Cliffton Valley with FractIt.
    //         </p>
    //         {/* <div className="text-black mt-4">
    //           <p>
    //             <span className="font-bold " style={{ color: "#2253FF" }}>
    //               Property Type:
    //             </span>{" "}
    //             Holiday Home
    //           </p>
    //           <p>Condominium Bedrooms/Bathrooms: 3 Bed / 3 Bath</p>
    //           <p>
    //             Estimated APY: 18.1% (6.38% rental yield + 11.7% appreciation)
    //           </p>
    //           <p>Fractible (Token) Price: $1000 (USDC)</p>
    //           <p>Estimated Return per Fractible: $181/year</p>
    //           <p>Max Allocation: 25 Fractibles/Wallet</p>
    //         </div> */}
    //         <div className="text-black mt-4">
    //           <p>
    //             <span className="font-bold " style={{ color: "#2253FF" }}>
    //               Property Type:
    //             </span>{" "}
    //             Holiday Home
    //           </p>
    //           <p>
    //             <span className="font-bold " style={{ color: "#2253FF" }}>
    //               Condominium Bedrooms/Bathrooms:
    //             </span>{" "}
    //             3 Bed / 3 Bath
    //           </p>
    //           <p>
    //             <span className="font-bold " style={{ color: "#2253FF" }}>
    //               Estimated APY:
    //             </span>{" "}
    //             18.1% (6.38% rental yield + 11.7% appreciation)
    //           </p>
    //           <p>
    //             <span className="font-bold " style={{ color: "#2253FF" }}>
    //               Fractible (Token) Price:
    //             </span>{" "}
    //             $1000 (USDC)
    //           </p>
    //           <p>
    //             <span className="font-bold " style={{ color: "#2253FF" }}>
    //               Estimated Return per Fractible:
    //             </span>{" "}
    //             $181/year
    //           </p>
    //           <p>
    //             <span className="font-bold " style={{ color: "#2253FF" }}>
    //               Max Allocation:
    //             </span>{" "}
    //             25 Fractibles/Wallet
    //           </p>
    //         </div>
    //       </div>
    //       <div className="mt-4">
    //         <span className="text-black text-xl md:text-4xl mt-4 body-text">
    //           235/235 Minted
    //         </span>
    //       </div>
    //       <div className="flex gap-x-2 lg:gap-x-4">
    //         <div className="mt-4  flex flex-row gap-x-2">
    //           <input
    //             type="text"
    //             placeholder="Enter Amount"
    //             disabled
    //             className="w-full md:w-[15rem] text-lg font-medium font-Montechmed mt-4 md:mt-[2rem] px-4 py-2 text-center flex flex-row border items-center justify-center place-items-center gap-x-2 bg-white"
    //             style={{ color: "#2253FF" }}
    //           />
    //           <button
    //             className={`w-full md:w-[15rem] text-black text-lg font-bold title-text mt-4 md:mt-[2rem] px-4 py-2 cursor-not-allowed`}
    //             disabled
    //             style={{
    //               backgroundColor: "#2253FF",
    //             }}
    //           >
    //             MINT
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div
    //     className="pb-4 mx-10 md:mx-28 items-center justify-center mt-[4rem] flex flex-col md:flex-row border border-white gap-x-4 gradient-bg font-bold"
    //     style={{ color: "#2253FF" }}
    //   >
    //     <span className=" text-xl mt-4 body-text flex flex-col items-center">
    //       <div className="flex flex-row">
    //         <Image
    //           src={puzzle}
    //           alt="puzzle"
    //           height={30}
    //           width={30}
    //           className="mr-2 mt-[-0.5rem]"
    //         />
    //         235
    //       </div>
    //       <div>Total Fractibles</div>
    //     </span>
    //     <span className=" text-xl mt-4 body-text flex flex-col items-center">
    //       <div className="flex flex-row">
    //         <Image
    //           src={owner}
    //           alt="puzzle"
    //           height={30}
    //           width={30}
    //           className="mr-2"
    //         />
    //         17
    //       </div>
    //       <div>Total Owners</div>
    //     </span>
    //     <span className=" text-xl mt-4 body-text flex flex-col items-center">
    //       <div className="flex flex-row">
    //         <Image
    //           src={usdc}
    //           alt="puzzle"
    //           height={30}
    //           width={30}
    //           className="mr-2 "
    //         />
    //         1000
    //       </div>
    //       <div>Floor Price (USDC)</div>
    //     </span>
    //     <span className=" text-xl mt-4 body-text flex flex-col items-center">
    //       <div className="flex flex-row">
    //         <Image
    //           src={usdc}
    //           alt="puzzle"
    //           height={30}
    //           width={30}
    //           className="mr-2 "
    //         />
    //         235K
    //       </div>
    //       <div>Volume Traded (USDC)</div>
    //     </span>
    //   </div>
    // </>
    <div className="container mx-auto p-4 burnt-bg text-black">
      <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image
            src={img}
            alt="Dubai Apartment"
            width={700}
            height={400}
            className="rounded-lg mb-4 custom-image"
          />
          <div className="grid grid-cols-3 gap-2">
            <Image
              src={img}
              alt={`Dubai Apartment Image 1`}
              width={200}
              height={150}
              className="rounded"
            />
            <Image
              src={img}
              alt={`Dubai Apartment Image 2`}
              width={200}
              height={150}
              className="rounded"
            />
            <Image
              src={img}
              alt={`Dubai Apartment Image 3`}
              width={200}
              height={150}
              className="rounded"
            />
            <Image
              src={img}
              alt={`Dubai Apartment Image 4`}
              width={200}
              height={150}
              className="rounded"
            />
            <Image
              src={img}
              alt={`Dubai Apartment Image 5`}
              width={200}
              height={150}
              className="rounded"
            />
            <Image
              src={img}
              alt={`Dubai Apartment Image 6`}
              width={200}
              height={150}
              className="rounded"
            />
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">Cliffton-INHP1001</h1>
          <div className="mb-6">
            <p className="text-gray-600 mb-2">Sale Ended</p>
            <div className="flex space-x-10">
              {["Days", "hours", "minutes", "seconds"].map((unit, i) => (
                <div key={unit} className="text-center">
                  <div className="text-2xl font-bold">
                    {[0o0, 0o0, 0o0, 0o0][i]}
                  </div>
                  <div className="text-sm text-gray-500">{unit}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Amount
            </label>

            <input
              type="number"
              className="w-full text-black border border-gray1 rounded p-2 cursor-not-allowed"
              disabled
            />

            <div className="flex justify-between mt-2 ">
              <span>235/235 Minted</span>
            </div>
          </div>

          <button
            style={{ backgroundColor: "#2253FF", color: "white" }}
            className="w-full bg-blue-500 text-white py-3 rounded font-semibold cursor-not-allowed"
            disabled
          >
            {"MINT NOW"}
          </button>

          <ExpandableSection title="Description">
            <p className="text-gray-600 ml-2">
              The Cliffton Valley 3BHK Condo is a luxurious property located in
              Shimla, Himachal Pradesh. With stunning mountain views and modern
              amenities, this high-end holiday home offers a unique investment
              opportunity. Own a fraction of this premium property and earn
              rental income while benefiting from potential appreciation. Invest
              in Cliffton Valley with FractIt.
            </p>
          </ExpandableSection>

          <ExpandableSection title="Details">
            <div className=" grid ml-2 gap-y-4">
              {[
                ["Property Type:", "Holiday Home"],
                ["Condominium Bedrooms/Bathrooms:", "3 Bed / 3 Bath"],
                [
                  "Estimated APY:",
                  "18.1% (6.38% rental yield + 11.7% appreciation)",
                ],
                ["Fractible (Token) Price:", "$1000 (USDC)"],
                ["Estimated Return per Fractible:", "$181/year"],
                ["Max Allocation:", "25 Fractibles/Wallet"],
              ].map(([key, value]) => (
                <div key={key}>
                  <span className="font-medium">{key}</span> {value}
                </div>
              ))}
            </div>
          </ExpandableSection>

          <ExpandableSection title="FAQs">
            <div className="grid grid-cols-1 gap-4 ml-2">
              {[
                ["Is the property furnished?", "Yes"],
                ["Is the property pet-friendly?", "No"],
                ["Is the property smoke-free?", "Yes"],
                ["Is the property wheelchair accessible?", "No"],
              ].map(([question, answer]) => (
                <div key={question}>
                  <span className="font-medium">{question}</span>
                  <br />
                  {answer}
                </div>
              ))}
            </div>
          </ExpandableSection>
        </div>
      </main>
    </div>
  );
}
