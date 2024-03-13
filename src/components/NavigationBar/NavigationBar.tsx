import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../assets/images/app-logo.png";

const NavigationBar = () => {
  return (
    <div className="nav-bar-container">
      <nav className="nav-bar">
        <div className="nav-bar-logo-container">
          <Link className="nav-bar-logo-link" href={"/"}>
            <Image
              alt="App logo"
              src={logo}
              width={0}
              height={0}
              className="nav-bar-logo"
            ></Image>
            AR/VR CTD Research
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
