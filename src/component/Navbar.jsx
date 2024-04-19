import React, { useState } from "react";
import im2 from "../Assets/Alpha Energy IoT Inverted Color 2400x1800 2.png";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const handleclick = () => {
    setActive(!active);
  };
  return (
    <div className="text-black bg-white h-[71px] flex">
      <img src={im2} className="w-[15%] ml-[7%] -mt-[1%] h-[200%]" alt="" />
      <div className="flex text-black ml-[6%] mt-[3.5%] ">
        <h1
          className="mx-10 font-light font-body hover:underline "
          onClick={handleclick}
          style={{ color: active ? "black" : "gray" }}
        >
          Home
        </h1>
        <h1 className="mx-10 font-light font-body hover:underline ">About</h1>
        <h1 className="mx-10 font-light font-body hover:underline">Packages</h1>
        <h1 className="mx-10 font-light font-body hover:underline">Join us</h1>
        <h1 className="mx-10 font-light font-body hover:underline">
          Contact us
        </h1>
      </div>
      <div className="bg-black px-4 pt-1 ml-[10%] text-white h-[50%] mt-[3%] rounded-3xl ">
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default Navbar;
