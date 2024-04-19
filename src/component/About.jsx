import React from "react";
import im1 from "../Assets/s.jpeg";
import f1 from "../Assets/WhatsApp Image 2024-03-14 at 12.02.21 PM.jpeg";
import f2 from "../Assets/WhatsApp Image 2024-03-14 at 12.13.42 PM.jpeg";
import f3 from "../Assets/WhatsApp Image 2024-03-14 at 12.13.43 PM.jpeg";
import f4 from "../Assets/WhatsApp Image 2024-03-14 at 12.13.43 PM (1).jpeg";
import f5 from "../Assets/WhatsApp Image 2024-03-14 at 12.05.01 PM.jpeg";
import f6 from "../Assets/WhatsApp Image 2024-03-14 at 12.03.24 PM.jpeg";

const about = () => {
  return (
    <div>
      <h1 className=" mt-[10%] text-center text-7xl font-body text-slate-700">
        About Us
      </h1>
      <h1 className=" mt-[0.5%] font-light text-center">
        Limitless Possibilities
      </h1>
      <h1 className="mt-[4%] text-center font-light text-slate-800">
        Innovative Energy Harvesting for a Green IoT/IoE, the Metaverse and
        Smart Cities
      </h1>
      <h1 className="mt-[2%] w-[40%] ml-[30%] text-center text-sm font-extralight text-slate-600">
        Alpha Energy IoT Limited utilizes renewable energy, artificial
        intelligence (AI), big data, blockchain and nanotechnology to deliver
        the first one-time and auto-adjustable solar beacons, enabling a better
        customer experience, business analytics, and security for a green,
        sustainable and high -performance Internet of Things (IoT)/ Internet of
        Everything (IoE), the metaverse and smart cities. It maximizes light
        energy harvesting under multiple light sources and light-changing
        environments up to 570% more compared to standard solar beacons. Alpha
        Energy IoT Limited is one of the awardees of the Technology Start-up
        Support Scheme for Universities (TSSSU) 2023/2024.
      </h1>
      <img
        className="h-[480px] mt-[5%] rounded-xl w-[80%] opacity-[90%] ml-[10%]"
        src={im1}
        alt=""
      />
      <h1 className="text-center font-body text-gray-800 text-3xl mt-[7%]">
        Our Story
      </h1>
      <h1 className="text-center font-body text-gray-600 text-base font-light mt-[5%]">
        We are a deep tech startup that spins off from the Social Media Lab,
        Hong Kong University of <br /> Science and Technology (HKUST) in 2023.
        Our vision is to be a global leading Internet of <br />
        Things (IoT)/Internet of Everything (IoE) solution provider using
        renewable energy, artificial <br />
        intelligence (AI), big data, blockchain and nanotechnology. We are
        committed to provide the <br />
        best products and services for our customers.{" "}
      </h1>
      <h1 className="text-center font-body text-gray-800 text-3xl mt-[10%]">
        Meet The Team
      </h1>
      <div className="grid grid-rows-3 grid-flow-col gap-4 mt-[12%]">
        <div className="ml-[23%]">
          <img src={f1} className="h-[60%] rounded-lg" alt="" />
          <h1>Perm Soonsawad</h1>
          <h1 className="font-thin">Founder & CEO</h1>
        </div>
        <div className=" ml-[23%]">
          <img src={f4} className="h-[60%] rounded-lg" alt="" />
          <h1>Zhipeng Feng</h1>
          <h1 className="font-thin">Technology Development</h1>
        </div>
        <div className="ml-[23%]">
          <img src={f3} className="h-[60%] rounded-lg" alt="" />
          <h1>Dr. Muhammad Zeshan Akber</h1>
          <h1 className="font-thin">
            Research/AI and Sustainability Development
          </h1>
        </div>
        <div className="ml-[10%]">
          <img src={f2} className="h-[60%] rounded-lg" alt="" />
          <h1>Simon Wong</h1>
          <h1 className="font-thin">CTO</h1>
        </div>

        <div className=" ml-[10%]">
          <img src={f5} className="h-[60%] rounded-lg" alt="" />
          <h1>Prof. Dr. Saddam Aziz</h1>
          <h1 className="font-thin">
            AI/Sustainable Energy System Development
          </h1>
        </div>
        <div className=" ml-[10%]">
          <img src={f6} className="h-[60%] rounded-lg" alt="" />
          <h1>Prof. Dr. Pim Soonsawad</h1>
          <h1 className="font-thin">Consultant in Marketing</h1>
        </div>
      </div>

      <h1 className="text-center font-body text-gray-800 text-3xl mt-[3%]">
        Achievements
      </h1>
      <h1 className="font-bold text-xl ml-[5%] mt-[5%]">Publications:</h1>
      <ul className="list-disc ml-[17%] mt-[1%] w-[75%] font-thin">
        <li>
          S. Wong, J. She and K. E. Jeon, "An Efficient Framework of Energy
          Status Reporting for BLE Beacon Networks," in IEEE Internet of Things
          Journal, vol. 10, no. 12, pp. 10426-10437, 15 June15, 2023, doi:
          10.1109/JIOT.2023.3237858.
        </li>
        <li>
          S. Wong, K. E. Jeon and J. She, "Energy Status Recovery using
          Recurrent SVR Framework for Solar BLE Beacons," 2022 IEEE Wireless
          Communications and Networking Conference (WCNC), Austin, TX, USA,
          2022, pp. 1928-1933, doi: 10.1109/WCNC51071.2022.9771928.
        </li>
        <li>
          P. Tedeschi, K. E. Jeon, J. She, S. Wong, S. Bakiras and R. Di Pietro,
          "Privacy-Preserving and Sustainable Contact Tracing Using Batteryless
          Bluetooth Low-Energy Beacons," in IEEE Security & Privacy, vol. 20,
          no. 3, pp. 91-100, May-June 2022, doi: 10.1109/MSEC.2021.3115497.
        </li>
        <li>
          C. H. Lam, K. E. Jeon, S. Wong and J. She, "Distance Estimation Using
          BLE Beacon on Stationary and Mobile Objects," in IEEE Internet of
          Things Journal, vol. 9, no. 7, pp. 4928-4939, 1 April1, 2022, doi:
          10.1109/JIOT.2021.3120921.
        </li>
        <li>
          P. Soonsawad, K. E. Jeon and J. She, "Improved Energy Harvesting with
          One-time Adjusted Solar Panel for BLE Beacon," 2021 IEEE 93rd
          Vehicular Technology Conference (VTC2021-Spring), Helsinki, Finland,
          2021, pp. 1-5, doi: 10.1109/VTC2021-Spring51267.2021.9448969.
        </li>
        <li>
          K. E. Jeon, J. She and S. Wong, "Extending BLE Beacon Lifetime by a
          Novel Neural Network-driven Framework," 2020 IEEE Wireless
          Communications and Networking Conference (WCNC), Seoul, Korea (South),
          2020, pp. 1-6, doi: 10.1109/WCNC45663.2020.9120555.
        </li>
        <li>
          P. Soonsawad, K. E. Jeon, J. She, C. H. Lam and P. C. Ng, "Maximizing
          Energy Harvesting with Adjustable Solar Panel for BLE Beacon," 2019
          International Conference on Internet of Things (iThings) and IEEE
          Green Computing and Communications (GreenCom) and IEEE Cyber, Physical
          and Social Computing (CPSCom) and IEEE Smart Data (SmartData),
          Atlanta, GA, USA, 2019, pp. 229-234, doi:
          10.1109/iThings/GreenCom/CPSCom/SmartData.2019.00058.
        </li>
        <li>
          S. Wong, J. She and K. E. Jeon, "Efficient Updates of Battery Status
          for BLE Beacon Network," 2019 International Conference on Wireless and
          Mobile Computing, Networking and Communications (WiMob), Barcelona,
          Spain, 2019, pp. 1-6, doi: 10.1109/WiMOB.2019.8923435.
        </li>
        <li>
          K. E. Jeon, J. She, P. Soonsawad and P. C. Ng, "BLE Beacons for
          Internet of Things Applications: Survey, Challenges, and
          Opportunities," in IEEE Internet of Things Journal, vol. 5, no. 2, pp.
          811-828, April 2018, doi: 10.1109/JIOT.2017.2788449.
        </li>
        <li>
          K. E. Jeon, J. She and S. Wong, "A crowd-assisted architecture for
          securing BLE beacon-based IoT infrastructure," 2018 IEEE Wireless
          Communications and Networking Conference (WCNC), Barcelona, Spain,
          2018, pp. 1-6, doi: 10.1109/WCNC.2018.8377376.
        </li>
      </ul>
      <h1 className="font-bold text-xl ml-[5%] mt-[5%]">Projects</h1>
      <ul className="list-disc ml-[17%] mt-[1%] w-[75%] font-thin">
        <li>HKUST LuXbeacon</li>
        <h1>
          Created an open source project with a team for a green, sustainable
          and high performance IoT solution which received several media
          attention in Hong Kong and in mainland, China. The website was
          launched in 2018. https://smedia.hkust.edu.hk/luxbeacon/index.html
        </h1>
      </ul>
      <h1 className="font-bold text-xl text-center mt-[7%]">Our Clients</h1>
    </div>
  );
};

export default about;
