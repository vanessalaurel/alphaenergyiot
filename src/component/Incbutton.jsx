import { React, useState } from "react";

const Incbutton = ({ minVal = 1, maxVal = 100 }) => {
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
      <div className=" bg-white flex">
        <button
          className="bg-slate-200 rounded-md w-6 text-black "
          onClick={Increment}
        >
          +
        </button>
        <p className="text-black mx-3">{count}</p>
        <button
          className="bg-slate-200 rounded-md w-6 text-black "
          onClick={Decrement}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Incbutton;
