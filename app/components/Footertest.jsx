// import React from "react";
// import Image from "next/image";
// import logo from ".././assets/logo.png";

// const Footertest = () => {
//   return (
//     <div className="flex flex-col items-center justify-center w-full h-auto bg-darkblue text-white pt-12 pb-4">
//       <div className="flex flex-wrap md:flex-row ">
//         <div className="w-[35rem] h-[6rem] gap-[1rem] flex flex-col">
//           <p className="text-4xl font-poppins font-extrabold">
//             Subscribe for updates
//           </p>
//           <p>Stay on top of the latest blog posts, news and announcements</p>
//         </div>
//         <div className="flex flex-row gap-[0.8rem]">
//           <div className="w-[21.6rem] h-[4rem] rounded-md border bg-blue border-white flex justify-start opacity-40">
//             <button>Enter Your Email</button>
//           </div>
//           <div className="w-[11rem] h-[4rem] gap-[0.5rem] bg-green1 rounded-md text-darkblue flex justify-center items-center">
//             <button>SUBSCRIBE</button>
//           </div>
//         </div>
//       </div>
//       <div className="w-full border-t border-gray my-4"></div>
//       <div className="w-full flex flex-wrap justify-between">
//         <div className="w-[13.125rem] h-[1.6rem] mb-4">
//           <Image src={logo} alt="home" />
//         </div>
//         <div className="flex-grow flex flex-wrap gap-8 mb-4">
//           <div>
//             <ul>
//               <li className="text-green1 mb-2">Links</li>
//               <li className="mb-2">Properties</li>
//               <li className="mb-2">About</li>
//               <li className="mb-1">Sell with Fractit</li>
//             </ul>
//           </div>
//           <div>
//             <ul>
//               <li className="text-green1 mb-2">Learn</li>
//               <li className="mb-2">Blogs</li>
//               <li className="mb-2">FAQs</li>
//               <li className="mb-1">Glossary</li>
//             </ul>
//           </div>
//         </div>
//         <div>
//           <ul>
//             <li className="text-green1 mb-2">Connect with us</li>
//             <li>contact@fractit.com</li>
//           </ul>
//         </div>
//       </div>

//       <div className="w-full border-t border-gray my-4"></div>
//       <div className="w-full flex justify-center">
//         <p className="font-poppins text-sm font-medium opacity-40">
//           © 2021 Revest. All rights reserved.
//         </p>
//       </div>
//     </div>
//   );
// };

//export default Footertest;
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from ".././assets/logo.png";
import axios from "axios";
const backendUrl = "http://54.89.177.81";
//const backendUrl = "http://localhost:4000";

const Footertest = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${backendUrl}/api/subscribe`, { email });
      alert("Successfully subscribed!");
    } catch (err) {
      console.error(err);
      alert("Failed to submit to waitlist");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-auto bg-darkblue text-white pt-12 pb-4">
      {/* <div className="flex flex-wrap md:flex-row justify-center md:justify-between max-w-screen-lg px-4">
        <div className="w-full md:w-[35rem] h-[6rem] gap-[1rem] flex flex-col mb-4 md:mb-0 md:mr-8">
          <p className="text-4xl font-poppins font-extrabold">
            Subscribe for updates
          </p>
          <p>Stay on top of the latest blog posts, news, and announcements</p>
        </div>
        <div className="flex flex-row gap-[0.8rem]">
          <div className="w-full md:w-[21.6rem] h-[4rem] rounded-md border bg-blue border-white flex justify-start mb-4 md:mb-0 md:mr-4 opacity-40">
            <button className="w-full">Enter Your Email</button>
          </div>
          <div className="w-full md:w-[11rem] h-[4rem] gap-[0.5rem] bg-green1 rounded-md text-darkblue flex justify-center items-center">
            <button className="w-full">SUBSCRIBE</button>
          </div>
        </div>
      </div> */}
      <div className="flex flex-col lg:flex-row justify-center md:justify-between max-w-screen-lg px-4">
        <div className="w-full md:w-[35rem] h-[6rem] gap-[1rem] flex flex-col justify-center items-start mb-4 md:mb-0 md:mr-8">
          <p className="text-2xl mg:text-3xl lg:text-4xl font-poppins font-extrabold">
            Subscribe for updates
          </p>
          <p>Stay on top of the latest blog posts, news, and announcements</p>
        </div>
        <div className="flex flex-row gap-[2rem] items-center">
          <form onSubmit={handleSubmit} className="flex items-center">
            {" "}
            {/* Ensure the form and button are in the same container */}
            <input
              type="text"
              value={email}
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full md:w-[21.6rem] h-[4rem] rounded-md border bg-blue border-gray1 flex justify-start mb-4 md:mb-0 mr-4  text-white"
            />
            <div className="w-full md:w-[11rem] h-[4rem] gap-[0.5rem] bg-green1 rounded-md text-darkblue flex justify-center items-center">
              <button type="submit" className="w-full">
                SUBSCRIBE
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="w-full border-t border-gray my-4"></div>
      <div className="w-full flex flex-wrap justify-between max-w-screen-lg px-4">
        <div className="w-full md:w-[13.125rem] h-[1.6rem] mb-4">
          <Image src={logo} alt="home" />
        </div>
        <div className="flex flex-wrap gap-8 mb-4">
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
        </div>
        <div>
          <ul>
            <li className="text-green1 mb-2">Connect with us</li>
            <li>contact@fractit.com</li>
          </ul>
        </div>
      </div>

      <div className="w-full border-t border-gray my-4"></div>
      <div className="w-full flex justify-center px-4">
        <p className="font-poppins text-sm font-medium opacity-40">
          © 2021 Revest. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footertest;
