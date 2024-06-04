import React from "react";
import Incbutton from "./Incbutton";
import p3 from "../Assets/p3.jpeg";

const Page3 = () => {
  return (
    <div>
      <div className="mt-[-7%] ml-[5%] mb-[2%]">
        <button className="mx-[0.5%] hover:underline text-sm font-extralight text">
          Page 1
        </button>
        <button className="mx-[0.5%] hover:underline text-sm font-extralight">
          Page 2
        </button>
        <button className="mx-[0.5%] hover:underline text-sm font-extralight font">
          Page 3
        </button>
      </div>
      <div classname="flex">
        <img className=" ml-[4%] w-[50%] " src={p3} alt="" />
        <div className=" text-black ml-[4%]">
          <h1 className="text-4xl font-mono">Package 3</h1>
          <h1 className="font-extralight">SKU: 0016</h1>
          <h1 className="font-thin text-2xl mt-[4%]">HK$10,140.00</h1>
          <h1 className="mt-[4%] font-thin">Quantity</h1>
          <div className="mt-[2%]">
            {" "}
            <Incbutton minVal={1} />
          </div>
          <div className="mt-[5%] rounded-md text-center h-8 bg-teal-800">
            <button className="  text-white py-1 font-extralight">
              Add to cart
            </button>
          </div>
          <div className="mt-[5%] rounded-md h-8 text-center bg-black">
            <button className=" text-white  py-1 font-extralight ">Buy</button>
          </div>
        </div>
      </div>
      <div className="flex ml-[4%] mt-[2%]">
        <div>
          <h1 className="text-xl">Package 3</h1>
          <h1 className="font-extralight">
            1. Personalized push content with AI referenced labels <br /> 2. No
            privacy concerns due to the personalized information agreement needs
            to be signed <br /> 3. Higher accuracy with monthly retrained AI
            model
            <br /> 4. Customized business reports for business analytics Price
            (per month): 10,140 HKD (per project, 10k users) + 50 HKD (per
            beacon)
          </h1>
        </div>

        <div className=" ml-[16%] mt-[0%]">
          <h1 className=" text-xl font-light">RETURN AND REFUND POLICY</h1>
          <h1 className=" font-extralight">Within 1 week after purchasings</h1>
        </div>
      </div>
    </div>
  );
};

export default Page3;
