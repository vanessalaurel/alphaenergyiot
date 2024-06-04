import React from "react";
import Navbar from "./component/Navbar";
import Bottom from "./component/Bottom";
import Home from "./component/Home";
import About from "./component/About";
import Type from "./component/Type";
import Page1 from "./component/Page1";
import pg2 from "./component/Page2";
import pg3 from "./component/Page3";
import Join from "./component/Join";
import Contact from "./component/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/join" element={<Join />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>

      <div className="mt-[4%] ">
        <Bottom></Bottom>
      </div>
    </div>
  );
}

export default App;
