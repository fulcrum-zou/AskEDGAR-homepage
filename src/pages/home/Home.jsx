import React from "react";
import { useState } from "react";
import logo from "../../logos/AskEDGAR.png"; // Placeholder logo
import amazonLogo from "../../logos/amazon.png"; // Company 1 logo
import appleLogo from "../../logos/apple.png"; // Company 2 logo
import microsoftLogo from "../../logos/microsoft.png"; // Company 3 logo
import nvidiaLogo from "../../logos/nvidia.svg"; // Company 4 logo
import brkLogo from "../../logos/berkshirehathaway.png"; // Company 5 logo
import "./home.css";

function Home() {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="Home">
      <header className="Home-header">
        <div className="Logo-container">
          <img src={logo} className="Home-logo" alt="logo" />
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
          <h1>Chat with SEC 10-Ks</h1>
          <p>
            We are building a tool that uses the power of open source LLM tools
            to streamline the retrieval/synthesis process for working with SEC
            filings. Try our demo today or visit our Blog to learn how to deploy
            your own.
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

export default Home;
