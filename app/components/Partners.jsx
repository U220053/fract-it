import React from "react";
import Image from "next/image";
import xion from ".././assets/xion.png";
import casha from ".././assets/casha.png";
import rivera from ".././assets/rivera.png";
import earth from ".././assets/earth.png";
import polygon from ".././assets/polygon.png";

const Partners = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-6 lg:px-0 mt-16 md:mt-20 mb-16">
      <p className="w-full text-center mb-10 text-4xl font-extrabold">
        Partners & Recognitions
      </p>
      {/* <div className="flex flex-col md:flex-row justify-center items-center md:justify-between gap-x-4 "> */}
      <div className="grid grid-cols-2 md:flex md:flex-row justify-center items-center md:justify-between gap-4">
        <Image
          src={xion}
          alt="partner1"
          width={150}
          height={100}
          className="mb-2 max-sm:w-20  h-8 ml-4 md:ml-0"
        />
        <Image
          src={casha}
          alt="partner2"
          width={200}
          height={200}
          className="mb-2 w-20 h-10 md:w-32 ml-4 md:ml-0"
        />
        <Image
          src={rivera}
          alt="partner3"
          width={200}
          height={200}
          className="mb-2 w-20 h-10 md:w-32 ml-4 md:ml-0"
        />
        <Image
          src={earth}
          alt="partner4"
          width={200}
          height={200}
          className="mb-2 w-28 h-10 md:w-32 ml-4 md:ml-0"
        />
        <Image
          src={polygon}
          alt="partner5"
          width={200}
          height={200}
          className="mb-2  h-20  md:h-20 col-span-2 justify-self-center ml-[-8px] md:ml-0 mt-[-16px] md:mt-0"
        />
      </div>
    </div>
  );
};

export default Partners;
