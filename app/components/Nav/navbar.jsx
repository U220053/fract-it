import React from "react";
import Image from "next/image";
import pallad from "../../assets/images/fractitilogo.png";
import smallImage from "../../assets/images/fractitilogo.png";

function NavBar() {
  return (
    <div
      className="flex  border-gray-100 h-20  border-opacity-10 items-center justify-between gap-x-4 border-l px-4 lg:px-10 py-4 z-50 "
      // style={{ backgroundColor: "#272315" }}
    >
      <div className="flex items-center gap-x-4">
        {/* <div className="w-full  md:block  rounded-xl ">
          <Image src={pallad} alt="btc" width={150} />
        </div> */}
        {/* Display small image on small screens */}
        <div className="w-full md:hidden rounded-xl">
          <Image src={smallImage} alt="Small Screen Image" />
        </div>
        {/* Display large image on medium and larger screens */}
        <div className="hidden md:block rounded-xl">
          <Image src={pallad} alt="Large Screen Image" width={150} />
        </div>
      </div>
      {/* <button className="flex items-center gap-x-4 text-black font-bold cursor-not-allowed">
        <CustomConnectButton /> 
       Connect Wallet       </button>  */}
      <button
        className="w-[10rem] h-[3rem] md:w-[11.25rem] md:h-[4rem]  rounded-md mt-4 md:mt-10  text-center text-white cursor-not-allowed"
        style={{ backgroundColor: "#2253FF" }}
        disabled
      >
        Connect Wallet
      </button>
    </div>
  );
}

export default NavBar;
