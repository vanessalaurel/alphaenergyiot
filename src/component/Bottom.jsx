import React from "react";
import im1 from "../Assets/pngimg.com - mastercard_PNG27.png";
import im3 from "../Assets/Alpha Energy IoT Inverted Color 2400x1800 2.png";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

const Bottom = () => {
  return (
    <div className="bg-white h-[260px] w-full  ">
      <div className="flex">
        <img className=" w-[20%] h-[20%]  " src={im3} alt="" />
        <div className="  xl:w-[85%] sm:w-[85%]  ml-[7%] mt-[3%]">
          <h1 className=" text-black xl:text-base sm:text-xs "> Contact us</h1>
          <h1 className="text-black sm:text-xs xl:text-base font-thin mt-[5%]">
            {" "}
            HKUST Entrepreneurship Center 4/F
          </h1>
          <h1 className="text-black font-thin ">
            The Hong Kong University of Science & Technology
          </h1>
          <h1 className="text-black font-thin">
            {" "}
            Clear Water Bay, Kowloon, Hong Kong SAR
          </h1>
          <h1 className="text-black font-thin "> Tel: +852-5535 2203</h1>
        </div>
        <div className="ml-[6%] w-[50%] mt-[3%]">
          <h1 className="text-black">Customer support</h1>
          <h1 className="text-black mt-[5%] font-thin">Shipping</h1>
          <h1 className="text-black font-thin">Payment and Warrant</h1>
          <h1 className="text-black font-thin">FAQs</h1>
        </div>
        <div className="ml-[9%] mt-[3%]">
          <h1 className="text-black"> We accept</h1>
          <img className="w-[24%] h-[12%] mt-[5%]" src={im1} alt="" />
        </div>
      </div>
      <div className="-mt-[0.5%] ">
        <div className=" bg-gray-600 h-[0.5px] w-[90%] mx-[5%] "></div>
      </div>
      <div className="flex mt-[1%] ml-[7%]">
        <FaInstagram color="black" className="mx-2" />
        <FaTwitter color="black" className="mx-2" />
        <FaFacebook color="black" className="mx-2" />
      </div>

      <div classname=" flex ">
        <FaRegCopyright color="black" className="-mt-[1.1%] ml-[72%]" />
        <h1 className="text-black font-light -mt-[1.4%] ml-[74%]">
          2023 by Alpha Energy IoT // Azaleaix
        </h1>
      </div>
    </div>
  );
};

export default Bottom;
