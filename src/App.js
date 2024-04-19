import React from "react";
import Navbar from "./component/Navbar";
import Bottom from "./component/Bottom";
import Home from "./component/Home";
import About from "./component/About";
import Type from "./component/Type";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="mt-[4%]">
        {/* <Home></Home> */}
        {/* <About></About> */}
        <Type></Type>
      </div>
      <div className="mt-[4%] ">
        <Bottom></Bottom>
      </div>
    </div>
  );
}

export default App;
