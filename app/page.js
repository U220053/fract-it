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
import Hard from "./components/Hard";

export default function Home() {
  return (
    <>
      <div className="w-full bg-gradient-to-r from-green to-blue3">
        <Header />
        <Hero1 />
        <City />
        <Property />
        <Hard />
        <Calculator />
        <Section />
        <Section2 />
        <Section3 />
        <Section4 />
        <Footer />
      </div>
    </>
  );
}
