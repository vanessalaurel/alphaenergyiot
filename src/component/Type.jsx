import { React, useState } from "react";
import { data } from "../component/Package";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

const Type = () => {
  const [option, setOption] = useState(data);
  const filterPrice = (Price) => {
    setOption(
      data.filter((item) => {
        return item.Price === Price;
      })
    );
  };
  const setLowToHigh = () => {
    const sortedproduct = data.sort((a, b) => a.Price - b.Price);
    setOption([...sortedproduct]);
  };
  const setHighToLow = () => {
    const reversesortedproduct = data.sort((a, b) => b.Price - a.Price);
    setOption([...reversesortedproduct]);
  };
  const reset = () => {
    const resetProduct = data;
    setOption([...resetProduct]);
  };
  const renderComp = ({ id }) => {
    switch (id) {
      case 1:
        return <Page1 />;
        break;
      case 2:
        return <Page2 />;
        break;
      case 3:
        return <Page3 />;
        break;

      default:
        break;
    }
  };
  return (
    <div>
      <h1>Packages and Prices with Adjustable Solar Beacons</h1>
      <DropdownButton id="dropdown-basic-button" title="Price selection">
        <Dropdown.Item onClick={setLowToHigh}>Low to High</Dropdown.Item>
        <Dropdown.Item onClick={setHighToLow}>High to low</Dropdown.Item>
        <Dropdown.Item onClick={reset}>Reset</Dropdown.Item>
      </DropdownButton>

      <div>
        <button
          onClick={() => filterPrice("$")}
          className=" m-1 text-red-500 border-red-500 hover:bg-red-500 hover:text-white"
        >
          $
        </button>
      </div>
      {option.map((data) => (
        <div key={data.id} className=" w-[48%] mx-[4%]">
          <img
            src={data.image}
            alt=""
            classname="w-[40%] h-[45%]"
            onClick={() => renderComp(data.id)}
          />
          <h1 className="text-lg text-slate-800">{data.name}</h1>
          <h1 className="text-slate-800 text-base font-thin">{data.price}</h1>
        </div>
      ))}
    </div>
  );
};

export default Type;
