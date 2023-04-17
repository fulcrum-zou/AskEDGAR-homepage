import React from "react";
import { useState } from "react";
import logo from "./logos/AskEDGAR.png"; // Placeholder logo
import amazonLogo from "./logos/amazon.png"; // Company 1 logo
import appleLogo from "./logos/apple.png"; // Company 2 logo
import microsoftLogo from "./logos/microsoft.png"; // Company 3 logo
import nvidiaLogo from "./logos/nvidia.svg"; // Company 4 logo
import brkLogo from "./logos/berkshirehathaway.png"; // Company 5 logo
import "./App.css";

function App() {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </nav>
        <div className="Logo-container">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="Company-logos">
          <img
            src={amazonLogo}
            className="Company-logo amazon"
            alt="company1-logo"
          />
          <img
            src={appleLogo}
            className="Company-logo apple"
            alt="company2-logo"
          />
          <img
            src={microsoftLogo}
            className="Company-logo microsoft"
            alt="company3-logo"
          />
          <img
            src={nvidiaLogo}
            className="Company-logo nvidia"
            alt="company4-logo"
          />
          <img src={brkLogo} className="Company-logo brk" alt="company5-logo" />
        </div>
        <div className="Product-introduction">
          <h1>Introducing Our Product</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="Button">
            <button onClick={toggleOptions}>Learn More</button>
          </div>
          {showOptions && (
            <div className="Options-container">
              <ul>
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
                <li>Option 4</li>
                <li>Option 5</li>
              </ul>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
