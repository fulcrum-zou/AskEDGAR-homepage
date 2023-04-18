import React from "react";
import logo from "../../logos/AskEDGAR.png"; // Placeholder logo
import amazonLogo from "../../logos/amazon.png"; // Company 1 logo
import appleLogo from "../../logos/apple.png"; // Company 2 logo
import microsoftLogo from "../../logos/microsoft.png"; // Company 3 logo
import nvidiaLogo from "../../logos/nvidia.svg"; // Company 4 logo
import brkLogo from "../../logos/berkshirehathaway.png"; // Company 5 logo
import "./home.css";

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <div className="Logo-container">
          <img src={logo} className="Home-logo" alt="logo" />
        </div>
        <div className="Product-introduction">
          <h1 className="title">Chat with SEC 10-Ks</h1>
          <p className="content">
            We are building a tool that uses the power of open source LLM tools
            to streamline the retrieval/synthesis process for working with SEC
            filings.
          </p>
          <p className="content">
            Try our demo today or visit our blogs to learn how to deploy your
            own.
          </p>
          <div className="Company-logos">
            <a href="https://test2-three-eta.vercel.app/" target="_blank">
              <img
                src={amazonLogo}
                className="Company-logo amazon"
                alt="company1-logo"
              />
            </a>
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
            <img
              src={brkLogo}
              className="Company-logo brk"
              alt="company5-logo"
            />
          </div>
          <div className="Buttons">
            <a href="https://test2-three-eta.vercel.app/" target="_blank">
              <button>Try Demo</button>
            </a>
            <a href="https://askedgar.ghost.io/" target="_blank">
              <button>View Blogs</button>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
