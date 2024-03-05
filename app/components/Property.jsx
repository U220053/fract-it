import React from "react";
import Image from "next/image";
import img1 from ".././assets/img1.png";
const Property = () => {
  return (
    <div>
      <div className="flex justify-between m-20">
        <div className="w-[336px] h-[54px]">
          <p className="text-3xl font-poppins font-extrabold ml-2">
            Featured Properties
          </p>
        </div>
        <div className="w-[255px] h-[3.5rem] border-solid border-2 border-gray1  left-925 rounded-md   px-4 py-2 flex items-center">
          <p className="text-sm font-poppins font-bold ml-2">
            EXPLORE ALL PROPERTIES
          </p>
        </div>
      </div>

      <div className="m-20">
        <div className="grid grid-cols-2 gap-2 justify-space">
          <div className="w-[564px] h-[588px] rounded-[28px] ml-10 mb-10 bg-white">
            <div className="w-[564px] h-[236px] rounded-t-[28px] rounded-r-[28px] mb-5">
              <Image src={img1} alt="home" />
            </div>
            <div className="w-[524px] h-[28rem] gap-2">
              <div className="w-[36px]h-[18px] ml-5">
                <p className="text-sm font-poppins leading-4">1 | Dubai</p>
              </div>

              <div className="w-[381px] h-[54px] ml-5 mt-2 font-bold">
                <p className="text-sm font-poppins leading-4">
                  1 Bed in Zaya Hameni Tower, Jumeirah Village Circle (W1405)
                </p>
              </div>
              <div className="w-[523px] h-[27px] ml-5 mt-2  justify-between flex">
                <p className="text-sm font-poppins leading-4 font-bold text-blue-700">
                  1,453 USDT
                </p>
                <p className="text-xs font-poppins leading-4">347 investors</p>
              </div>
              <div>
                <div className="w-[524px] h-[50px] pt-[12px] pb-[12px] pl-[14px] pr-[14px] ml-5 bg-green justify-between flex">
                  <p className="text-xs font-poppins leading-4">APY</p>
                  <p className="text-xs font-poppins leading-4 font-bold">
                    6.07 %
                  </p>
                </div>
                <div className="w-[524px] h-[50px]  ml-5 bg-green justify-between flex">
                  <p className="text-xs font-poppins leading-4">
                    VALUE IN TREASURY
                  </p>
                  <p className="text-xs font-poppins leading-4 font-bold mr-2">
                    $18,888.30
                  </p>
                </div>
                <div className="w-[433px] h-[62.59px] gap-32 mt-5 ml-5 justify-between flex">
                  <button className="w-[242px] h-[62px] rounded-md bg-blue text-white font-bold ">
                    Invest Now
                  </button>
                  <p className="w-[63px] h-[24px] mt-5 text-xs font-bold font-poppins leading-4">
                    DETAILS
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[564px] h-[588px] rounded-[28px] ml-10 bg-white">
            <div className="w-[564px] h-[236px] rounded-t-[28px] rounded-r-[28px] mb-5">
              <Image src={img1} alt="home" />
            </div>
            <div className="w-[524px] h-[28rem] gap-2">
              <div className="w-[36px]h-[18px] ml-5">
                <p className="text-sm font-poppins leading-4">1 | Dubai</p>
              </div>

              <div className="w-[381px] h-[54px] ml-5 mt-2 font-bold">
                <p className="text-sm font-poppins leading-4">
                  1 Bed in Zaya Hameni Tower, Jumeirah Village Circle (W1405)
                </p>
              </div>
              <div className="w-[523px] h-[27px] ml-5 mt-2  justify-between flex">
                <p className="text-sm font-poppins leading-4 font-bold text-blue-700">
                  1,453 USDT
                </p>
                <p className="text-xs font-poppins leading-4">347 investors</p>
              </div>
              <div>
                <div className="w-[524px] h-[50px] pt-[12px] pb-[12px] pl-[14px] pr-[14px] ml-5 bg-green justify-between flex">
                  <p className="text-xs font-poppins leading-4">APY</p>
                  <p className="text-xs font-poppins leading-4 font-bold">
                    6.07 %
                  </p>
                </div>
                <div className="w-[524px] h-[50px]  ml-5 bg-green justify-between flex">
                  <p className="text-xs font-poppins leading-4">
                    VALUE IN TREASURY
                  </p>
                  <p className="text-xs font-poppins leading-4 font-bold mr-2">
                    $18,888.30
                  </p>
                </div>
                <div className="w-[433px] h-[62.59px] gap-32 mt-5 ml-5 justify-between flex">
                  <button className="w-[242px] h-[62px] rounded-md bg-blue text-white font-bold ">
                    Invest Now
                  </button>
                  <p className="w-[63px] h-[24px] mt-5 text-xs font-bold font-poppins leading-4">
                    DETAILS
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[564px] h-[588px] rounded-[28px] ml-10 bg-white">
            <div className="w-[564px] h-[236px] rounded-t-[28px] rounded-r-[28px] mb-5">
              <Image src={img1} alt="home" />
            </div>
            <div className="w-[524px] h-[28rem] gap-2">
              <div className="w-[36px]h-[18px] ml-5">
                <p className="text-sm font-poppins leading-4">1 | Dubai</p>
              </div>

              <div className="w-[381px] h-[54px] ml-5 mt-2 font-bold">
                <p className="text-sm font-poppins leading-4">
                  1 Bed in Zaya Hameni Tower, Jumeirah Village Circle (W1405)
                </p>
              </div>
              <div className="w-[523px] h-[27px] ml-5 mt-2  justify-between flex">
                <p className="text-sm font-poppins leading-4 font-bold text-blue-700">
                  1,453 USDT
                </p>
                <p className="text-xs font-poppins leading-4">347 investors</p>
              </div>
              <div>
                <div className="w-[524px] h-[50px] pt-[12px] pb-[12px] pl-[14px] pr-[14px] ml-5 bg-green justify-between flex">
                  <p className="text-xs font-poppins leading-4">APY</p>
                  <p className="text-xs font-poppins leading-4 font-bold">
                    6.07 %
                  </p>
                </div>
                <div className="w-[524px] h-[50px]  ml-5 bg-green justify-between flex">
                  <p className="text-xs font-poppins leading-4">
                    VALUE IN TREASURY
                  </p>
                  <p className="text-xs font-poppins leading-4 font-bold mr-2">
                    $18,888.30
                  </p>
                </div>
                <div className="w-[433px] h-[62.59px] gap-32 mt-5 ml-5 justify-between flex">
                  <button className="w-[242px] h-[62px] rounded-md bg-blue text-white font-bold ">
                    Invest Now
                  </button>
                  <p className="w-[63px] h-[24px] mt-5 text-xs font-bold font-poppins leading-4">
                    DETAILS
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[564px] h-[588px] rounded-[28px]  ml-10 bg-white">
            <div className="w-[564px] h-[236px] rounded-t-[28px] rounded-r-[28px] mb-5">
              <Image src={img1} alt="home" />
            </div>
            <div className="w-[524px] h-[28rem] gap-2">
              <div className="w-[36px]h-[18px] ml-5">
                <p className="text-sm font-poppins leading-4">1 | Dubai</p>
              </div>

              <div className="w-[381px] h-[54px] ml-5 mt-2 font-bold">
                <p className="text-sm font-poppins leading-4">
                  1 Bed in Zaya Hameni Tower, Jumeirah Village Circle (W1405)
                </p>
              </div>
              <div className="w-[523px] h-[27px] ml-5 mt-2  justify-between flex">
                <p className="text-sm font-poppins leading-4 font-bold text-blue-700">
                  1,453 USDT
                </p>
                <p className="text-xs font-poppins leading-4">347 investors</p>
              </div>
              <div>
                <div className="w-[524px] h-[50px] pt-[12px] pb-[12px] pl-[14px] pr-[14px] ml-5 bg-green justify-between flex">
                  <p className="text-xs font-poppins leading-4">APY</p>
                  <p className="text-xs font-poppins leading-4 font-bold">
                    6.07 %
                  </p>
                </div>
                <div className="w-[524px] h-[50px]  ml-5 bg-green justify-between flex">
                  <p className="text-xs font-poppins leading-4">
                    VALUE IN TREASURY
                  </p>
                  <p className="text-xs font-poppins leading-4 font-bold mr-2">
                    $18,888.30
                  </p>
                </div>
                <div className="w-[433px] h-[62.59px] gap-32 mt-5 ml-5 justify-between flex">
                  <button className="w-[242px] h-[62px] rounded-md bg-blue text-white font-bold ">
                    Invest Now
                  </button>
                  <p className="w-[63px] h-[24px] mt-5 text-xs font-bold font-poppins leading-4">
                    DETAILS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
