import React from "react";
import "../Styles/Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="http://assets.stickpng.com/images/5842a770a6515b1e0ad75afe.png"
          alt=""
        />
      </div>
      <div className="header__right">
        {/* HeaderOption */}
        <h4>Home</h4>
      </div>
    </div>
  );
};

export default Header;
