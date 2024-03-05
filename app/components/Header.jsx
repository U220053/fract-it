import React from "react";
import Image from "next/image";
import logo from ".././assets/logomain.png";
const Header = () => {
  return (
    <div className=" h-[4rem] top-[1.4rem] left-[3.5rem] flex justify-between m-20 mt-0">
      <div className="w-[10rem] h-[2rem] mt-14">
        <Image src={logo} alt="home" />
      </div>
      <div className="w-[11.25rem] h-[4rem] bg-darkblue rounded-md mt-10">
        <button></button>
      </div>
    </div>
  );
};

export default Header;
