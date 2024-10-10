"use client";
import React from "react";

import NavBar from "../components/Nav/navbar";

import Redeem from "./index";

export default function Home() {
  return (
    // h-fit
    <div
      className="min-h-screen pb-48 "
      // style={{
      //   backgroundImage: "linear-gradient(to right, #e6ebff, #BCF7E1)",
      // }}
    >
      <NavBar />
      <Redeem />
    </div>
  );
}
