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
import facebook from ".././assets/facebook.png";
import youtube from ".././assets/youtube.png";
import insta from ".././assets/insta.png";

import axios from "axios";
const backendUrl = "http://54.89.177.81";
//const backendUrl = "http://localhost:4000";

const Footertest = () => {
  const [email, setEmail] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.post(`${backendUrl}/api/subscribe`, { email });
  //     alert("Successfully subscribed!");
  //   } catch (err) {
  //     console.error(err);
  //     alert("Failed to submit to waitlist");
  //   }
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // Retrieve existing emails from localStorage or initialize an empty array
  //   const existingEmails = JSON.parse(localStorage.getItem("emails")) || [];

  //   // Add new email to the array
  //   const updatedEmails = [...existingEmails, email];

  //   // Save the updated array back to localStorage
  //   localStorage.setItem("emails", JSON.stringify(updatedEmails));

  //   alert("Successfully subscribed!");
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwZ66ergkdARkpJU_GC1_AXOKGg6VZC4syYpfsEF2G_lNLD_KWgTA0yXIoq4o5bqSQ_/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
          mode: "no-cors",
        }
      );
      alert("Successfully subscribed!");
    } catch (err) {
      console.error(err);
      alert("Failed to submit to Google Sheets");
    }
  };

  return (
    // items-center justify-center
    <div className="flex flex-col  w-full h-auto  bg-darkblue text-white pt-12 pb-4 md:pl-16 md:pr-20">
      {/* max-w-screen-lg */}
      <div className="flex flex-col lg:flex-row justify-between md:justify-between  px-4 md:mb-12">
        {/* md:w-[35rem] items-start*/}
        <div className="w-full  h-[6rem] gap-[1rem] flex flex-col justify-center  mb-4 md:mb-0 md:mr-8">
          <p className="text-2xl mg:text-3xl lg:text-5xl font-poppins font-extrabold">
            Subscribe for updates
          </p>
          <p>Stay on top of the latest blog posts, news, and announcements</p>
        </div>
        <div className="flex flex-row gap-[2rem] justify-center">
          <form onSubmit={handleSubmit} className="flex ">
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
      {/* max-w-screen-lg */}
      <div className="w-full flex max-sm:flex-wrap justify-between px-4 md:my-12">
        {/* w-full */}
        <div className=" md:w-[13.125rem] h-[1.6rem] mb-4 ">
          <Image src={logo} alt="home" />
        </div>
        <div className="flex flex-wrap justify-between gap-8 lg:gap-20 xl:gap-60 mb-4">
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
              <div className="flex flex-row gap-4 mt-2">
                <Image src={facebook} alt="fb" />
                <Image src={youtube} alt="fb" />
                <Image src={insta} alt="fb" />
              </div>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-gray my-4"></div>
      <div className="w-full flex justify-center px-4">
        <p className="font-poppins text-sm font-medium opacity-40">
          © 2024 Fractit. All rights reserved | Entravy Pvt. Ltd.
        </p>
      </div>
    </div>
  );
};

export default Footertest;
