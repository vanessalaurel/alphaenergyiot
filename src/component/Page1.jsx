import React from "react";
import Incbutton from "./Incbutton";

const Page1 = () => {
  return (
    <div>
      <div classname="flex">
        <img
          src={
            "www.google.com/imgres?imgurl=https%3A%2F%2Fncube-digest.com%2Fwp-content%2Fuploads%2F2020%2F05%2FWhat-Are-Beacons.png&tbnid=5BIVOleTVY7yNM&vet=12ahUKEwjr1KK4_pSFAxX_WPUHHVmoBQQQMygQegUIARCRAQ..i&imgrefurl=https%3A%2F%2Fncube.com%2Fwhat-are-beacons-and-how-beacons-technology-works%2F&docid=d72_Ldzls5qm7M&w=1024&h=1024&q=beacon%20technology&ved=2ahUKEwjr1KK4_pSFAxX_WPUHHVmoBQQQMygQegUIARCRAQ"
          }
          alt=""
        />
        <div>
          <h1>Package 1</h1>
          <h1>SKU: 0001</h1>
          <h1>HK$3,120.00</h1>
          <h1>Quantity</h1>
          <Incbutton minVal={1} />
          <button>Add to cart</button>
          <button>Buy</button>
        </div>
      </div>
      <div className="flex">
        <div>
          <h1>Package 1</h1>
          <h1>1. Personalized push content with filled labels</h1>
          <h1>
            2. No privacy concerns due to the personalized filtering is done
            locally in mobile
          </h1>
          <h1>Price per month:</h1>
          <h1>3,120 HKD (per project, 10k users) + 78 HKD per beacon</h1>
        </div>
        <div>
          <h1>RETURN AND REFUND POLICY</h1>
          <h1>Within 1 week after purchasings</h1>
        </div>
      </div>
    </div>
  );
};

export default Page1;
