"use client";
import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import { BarChart } from "@mui/x-charts/BarChart";

const Circle = ({ color }) => (
  <div className={`w-4 h-4 rounded-full bg-${color}`} />
);

const Calculator1 = () => {
  const [initialInvestment, setInitialInvestment] = useState(150100 / 3);
  const [propertyValueGrowth, setPropertyValueGrowth] = useState(50);
  const [annualRentalYield, setAnnualRentalYield] = useState(12.5);

  const handleSliderChange = (setter) => (event, newValue) => {
    setter(newValue);
  };

  const formatUSDTValue = (value) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <div className="max-w-screen-xl container mx-auto p-6 lg:p-12  bg-blue4">
      <h1 className="font-poppins text-2xl  md:text-4xl font-extrabold">
        Investment Calculator
      </h1>
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-lg font-poppins font-bold mb-4 mt-4">
            How much do you want to invest?
          </h2>
          {/* <div className="mb-6">
            <p>Initial Investment: {formatUSDTValue(initialInvestment)}</p>
            <Slider
              min={100}
              max={100000}
              value={initialInvestment}
              onChange={handleSliderChange(setInitialInvestment)}
              aria-label="Initial Investment"
            />
          </div> */}
          <div className=" gap-[2rem] mb-6">
            <div className="flex justify-between">
              <p>Initial Investment</p>
              <p className="font-extrabold">
                USDT {formatUSDTValue(initialInvestment)}
              </p>
            </div>

            <div>
              {/* <Slider defaultValue={50} aria-label="Default" /> */}
              <Slider
                // value={initialInvestment}
                // onChange={handleSliderChange(setInitialInvestment)}
                // aria-label="Default"
                min={100}
                max={100000}
                defaultValue={(100 + 100000) / 2}
                value={initialInvestment}
                onChange={handleSliderChange(setInitialInvestment)}
                aria-label="Initial Investment"
              />
            </div>
          </div>

          {/* <div className="mb-6">
            <p>Property value growth (5 year): {propertyValueGrowth}%</p>
            <Slider
              min={1}
              max={100}
              value={propertyValueGrowth}
              onChange={handleSliderChange(setPropertyValueGrowth)}
              aria-label="Property value growth"
            />
          </div> */}
          <div className="gap-[2rem] mb-6">
            <div className="flex justify-between">
              <p>Property value growth (5 year)</p>
              <p className="font-extrabold">{propertyValueGrowth}%</p>
            </div>

            <div>
              <Slider
                min={1}
                max={100}
                defaultValue={50}
                value={propertyValueGrowth}
                onChange={handleSliderChange(setPropertyValueGrowth)}
                aria-label="Default"
              />
            </div>
          </div>
          {/* <div>
            <p>Expected annual rental yield: {annualRentalYield}%</p>
            <Slider
              min={1}
              max={25}
              value={annualRentalYield}
              onChange={handleSliderChange(setAnnualRentalYield)}
              aria-label="Annual rental yield"
            />
          </div> */}
          <div className=" gap-[2rem] mb-6">
            <div className="flex justify-between">
              <p>Expected annual rental yield</p>
              <p className="font-extrabold">{annualRentalYield}%</p>
            </div>

            <div>
              <Slider
                min={1}
                max={25}
                defaultValue={12.5}
                value={annualRentalYield}
                onChange={handleSliderChange(setAnnualRentalYield)}
                aria-label="Default"
              />
            </div>
          </div>
          <div className=" mt-6">
            <p>
              All projected values are before any property costs and platform
              fees, and based on a 5-year holding period. We expect the asset
              value to grow 30% over the next 5 years.
            </p>
          </div>
        </div>
        <div>
          {/* <div className="bg-gray-100 p-6 rounded-lg">
            <p className="text-xl font-bold mb-4">
              Projected Investment Return
            </p>
            <p className="text-2xl font-bold mb-8">
              {formatUSDTValue(224188)} in 5 years
            </p>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <Circle color="black" />
                <div>
                  <p>Investment</p>
                  <p className="font-bold">
                    {formatUSDTValue(initialInvestment)}
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <Circle color="green" />
                <div>
                  <p>Total rental</p>
                  <p className="font-bold">
                    {formatUSDTValue(
                      initialInvestment * (annualRentalYield / 100) * 5
                    )}
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <Circle color="blue" />
                <div>
                  <p>Value appreciation</p>
                  <p className="font-bold">
                    {formatUSDTValue(
                      initialInvestment * (propertyValueGrowth / 100) * 5
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <BarChart
                series={[
                  {
                    data: [
                      initialInvestment,
                      initialInvestment,
                      initialInvestment,
                      initialInvestment,
                      initialInvestment,
                    ],
                    stack: "B",
                    color: "black",
                  },
                  {
                    data: [
                      initialInvestment * (annualRentalYield / 100) * 5,
                      initialInvestment * (annualRentalYield / 100) * 5,
                      initialInvestment * (annualRentalYield / 100) * 5,
                      initialInvestment * (annualRentalYield / 100) * 5,
                      initialInvestment * (annualRentalYield / 100) * 5,
                    ],
                    stack: "B",
                    color: "#40F39A",
                  },
                  {
                    data: [
                      initialInvestment * (propertyValueGrowth / 100) * 5,
                      initialInvestment * (propertyValueGrowth / 100) * 5,
                      initialInvestment * (propertyValueGrowth / 100) * 5,
                      initialInvestment * (propertyValueGrowth / 100) * 5,
                      initialInvestment * (propertyValueGrowth / 100) * 5,
                    ],
                    stack: "B",
                    color: "#2253FF",
                  },
                ]}
                width={400}
                height={200}
              />
            </div>
          </div> */}
          <div className=" gap-[1.18rem] rounded-md bg-bluelight">
            <div className=" flex flex-col justify-center items-center">
              <p className="font-poppins text-2xl font-medium">
                Projected investment return of
              </p>
              <p className="font-poppins text-xl font-extrabold">
                USDT 224,188 in 5 years
              </p>
            </div>
            <div className="ml-[1rem] mr-[1rem] mt-[4rem]  rounded-md border border-darkblue p-2.5">
              <div className="flex flex-row justify-center items-center  gap-[1.18rem]">
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

            <div className="w-full max-w-xl mx-auto mt-6">
              <BarChart
                series={[
                  {
                    // data: [4, 3, 1, 5, 8],
                    data: [
                      initialInvestment,
                      initialInvestment,
                      initialInvestment,
                      initialInvestment,
                      initialInvestment,
                    ],
                    stack: "B",
                    color: "black",
                  },
                  {
                    data: [
                      initialInvestment * (annualRentalYield / 100) * 5,
                      initialInvestment * (annualRentalYield / 100) * 5,
                      initialInvestment * (annualRentalYield / 100) * 5,
                      initialInvestment * (annualRentalYield / 100) * 5,
                      initialInvestment * (annualRentalYield / 100) * 5,
                    ],
                    stack: "B",
                    color: "#40F39A",
                  },
                  {
                    // data: [2, 8, 1, 3, 1],
                    data: [
                      initialInvestment * (propertyValueGrowth / 100) * 5,
                      // annualRentalYield,
                      // annualRentalYield,
                      // annualRentalYield,
                      // annualRentalYield,
                      initialInvestment * (propertyValueGrowth / 100) * 5,
                      initialInvestment * (propertyValueGrowth / 100) * 5,
                      initialInvestment * (propertyValueGrowth / 100) * 5,
                      initialInvestment * (propertyValueGrowth / 100) * 5,
                    ],
                    stack: "B",
                    color: "#2253FF",
                  },
                ]}
                className="w-full"
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator1;
