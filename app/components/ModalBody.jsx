import React, { useState } from "react";
import axios from "axios";
import * as Yup from "yup";
import Image from "next/image";
import house from ".././assets/Group 37.png";
const backendUrl = "http://54.89.177.81";
//"http://localhost:4000";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});

const ModalBody = ({ onCloseModal }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await validationSchema.validate({ name, email }, { abortEarly: false });
      await axios.post(`${backendUrl}/api/waitlist`, { name, email });
      alert("Successfully submitted to waitlist!");
      onCloseModal();
    } catch (err) {
      // catch (err) {
      //   console.error(err);
      //   alert("Failed to submit to waitlist");
      // }
      if (err instanceof Yup.ValidationError) {
        const newErrors = {};
        err.inner.forEach((error) => {
          newErrors[error.path] = error.message;
        });
        setErrors(newErrors);
      } else {
        console.error(err);
        alert("Failed to submit to waitlist");
      }
    }
  };

  return (
    <div className="flex  md:flex-row md:w-[50rem] md:h-[36rem] gap-1 md:gap-5 ">
      <div className="w-[17.84rem] h-[34.73] rounded-md bg-darkblue">
        <div className="mt-20">
          <Image src={house} />
        </div>
      </div>
      <div className="flex flex-col mt-16">
        <h1 className="text-xl md:text-3xl font-bold text-black mb-4">
          Join Our Waitlist
        </h1>
        <p className="text-sm text-black">
          Get notified when we launch! Secure your spot for early access to:
        </p>
        <ul className="list-disc list-inside text-sm text-black mt-4 ">
          <li className="mb-2">
            Exclusive investment opportunities in real estate.
          </li>
          <li className="mb-2">
            Seamless and diversified fractional ownership through FNFTs.
          </li>
          <li className="mb-10">
            Lower investment barriers compared to traditional methods.
          </li>
        </ul>
        <form onSubmit={handleSubmit}>
          {/* <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your Name"
            className="w-full h-[3rem] rounded-md border border-gray1 p-2 mb-2 md:mb-4"
          />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email"
            className="w-full h-[3rem] rounded-md border border-gray1 p-2 mb-2 md:mb-4"
          />

          <p className="text-sm text-gray1">
            By joining the waitlist, you agree to receive email updates from
            FractIt.
          </p> */}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your Name"
            className="w-full h-[3rem] rounded-md border border-gray1 p-2 mb-2 md:mb-4"
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email"
            className="w-full h-[3rem] rounded-md border border-gray1 p-2 mb-2 md:mb-4"
          />
          {errors.email && <p className="text-red">{errors.email}</p>}
          <p className="text-sm text-gray1">
            By joining the waitlist, you agree to receive email updates from
            FractIt.
          </p>
          <button
            type="submit"
            className="w-full md:w-[10rem] h-[3rem] rounded-md bg-darkblue text-white font-bold mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalBody;
