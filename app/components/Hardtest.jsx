"use client";
// import React, { useEffect } from "react";
// import Image from "next/image";
// import hands from ".././assets/Group 41.png";
// import img1 from ".././assets/Group 43.png";
// import img2 from ".././assets/Rectangle 44.png";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const Hard = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 2000,
//     });
//   }, []);
//   return (
//     <div className="w-full  h-[50rem] bg-blue my-20 relative">
//       <div className=" relative  top-[3.5rem] gap-[1rem] flex flex-col justify-center items-center mb-4">
//         <p className="font-semibold md:font-extrabold  font-poppins text-2xl md:text-3xl lg:text-5xl text-white mb-8">
//           So, how will you make money?
//         </p>
//         <p className="font-base font-poppins text-xl text-white">
//           Fractit was built to empower everyone to own and build wealth through
//           real estate
//         </p>
//       </div>
//       {/* <div className="hidden md:block">
//         <div className="w-[18.18rem] h-[18.23rem] absolute left-[18rem] top-[12rem] bg-lightblue opacity-40 overflow-hidden"></div>
//         <div className="w-[18.5rem] h-[18.23rem] absolute left-[60rem] top-[12rem] bg-lightblue opacity-40 overflow-hidden"></div>
//         <div className="w-[18.5rem] h-[18.23rem] absolute left-[-1rem] top-[32rem]  bg-lightblue opacity-40 overflow-hidden"></div>
//         <div className="w-[18.5rem] h-[18.23rem] absolute left-[38rem] top-[32rem]  bg-lightblue opacity-40 overflow-hidden"></div>
//         <div className="w-[18.5rem] h-[18.23rem] absolute left-[76.2rem] top-[32rem]  bg-lightblue opacity-40"></div>
//       </div> */}
//       {/* <div className="w-[18.18rem] h-[18.23rem] absolute left-[18rem] top-[12rem] bg-lightblue opacity-40 overflow-hidden"></div>
//       <div className="w-[18.5rem] h-[18.23rem] absolute left-[60rem] top-[12rem] bg-lightblue opacity-40 overflow-hidden"></div>
//       <div className="w-[18.5rem] h-[18.23rem] absolute left-[-1rem] top-[32rem]  bg-lightblue opacity-40 overflow-hidden"></div>
//       <div className="w-[18.5rem] h-[18.23rem] absolute left-[38rem] top-[32rem]  bg-lightblue opacity-40 overflow-hidden"></div>
//       <div className="w-[18.5rem] h-[18.23rem] absolute left-[76.2rem] top-[32rem]  bg-lightblue opacity-40"></div> */}
//       <div className=" relative">
//         <div className="flex flex-col md:flex-row sm:flex-wrap items-center justify-center h-[40rem] gap-12">
//           <div
//             className="w-[16rem] h-[21rem] rounded-2xl bg-green1 flex flex-col items-center justify-center hover:shadow-lg"
//             data-aos="fade-right"
//           >
//             <div className="w-full h-full flex flex-col items-center justify-center">
//               <Image src={hands} alt="hand" />
//               <div className="text-center">
//                 <p className="font-bold">Monthly rental income</p>
//                 <p>Consistent passive income from monthly rental payments</p>
//               </div>
//             </div>
//           </div>
//           <div className="w-[30rem] h-[30rem] rounded-2xl bg-white  flex flex-col items-center justify-center hover:shadow-lg">
//             <div className="w-full h-full flex flex-col ">
//               <Image
//                 src={img2}
//                 alt="hand"
//                 className="object-cover w-full h-[15rem] rounded-t-2xl"
//               />

