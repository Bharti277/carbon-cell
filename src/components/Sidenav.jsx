import React from "react";
import "./Sidenav.css";
import MenuIcon from "@mui/icons-material/Menu";

const Sidenav = () => {
  return (
    <div className="sidenav">
      <div className="logo">
        <div className="name">
          {/* <div className="logo__img">img</div> */}
          <div className="logo__name">
            <div className="name__first">Carbon</div>
            <div className="name__second">Cell</div>
          </div>
        </div>
        <div className="hamburger__menu">
          <MenuIcon />
        </div>
      </div>
      <div className="search">
        <input type="text" placeholder="Search" />
      </div>
      <div className="side__navbar">
        <div className="home">Home</div>
        <div className="home">Organization</div>
        <div className="home">Assets</div>
        <div className="home">Trade</div>
        <div className="home">History</div>
        <div className="home">Wallet</div>
      </div>
      <div className="bottom__navbar">
        <div className="home">Notifications</div>
        <div className="home">Suport</div>
        <div className="home">Settings</div>
      </div>
    </div>
  );
};

export default Sidenav;
