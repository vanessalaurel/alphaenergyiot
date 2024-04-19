import React from "react";
import Incbutton from "./Incbutton";

const Page3 = () => {
  return (
    <div>
      <div>
        <img
          src={
            "www.google.com/imgres?imgurl=https%3A%2F%2Fncube-digest.com%2Fwp-content%2Fuploads%2F2020%2F05%2FWhat-Are-Beacons.png&tbnid=5BIVOleTVY7yNM&vet=12ahUKEwjr1KK4_pSFAxX_WPUHHVmoBQQQMygQegUIARCRAQ..i&imgrefurl=https%3A%2F%2Fncube.com%2Fwhat-are-beacons-and-how-beacons-technology-works%2F&docid=d72_Ldzls5qm7M&w=1024&h=1024&q=beacon%20technology&ved=2ahUKEwjr1KK4_pSFAxX_WPUHHVmoBQQQMygQegUIARCRAQ"
          }
          alt=""
        />
        <div>
          <h1>Package 3</h1>
          <h1>SKU: 0016</h1>
          <h1>HK$10,140.00</h1>
          <h1>Quantity</h1>
          <Incbutton minVal={1} />
          <button>Add to cart</button>
          <button>Buy</button>
        </div>
      </div>
      <div>
        <h1>Package 3</h1>
        <h1>
          1. Personalized push content with AI referenced labels <br /> 2. No
          privacy concerns due to the personalized information agreement needs
          to be signed <br /> 3. Higher accuracy with monthly retrained AI model
          <br /> 4. Customized business reports for business analytics Price
          (per month): 10,140 HKD (per project, 10k users) + 50 HKD (per beacon)
        </h1>
      </div>
      <div>
        <h1>RETURN AND REFUND POLICY</h1>
        <h1>Within 1 week after purchasings</h1>
      </div>
    </div>
  );
};

export default Page3;