//               <div className="w-[20.8rem] h-[2.8rem] m-4">
//                 <p className="font-bold">
//                   1 Bed in Zaya Hameni Tower, Jumeirah Village Circle (W1405)
//                 </p>
//               </div>
//               <div className="mt-4 mr-4 ml-4 flex flex-row justify-between">
//                 {" "}
//                 <p className="text-darkblue font-extrabold">1,453 USDT </p>{" "}
//                 <p>347 Investors</p>
//               </div>
//               <div className="m-4 p-4 rounded-xl flex flex-row justify-between bg-lightblue">
//                 <div className="flex flex-col text-center">
//                   <p className="font-bold">9 %</p>
//                   <p>Gross Yield</p>
//                 </div>
//                 <div className="flex flex-col text-center">
//                   <p className="font-bold">31 %</p>
//                   <p>Capital Appreciation</p>
//                 </div>
//                 <div className="flex flex-col text-center">
//                   <p className="font-bold">52 %</p>
//                   <p>Total ROI</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div
//             className="w-[16rem] h-[21rem] rounded-2xl bg-green1 flex flex-col items-center justify-center hover:shadow-lg"
//             data-aos="fade-left"
//           >
//             <div className="w-full h-full flex flex-col items-center justify-center">
//               <Image src={img1} alt="hand" />
//               <div className="text-center">
//                 <p className="font-bold">Long term capital appreciation</p>
//                 <p>
//                   Watch your investment grow as the property value appreciates
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hard;
import React, { useEffect } from "react";
import Image from "next/image";
import hands from ".././assets/Group 41.png";
import img1 from ".././assets/Group 43.png";
import img2 from ".././assets/Rectangle 44.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Hard = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="w-full bg-blue my-20 pb-20 mx-auto relative p-2">
      <div className="p-8 text-center text-white">
        <p className="font-semibold md:font-extrabold text-2xl md:text-3xl lg:text-5xl mb-8">
          So, how will you make money?
        </p>
        <p className="font-base text-xl">
          Fractit was built to empower everyone to own and build wealth through
          real estate
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        <div
          className="w-1/2 md:w-1/3 md:h-auto rounded-2xl bg-green1 flex flex-col items-center justify-center hover:shadow-lg mb-8 md:mb-0 p-8"
          data-aos="fade-right"
        >
          <div className="w-full flex flex-col items-center justify-center">
            <Image src={hands} alt="hand" />
            <div className="text-center">
              <p className="font-bold">Monthly rental income</p>
              <p>Consistent passive income from monthly rental payments</p>
            </div>
          </div>
        </div>
        <div className=" md:w-1/3 md:h-auto rounded-3xl bg-white flex flex-col items-center justify-center hover:shadow-lg mb-8 md:mb-0">
          <div className="w-full flex flex-col">
            <Image
              src={img2}
              alt="hand"
              className="object-cover w-full rounded-t-2xl"
              width={400}
              //   height={300}
            />
            <div className="m-4">
              <p className="font-bold">
                1 Bed in Zaya Hameni Tower, Jumeirah Village Circle (W1405)
              </p>
            </div>
            <div className="mt-4 mr-4 ml-4 flex flex-row justify-between">
              {" "}
              <p className="text-darkblue font-extrabold">1,453 USDT </p>{" "}
              <p>347 Investors</p>
            </div>
            <div className="m-4 p-4 rounded-xl flex flex-row justify-between bg-lightblue">
              <div className="flex flex-col text-center">
                <p className="font-bold">9 %</p>
                <p>Gross Yield</p>
              </div>
              <div className="flex flex-col text-center">
                <p className="font-bold">31 %</p>
                <p>Capital Appreciation</p>
              </div>
              <div className="flex flex-col text-center">
                <p className="font-bold">52 %</p>
                <p>Total ROI</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-1/2  md:w-1/3 md:h-auto rounded-2xl bg-green1 flex flex-col items-center justify-center hover:shadow-lg p-8"
          data-aos="fade-left"
        >
          <div className="w-full  flex flex-col items-center justify-center">
            <Image src={img1} alt="hand" />
            <div className="text-center">
              <p className="font-bold">Long term capital appreciation</p>
              <p>
                Watch your investment grow as the property value appreciates
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hard;
