import React from "react";
import Image from "next/image";
import logo from ".././assets/logo.png";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-auto bg-darkblue text-white pt-12 pb-4">
      <div className="flex flex-row gap-[10rem]">
        <div className="w-[35rem] h-[6rem] gap-[1rem] flex flex-col">
          <p className="text-4xl font-poppins font-extrabold">
            Subscribe for updates
          </p>
          <p>Stay on top of the latest blog posts, news and announcements</p>
        </div>
        <div className="flex flex-row w-[33.3rem] h-[4rem] gap-[0.8rem]">
          <div className="w-[21.6rem] h-[4rem] rounded-md border bg-blue border-white flex justify-start opacity-40">
            <button>Enter Your Email</button>
          </div>
          <div className="w-[11rem] h-[4rem] gap-[0.5rem] bg-green1 rounded-md text-darkblue flex justify-center items-center">
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <div className="w-full border-t border-gray my-4"></div>
      <div className="w-[71.5rem] h-[7.6rem] flex justify-between">
        <div className="w-[13.125rem] h-[1.6rem]">
          <Image src={logo} alt="home" />
        </div>
        <div>
          <ul>
            <li className="text-green1 mb-2">Links</li>
            <li className="mb-2">Properties</li>
            <li className="mb-2">About</li>
            <li className="mb-1">Sell with Fractit</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="text-green1 mb-2">Learn</li>
            <li className="mb-2">Blogs</li>
            <li className="mb-2">FAQs</li>
            <li className="mb-1">Glossary</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="text-green1 mb-2">Connect with us</li>
            <li>contact@fractit.com</li>
          </ul>
        </div>
      </div>

      <div className="w-full border-t border-gray my-4"></div>
      <div className="w-full  flex justify-center mb-0">
        <p className="font-poppins text-sm font-medium opacity-40">
          © 2021 Revest. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
