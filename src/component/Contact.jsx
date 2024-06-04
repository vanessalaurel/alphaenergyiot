import React from "react";
import Navbar from "./Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="mt-[10%]">
        <h1 className=" text-center font-thin text-4xl">Contact Us</h1>
        <p className=" text-center font-extralight text-xl mt-[2%]">
          We’re here to help! Contact us with any question and we will do our
          best to reply as soon as we can.{" "}
        </p>
        <div className="shadow-md h-[400px] flex bg-slate-100 rounded-lg w-[80%] mt-[3%] ml-[9%]">
          <div>
            <h1 className=" pt-[3%] pl-[3%] font-sans">General Office:</h1>
            <p className=" pl-[3%] font-extralight">
              Room 3607, Startup Zone, Lift 29-30, Academic Building,
              <br /> Hong Kong University of Science and Technology, Clear Water
              Bay, Kowloon, Hong Kong SAR
            </p>

            <h1 className=" pt-[1%] pl-[3%] font-sans">Mailing address:</h1>
            <p className=" pl-[3%] font-extralight">
              G/F, 114A, Tai Po Tsai Village, Clear Water Bay, Sai Kung, HK, SAR
            </p>

            <p className=" pl-[3%] pt-[17%] font-extralight">
              +852 55352203 (Mon - Fri, 8 am - 7 pm){" "}
            </p>

            <p className=" pl-[3%] font-extralight">alphaenergyiot@gmail.com</p>
          </div>
          <div className="ml-[3%] mt-[1%]">
            <h1 className="  w-[100%] font-xl "> Let's get in touch!</h1>

            <form>
              <p className=" font-light pt-[2%]"> Enter your name:</p>

              <input className="w-[400px]" type="text" />
            </form>
            <form>
              <p className=" font-light pt-[5%]">Email</p>

              <input
                className="w-[400px]"
                type="text"
                placeholder="name@example.com"
              />
            </form>
            <form>
              <p className=" font-light pt-[5%]">Message</p>

              <input
                className=" h-[70px] w-[400px]"
                type="text"
                placeholder="type here"
              />
            </form>
            <div className=" mt-[8%]">
              <button
                className=" bg-slate-800 w-[100%] rounded-lg text-white"
                type="submit"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
