import React from "react";
import Image from "next/image";
import hand from ".././assets/hand.png";
import img1 from ".././assets/Group 59.png";
import img2 from ".././assets/Group 60.png";
import img3 from ".././assets/Group 65.png";
import img4 from ".././assets/Group 64.png";

const Section2 = () => {
  return (
    <div className="w-[71.6rem] h-[32.16rem] gap-[7.6rem] flex flex-row">
      <div className="w-[22.19rem] h-[11.37rem] mr-20 ml-20 mt-[12rem]">
        <div className="w-[21.7rem] h-[8.3rem]">
          <p className="font-poppins text-4xl font-extrabold">
            Why Invest with Fractit
          </p>
        </div>
        <div className="w-[22rem] h-[3rem]">
          <p>
            Build Your Real Estate Investment Portfolio Today with Just $100
          </p>
        </div>
      </div>
      <div className="w-[41.75rem] h-[32.16rem] gap-[1.05rem]">
        <div className="flex flex-row gap-2 ">
          <div className="w-[13.17rem] h-[16.2rem] border-[0.05rem] border-white rounded-lg bg-white flex flex-col justify-center items-center">
            <div className="w-[13.17rem] flex justify-center">
              <Image src={hand} alt="home" width={100} height={100} />
            </div>
            <div className="w-[10.5rem] h-[5rem] gap-1 text-center">
              <div className="w-[8.75rem] h-[1.5rem]">
                <p className="font-bold font-poppins">Passive Earnings</p>
              </div>
              <div className="w-[10.5rem] h-[3rem] ">
                <p>
                  Generate rental yields effortlessly without active oversight.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[13.17rem] h-[16.2rem] border-[0.05rem] border-white rounded-lg bg-white flex flex-col justify-center items-center">
            <div className="w-[13.17rem] flex justify-center">
              <Image src={img1} alt="home" width={100} height={100} />
            </div>
            <div className="w-[10.5rem] h-[5rem] gap-1 text-center">
              <div className="w-[10rem] h-[1.5rem] ">
                <p className="font-bold font-poppins">Real Estate Gateway</p>
              </div>
              <div className="w-[10.5rem] h-[3rem] ">
                <p>
                  Access the benefits of property ownership with as low as $100.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[13.17rem] h-[16.2rem] border-[0.05rem] border-white rounded-lg bg-white flex flex-col justify-center items-center">
            <div className="w-[13.17rem] flex justify-center">
              <Image src={img2} alt="home" width={100} height={100} />
            </div>
            <div className="w-[10.5rem] h-[5rem] gap-1 text-center">
              <div className=" h-[1.5rem]">
                <p className="font-bold font-poppins">Capital Appreciation</p>
              </div>
              <div className="w-[10.5rem] h-[3rem] ">
                <p>
                  Benefit from historical trends of rising real estate values
                  over time.
                </p>
              </div>
            </div>
          </div>
          {/* <div>2</div>
          <div>3</div> */}
        </div>
        <div className="flex flex-row gap-2 mt-2">
          <div className="w-[20.36rem] h-[14.4rem] border-[0.05rem] border-white rounded-lg bg-white flex flex-col justify-center items-center">
            <div className="w-[7.5rem] h-[7.5rem] flex justify-center">
              <Image src={img3} alt="home" width={100} height={100} />
            </div>
            <div className="w-[17rem] h-[5rem] gap-1 text-center">
              <div className="h-[1.5rem]">
                <p className="font-bold font-poppins">Inflation Hedge</p>
              </div>
              <div className="w-[17.4rem] h-[2.125rem]">
                <p>
                  Safeguard against inflation with appreciating home values and
                  rental income.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[20.36rem] h-[14.4rem] border-[0.05rem] border-white rounded-lg bg-white flex flex-col justify-center items-center">
            <div className="w-[7.5rem] h-[7.5rem] flex justify-center">
              <Image src={img4} alt="home" width={100} height={100} />
            </div>
            <div className="w-[17rem] h-[5rem] gap-1 text-center">
              <div className="h-[1.5rem]">
                <p className="font-bold font-poppins">Diversification</p>
              </div>
              <div className="w-[17.4rem] h-[2.125rem]">
                <p>
                  Expand your investment portfolio by owning fractional shares
                  of real estate globally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
