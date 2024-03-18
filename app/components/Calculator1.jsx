"use client";
import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import { BarChart } from "@mui/x-charts/BarChart";
import { VictoryChart, VictoryBar, VictoryAxis } from "victory";

const Circle = ({ color }) => (
  <div className={`w-4 h-4 rounded-full bg-${color}`} />
);

const Calculator1 = () => {
  const [initialInvestment, setInitialInvestment] = useState(15010 / 3);
  const [propertyValueGrowth, setPropertyValueGrowth] = useState(50);
  const [annualRentalYield, setAnnualRentalYield] = useState(12.5);

  const handleSliderChange = (setter) => (event, newValue) => {
    setter(newValue);
  };

  // const formatUSDTValue = (value) => {
  //   return value.toLocaleString("en-US", {
  //     style: "currency",
  //     currency: "USD",
  //   });
  // };
  const formatUSDTValue = (value) => {
    if (value >= 1000) {
      return value / 1000 + "k";
    }
    return value;
  };
  function TotalUstdEarned({
    initialInvestment,
    annualRentalYield,
    propertyValueGrowth,
  }) {
    const rentalIncome = Number(
      Number(initialInvestment) * (Number(annualRentalYield) / 100)
    );
    const propertyValueAppreciation =
      initialInvestment * (propertyValueGrowth / 100);
    const totalUstdEarned =
      Number(rentalIncome) +
      Number(propertyValueAppreciation) +
      Number(initialInvestment);
    return totalUstdEarned;
  }

  return (
    <div className="max-w-screen-xl container mx-auto p-6 lg:p-12  bg-blue4">
      <h1 className="font-poppins text-2xl  md:text-4xl font-extrabold">
        Investment Calculator
      </h1>
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-lg font-poppins font-bold mb-4 mt-10">
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
                USDT {initialInvestment.toFixed(0)}
              </p>
            </div>

            <div>
              <Slider
                min={100}
                max={10000}
                defaultValue={(100 + 10000) / 2}
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
              All estimated values are prior to any property expenses and
              platform fees, and are calculated for a 5-year holding period. We
              anticipate a 30% increase in asset value over the next 5 years.
            </p>
          </div>
        </div>
        <div>
          <div className=" gap-[1.18rem] rounded-md bg-bluelight">
            <div className=" flex flex-col justify-center items-center ">
              <p className="font-poppins text-2xl font-medium mt-2">
                Projected investment return of
              </p>

              <p className="font-poppins text-xl font-extrabold">
                USDT{"   "}
                {Number(
                  (initialInvestment * (annualRentalYield / 100)).toFixed(0)
                ) +
                  Number(initialInvestment.toFixed(0)) +
                  Number(
                    (initialInvestment * (propertyValueGrowth / 100)).toFixed(0)
                  )}
                {"   "}
                Number in 5 years
              </p>
            </div>
            <div className="ml-[1rem] mr-[1rem] mt-[4rem]  rounded-2xl border border-darkblue p-2.5">
              <div className="flex flex-row justify-center items-center  gap-[1.18rem]">
                <div className=" flex flex-row flex-1 gap-2">
                  <Circle color="black" />
                  <div>
                    <p className="max-sm:text-sm">Investment</p>
                    <p className="font-extrabold">
                      USDT {initialInvestment.toFixed(0)}
                    </p>
                  </div>
                </div>
                <div className="flex flex-row flex-1 gap-2">
                  <Circle color="green1" />
                  <div>
                    <p className="max-sm:text-sm">Total rental </p>
                    <p className="font-extrabold">
                      USDT{" "}
                      {(initialInvestment * (annualRentalYield / 100)).toFixed(
                        0
                      )}
                    </p>
                  </div>
                </div>

                <div className="flex flex-row flex-1 gap-1">
                  <Circle color="darkblue" />
                  <div>
                    <p className="max-sm:text-sm">Value appreciation</p>
                    <p className=" font-extrabold">
                      USDT{" "}
                      {(
                        initialInvestment *
                        (propertyValueGrowth / 100)
                      ).toFixed(0)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full max-w-xl mx-auto mt-6 px-4">
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
                      initialInvestment * (annualRentalYield / 100) * 1,
                      initialInvestment * (annualRentalYield / 100) * 2,
                      initialInvestment * (annualRentalYield / 100) * 3,
                      initialInvestment * (annualRentalYield / 100) * 4,
                      initialInvestment * (annualRentalYield / 100) * 5,
                    ],
                    stack: "B",
                    color: "#40F39A",
                  },
                  {
                    data: [
                      initialInvestment * (propertyValueGrowth / 100) * 1,
                      initialInvestment * (propertyValueGrowth / 100) * 2,
                      initialInvestment * (propertyValueGrowth / 100) * 3,
                      initialInvestment * (propertyValueGrowth / 100) * 4,
                      initialInvestment * (propertyValueGrowth / 100) * 5,
                    ],
                    stack: "B",
                    color: "#2253FF",
                  },
                ]}
                className="w-full"
                height={250}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator1;
