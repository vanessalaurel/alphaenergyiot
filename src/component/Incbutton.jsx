import { React, useState } from "react";

const Incbutton = ({ minVal = 0, maxVal = 100 }) => {
  const [count, setCount] = useState(minVal);
  const Increment = () => {
    if (count < maxVal) {
      setCount((prevState) => prevState + 1);
    }
  };
  const Decrement = () => {
    if (count > minVal) {
      setCount((prevState) => prevState - 1);
    }
  };
  return (
    <div>
      <div classname=" bg-white flex">
        <button className="bg-slate-300 text-black" onClick={Increment}>
          +
        </button>
        <p className="text-black">{count}</p>
        <button className="bg-slate-300 text-black" onClick={Decrement}>
          -
        </button>
      </div>
    </div>
  );
};

export default Incbutton;
