import React from "react";
import Image from "next/image";
import logo from ".././assets/logomain.png";

const Header = () => {
  return (
    //  <div className=" h-[4rem] top-[1.4rem] left-[3.5rem] flex justify-between m-20 mt-0">
    <div className="h-auto top-[1.4rem] left-[3.5rem] flex justify-between mx-8  mb-2 mt-[-1rem] xl:mx-32 md:mb-8 md:mt-0">
      <div className="w-[10rem] h-[2rem] mt-14">
        <Image src={logo} alt="home" />
      </div>
      <div className="w-[11.25rem] h-[4rem] bg-darkblue rounded-md mt-10 max-sm:hidden text-center text-white">
        {/* <button></button> */}
        <a
          href="https://fractits-organization.gitbook.io/fractit/"
          className="inline-block w-full h-full"
        >
          <button className="font-extrabold flex justify-center items-center px-8 py-5">
            Litepaper/Docs
          </button>
        </a>
      </div>
    </div>
  );
};

export default Header;
