import Image from "next/image";
import Property from "./components/Property";
import "./globals.css";
// import Hero from "./components/Hero";
import Hero1 from "./components/Hero1";
import City from "./components/City";
import Section from "./components/Section";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Calculator from "./components/Calculator";
import Calculator1 from "./components/Calculator1";
import Hard from "./components/Hard";
import Sectiontest from "./components/Sectiontest";
import Section2test from "./components/Section2test";
import Section3test from "./components/Section3test";
import Section4test from "./components/Section4test";
import Footertest from "./components/Footertest";
import Hardtest from "./components/Hardtest";
import Propertytest from "./components/Propertytest";

export default function Home() {
  return (
    <>
      <div className="w-full bg-gradient-to-r from-green to-blue3">
        <Header />
        <Hero1 />
        <City />
        <Propertytest />
        <Hardtest />
        <Calculator1 />
        {/* <Sectiontest /> */}
        <Section2test />
        <Section3test />
        <Section4test />
        <Footertest />
      </div>
    </>
  );
}
