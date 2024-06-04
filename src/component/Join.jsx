import React from "react";
import b1 from "../Assets/b1.webp";
import b2 from "../Assets/b2.avif";
import Navbar from "./Navbar";

const Join = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="mt-[10%]">
        <h1 className=" text-center text-5xl">Join Us</h1>
        <p className=" text-center font-extralight mt-[3%] tracking-wide text-xl">
          We are recruting business and engineering people to join our team.{" "}
          <br />
          If you’re interested, please send us your CV to our e-mail.
        </p>
      </div>
      <div className="shadow-lg flex mt-[7%]">
        <div>
          <h1 className=" text-xl mt-[10%] ml-[6%] w-[600px] font-medium font-mono">
            Business Development & Financial Managers
          </h1>
          <p className="font-extralight ml-[6%]">
            Have/study an MBA or related field and have business or financial
            experiences.{" "}
          </p>
        </div>
        <img className=" w-[50%] ml-[7%]" src={b1} alt="" />
      </div>
      <div className="flex">
        <img className=" w-[50%] ml-[3%]" src={b2} alt="" />
        <h1 className=" text-xl mt-[3%] ml-[11%] w-[600px] font-medium font-mono">
          Blockchain Developer
        </h1>
        <p className="font-extralight w-[1000px] ml-[-26%] mt-[7%]">
          Have a bachelor’s degree or higher in computer science <br /> or
          related with experience in Blockchain development
        </p>
      </div>
    </div>
  );
};

export default Join;
