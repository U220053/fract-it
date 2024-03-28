"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from ".././assets/logo.png";
import facebook from ".././assets/facebook.png";
import youtube from ".././assets/youtube.png";
import insta from ".././assets/insta.png";

const Foot = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // State to track submission status

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Set isSubmitting to true when submission starts
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbzeceyW1-G2GBkny10Z9SzwxojCjVWaOgBXwTAkKkDUfnvzE88D_s3zJ_3kuerFWCsMyw/exec",
        // "https://script.google.com/macros/s/AKfycbwZ66ergkdARkpJU_GC1_AXOKGg6VZC4syYpfsEF2G_lNLD_KWgTA0yXIoq4o5bqSQ_/exec",
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
      alert("Failed to submit ");
    } finally {
      setIsSubmitting(false); // Set isSubmitting back to false when submission completes
    }
  };

  return (
    <div className="flex flex-col  w-full h-auto  bg-darkblue text-white pt-12 pb-4 md:pl-16 md:pr-20">
      <div className="flex flex-col lg:flex-row justify-between md:justify-between  px-4 md:mb-12">
        <div className="w-full  h-[6rem] gap-[1rem] flex flex-col justify-center  mb-4 md:mb-0 md:mr-8">
          <p className="text-2xl mg:text-3xl lg:text-5xl font-poppins font-extrabold">
            Subscribe for updates
          </p>
          <p>Stay on top of the latest blog posts, news, and announcements</p>
        </div>
        <div className="flex flex-row gap-[2rem] justify-center">
          <form onSubmit={handleSubmit} className="flex ">
            <input
              type="text"
              value={email}
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full md:w-[21.6rem] h-[4rem] rounded-md border bg-blue border-gray1 flex justify-start mb-4 md:mb-0 mr-4  text-white"
            />
            <div className="w-full md:w-[11rem] h-[4rem] gap-[0.5rem] bg-green1 rounded-md text-darkblue flex justify-center items-center">
              {/* Change button text based on isSubmitting state */}
              <button type="submit" className="w-full">
                {isSubmitting ? "Submitting..." : "SUBSCRIBE"}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="w-full border-t border-gray my-4"></div>
      <div className="w-full flex max-sm:flex-wrap justify-between px-4 md:my-12">
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
          © 2024 Fractit. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Foot;
