import React, { useState } from "react";
import im2 from "../Assets/Alpha Energy IoT Inverted Color 2400x1800 2.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const handlerclick = () => {
    setActive(!active);
  };
  const handleClick = () => {
    handlerclick();
    navigate("/");
  };
  const navigate = useNavigate();
  return (
    <div className="text-black bg-white h-[71px] flex">
      <img src={im2} className="w-[15%] ml-[7%] -mt-[1%] h-[200%]" alt="" />
      <div className="flex text-black ml-[6%] mt-[3.5%] ">
        <h1
          className="mx-10 font-light font-body hover:underline "
          onClick={handleClick}
          style={{ color: active ? "black" : "gray" }}
        >
          Home
        </h1>
        <h1
          className="mx-10 font-light font-body hover:underline "
          onClick={() => {
            navigate("/about");
          }}
        >
          About
        </h1>
        <h1 className="mx-10 font-light font-body hover:underline">Packages</h1>
        <h1
          className="mx-10 font-light font-body hover:underline"
          onClick={() => {
            navigate("/join");
          }}
        >
          Join us
        </h1>
        <h1
          className="mx-10 font-light font-body hover:underline"
          onClick={() => {
            navigate("/contact");
          }}
        >
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
