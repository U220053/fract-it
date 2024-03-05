"use client";
import React from "react";
import Slider from "@mui/material/Slider";
import { BarChart } from "@mui/x-charts/BarChart";

const Circle = ({ color }) => (
  <div className={`w-4 h-4 rounded-full bg-${color}`} />
);
const Calculator = () => {
  return (
    <div className=" relative w-full h-[38.41rem] bg-blue4 ">
      {/* 42.8 */}
      <div className="w-[18.5rem] h-[18.5rem] absolute left-[55rem] bg-blue5 opacity-20"></div>
      {/* <div className="w-[17rem] h-[18.5rem] absolute left-[68.38rem] top-[19.7rem] bg-blue5 opacity-20"></div> */}
      <div className="w-[72.3rem] h-[32.5rem] relative top-[2.5rem] left-[3.5rem]  gap-[1.5rem] ">
        <div className="w-[33.65rem] h-[4rem] gap-[3rem]">
          <p className="font-poppins text-4xl font-extrabold ">
            Investment calculator
          </p>
        </div>
        <div className="w-[72rem] h-[27rem] gap-[10rem] flex">
          <div className="w-[32rem] h-[22.6rem] gap-[1.75rem]">
            <div className="w-[21.76rem] h-[1.68rem] mt-[3rem] mb-3">
              <p className="font-poppins text-lg font-extrabold">
                How much do you want to invest?
              </p>
            </div>
            <div className="w-[32.4rem] h-[13.5] gap-[2rem] mb-2">
              <div className="flex justify-between">
                <p>Initial Investment</p>
                <p className="font-extrabold">USDT 150,100</p>
              </div>

              <div>
                <Slider defaultValue={50} aria-label="Default" />
              </div>
            </div>
            <div className="w-[32.4rem] h-[13.5] gap-[2rem] mb-2">
              <div className="flex justify-between">
                <p>Property value growth (5 year)</p>
                <p className="font-extrabold">60%</p>
              </div>

              <div>
                <Slider defaultValue={50} aria-label="Default" />
              </div>
            </div>
            <div className="w-[32.4rem] h-[13.5] gap-[2rem] mb-2">
              <div className="flex justify-between">
                <p>Expected annual rental yield</p>
                <p className="font-extrabold">10.5%</p>
              </div>

              <div>
                <Slider defaultValue={50} aria-label="Default" />
              </div>
            </div>
            <div className="w-[32.44rem] h-[4rem] mt-6">
              <p>
                All projected values are before any property costs and platform
                fees, and based on a 5-year holding period. We expect the asset
                value to grow 30% over the next 5 years.
              </p>
            </div>
          </div>
          <div className="w-[36.18rem] h-[27.3rem] gap-[1.18rem] rounded-md bg-bluelight">
            <div className=" h-[5.625rem] flex flex-col justify-center items-center">
              <p className="font-poppins text-2xl font-medium">
                Projected investment return of
              </p>
              <p className="font-poppins text-xl font-extrabold">
                USDT 224,188 in 5 years
              </p>
            </div>
            <div className="ml-[1rem] mr-[1rem] mt-[4rem] h-[5rem] rounded-md border border-darkblue p-2.5">
              <div className="flex flex-row justify-center items-center w-[31rem] h-[3rem] gap-[1.18rem]">
                <div className=" flex flex-row flex-1 gap-2">
                  <Circle color="black" />
                  <div>
                    <p>Investment</p>
                    <p className="font-extrabold">USDT 150,100</p>
                  </div>
                </div>
                <div className="flex flex-row flex-1 gap-2">
                  <Circle color="green1" />
                  <div>
                    <p>Total rental </p>
                    <p className="font-extrabold">USDT 150,100</p>
                  </div>
                </div>
                <Circle color="darkblue" />
                <div className="flex flex-row flex-1 gap-2">
                  <div>
                    <p>Value appreciation</p>
                    <p className="font-extrabold">USDT 150,100</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <BarChart
                series={[
                  {
                    data: [4, 3, 1, 5, 8],
                    stack: "B",
                    color: "black",
                  },
                  { data: [4, 2, 5, 4, 1], stack: "B", color: "#40F39A" },
                  { data: [2, 8, 1, 3, 1], stack: "B", color: "#2253FF" },
                ]}
                width={600}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
