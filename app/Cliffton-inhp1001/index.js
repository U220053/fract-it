"use client";

import "../globals.css";
import Image from "next/image";
import img from "../assets/images/hero.jpeg";
import "react-toastify/dist/ReactToastify.css";
import puzzle from "../assets/images/Puzzle.svg";
import owner from "../assets/images/Users.svg";
import usdc from "../assets/images/USDC.svg";

export default function Redeem() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between max-sm:px-5">
        <div className="md:mr-8 md:ml-8 md:mt-[8rem] flex-shrink-0">
          <Image src={img} width={600} height={675} alt="home" />
        </div>
        <div className="mt-4 md:mt-[4rem] flex-grow md:mr-8">
          <div
            className="text-3xl md:text-4xl font-bold title-text mt-4 md:mt-[2rem]"
            style={{ color: "#2253FF" }}
          >
            Cliffton-INHP1001
          </div>
          <div>
            <p className="text-black font-medium mt-4">
              The Cliffton Valley 3BHK Condo is a luxurious property located in
              Shimla, Himachal Pradesh. With stunning mountain views and modern
              amenities, this high-end holiday home offers a unique investment
              opportunity. Own a fraction of this premium property and earn
              rental income while benefiting from potential appreciation. Invest
              in Cliffton Valley with FractIt.
            </p>
            {/* <div className="text-black mt-4">
              <p>
                <span className="font-bold " style={{ color: "#2253FF" }}>
                  Property Type:
                </span>{" "}
                Holiday Home
              </p>
              <p>Condominium Bedrooms/Bathrooms: 3 Bed / 3 Bath</p>
              <p>
                Estimated APY: 18.1% (6.38% rental yield + 11.7% appreciation)
              </p>
              <p>Fractible (Token) Price: $1000 (USDC)</p>
              <p>Estimated Return per Fractible: $181/year</p>
              <p>Max Allocation: 25 Fractibles/Wallet</p>
            </div> */}
            <div className="text-black mt-4">
              <p>
                <span className="font-bold " style={{ color: "#2253FF" }}>
                  Property Type:
                </span>{" "}
                Holiday Home
              </p>
              <p>
                <span className="font-bold " style={{ color: "#2253FF" }}>
                  Condominium Bedrooms/Bathrooms:
                </span>{" "}
                3 Bed / 3 Bath
              </p>
              <p>
                <span className="font-bold " style={{ color: "#2253FF" }}>
                  Estimated APY:
                </span>{" "}
                18.1% (6.38% rental yield + 11.7% appreciation)
              </p>
              <p>
                <span className="font-bold " style={{ color: "#2253FF" }}>
                  Fractible (Token) Price:
                </span>{" "}
                $1000 (USDC)
              </p>
              <p>
                <span className="font-bold " style={{ color: "#2253FF" }}>
                  Estimated Return per Fractible:
                </span>{" "}
                $181/year
              </p>
              <p>
                <span className="font-bold " style={{ color: "#2253FF" }}>
                  Max Allocation:
                </span>{" "}
                25 Fractibles/Wallet
              </p>
            </div>
          </div>
          <div className="mt-4">
            <span className="text-black text-xl md:text-4xl mt-4 body-text">
              235/235 Minted
            </span>
          </div>
          <div className="flex gap-x-2 lg:gap-x-4">
            <div className="mt-4  flex flex-row gap-x-2">
              <input
                type="text"
                placeholder="Enter Amount"
                disabled
                className="w-full md:w-[15rem] text-lg font-medium font-Montechmed mt-4 md:mt-[2rem] px-4 py-2 text-center flex flex-row border items-center justify-center place-items-center gap-x-2 bg-white"
                style={{ color: "#2253FF" }}
              />
              <button
                className={`w-full md:w-[15rem] text-black text-lg font-bold title-text mt-4 md:mt-[2rem] px-4 py-2 cursor-not-allowed`}
                disabled
                style={{
                  backgroundColor: "#2253FF",
                }}
              >
                MINT
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="pb-4 mx-10 md:mx-28 items-center justify-center mt-[4rem] flex flex-col md:flex-row border border-white gap-x-4 gradient-bg font-bold"
        style={{ color: "#2253FF" }}
      >
        <span className=" text-xl mt-4 body-text flex flex-col items-center">
          <div className="flex flex-row">
            <Image
              src={puzzle}
              alt="puzzle"
              height={30}
              width={30}
              className="mr-2 mt-[-0.5rem]"
            />
            235
          </div>
          <div>Total Fractibles</div>
        </span>
        <span className=" text-xl mt-4 body-text flex flex-col items-center">
          <div className="flex flex-row">
            <Image
              src={owner}
              alt="puzzle"
              height={30}
              width={30}
              className="mr-2"
            />
            17
          </div>
          <div>Total Owners</div>
        </span>
        <span className=" text-xl mt-4 body-text flex flex-col items-center">
          <div className="flex flex-row">
            <Image
              src={usdc}
              alt="puzzle"
              height={30}
              width={30}
              className="mr-2 "
            />
            1000
          </div>
          <div>Floor Price (USDC)</div>
        </span>
        <span className=" text-xl mt-4 body-text flex flex-col items-center">
          <div className="flex flex-row">
            <Image
              src={usdc}
              alt="puzzle"
              height={30}
              width={30}
              className="mr-2 "
            />
            235K
          </div>
          <div>Volume Traded (USDC)</div>
        </span>
      </div>
    </>
  );
}
