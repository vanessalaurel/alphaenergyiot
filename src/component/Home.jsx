import React from "react";
import ic1 from "../Assets/compass_9893312.png";
import ic2 from "../Assets/chart_2497691.png";
import ic3 from "../Assets/magnifying-glass_8635640.png";
import im1 from "../Assets/HKSTP.png";
import im2 from "../Assets/hkust.png";
import im3 from "../Assets/cyphy.png";
import im4 from "../Assets/emsd-logo.png";
import bc from "../Assets/WhatsApp Image 2024-03-19 at 7.32.36 PM (1).jpeg";
import bc2 from "../Assets/WhatsApp Image 2024-03-19 at 7.32.36 PM.jpeg";
import bc3 from "../Assets/WhatsApp Image 2024-03-19 at 7.32.36 PM (2).jpeg";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div>
      <div className=" bg-gradient-to-b from-slate-300  mt-[2%] w-[93%] rounded-3xl h-[400px] ml-[3.5%]">
        <h1 className="text-6xl font-extrabold pt-[6%] pl-[3%]">
          Solar Beacons
        </h1>
        <h1 className=" mt-[1%] ml-[3%] text-2xl">
          New adjustable feature <br />
          is now available.
        </h1>
        <button className="bg-slate-800 text-white rounded-3xl ml-[3%] mt-[2%] text-center text-sm mx-2 w-[8%] h-[10%]">
          Shop Now
        </button>
        <img
          className="w-[50%] h-[110%] -mt-[19.4%] rounded-full opacity-[99%] ml-[42%]"
          src={bc}
          alt=""
        />
      </div>
      <div className="bg-white shadow-xl w-[93%] mt-[4%] rounded-3xl ml-[3.5%] h-[600px]">
        <img
          src={bc2}
          alt=""
          className="h-[93%] mt-[15%] ml-[2%] w-[35%] opacity-[100%] rounded-3xl"
        />
        <h1 className="font-semibold text-3xl ml-[46%] -mt-[40%] pt-[4%]">
          New Upgrades/Features
        </h1>
        <h1 className=" text-xl font-thin mt-[4%] ml-[46%]">
          - Use green energy, light energy from indoor/outdoor <br /> -
          Personalised <br />
          - Proximity marketing with AI & data analytics <br />- Adjustable
          feature with an optimal angle algorithm <br />- Faster charging rate
          by up to 570% <br />- Significantly slower discharge rate indoor
          <br />- Can last for lifetime without battery replacement <br />-
          Unique and beautiful design <br />- Easy deployment in different
          locations <br />- Waterproof and dustproof using latest nanotech
          <br />- No need for battery replacement. So, reduce management costs &
          danger <br />- Affordable price
        </h1>
      </div>
      <div className="bg-slate-800 h-[60px] mt-[6%]">
        <h1 className=" text-slate-100 pt-[1%] font-thin text-center">
          Free Deployment, Testing and Maintenance for Our Business Customers in
          Hong Kong
        </h1>
        {/* <Typewriter
          words={["Eat", "Sleep", "Code", "Repeat!"]}
          loop={5}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        /> */}
      </div>
      <div>
        <h1 className="text-5xl font-extrabold text-center mt-[10%]">
          Services
        </h1>
        <div className=" flex ml-[8%] mt-[4%]">
          <div className="bg-slate-50 rounded-3xl shadow-xl w-[25%] h-[420px] mx-[3%]">
            <h1 className="font-bold text-xl text-center mt-[3%]">
              Proximity Marketing
            </h1>
            <img
              src={ic2}
              alt=""
              className="w-[18%] h-[16%] ml-[40%] mt-[2%]"
            />
            <h1 className="mx-[10%] text-center pt-[6%] w-[80%]">
              Personalised-proximity marketing allows marketing leaders to
              target potential consumers with advertising content based on their
              current location and their interests
            </h1>
          </div>
          <div className="bg-slate-50 rounded-3xl shadow-xl w-[25%] mx-[3%] h-[420px]">
            <h1 className="font-bold text-xl text-center mt-[3%]">
              Asset Tracking
            </h1>
            <img
              src={ic3}
              alt=""
              className="w-[15%] h-[13%] ml-[40%] mt-[2%]"
            />
            <h1 className="mx-[10%] text-center pt-[7%] w-[80%]">
              Asset tracking refers to the method of tracking physical assets,
              by using tags using BLE which broadcast their location. These
              technologies can also be used for indoor tracking of assets and
              persons
            </h1>
          </div>
          <div className="bg-slate-50 rounded-3xl shadow-xl w-[25%] mx-[3%] h-[420px]">
            <h1 className="font-bold text-xl mt-[3%] text-center">
              Indoor Navigation
            </h1>
            <img
              src={ic1}
              alt=""
              className="w-[16%] h-[13%] ml-[42%] mt-[4%]"
            />
            <h1 className="mx-[10%] text-center pt-[6%] w-[80%]">
              Indoor Navigation can guide people in confusing, unknown buildings
              and building complexes. The user of an indoor navigation system
              gets his own location displayed on a map on his own smart device.
            </h1>
          </div>
        </div>
      </div>
      <div className="flex mt-[5%] ml-[10%]">
        <img src={im1} alt="" className="w-[15%] mx-[4%] h-[10%]" />
        <img src={im2} alt="" className="w-[15%] mx-[4%] h-[10%]" />
        <img src={im3} alt="" className="w-[15%] mx-[4%] mt-[1%] h-[10%]" />
        <img src={im4} alt="" className="w-[15%] mx-[4%] mt-[1%] h-[10%]" />
      </div>
    </div>
  );
};

export default Home;
