import React from "react";
import Logo from "../../assets/images/cropped-Care-Arabian-01 1.png";
import { Button } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div>
          <img className="logo_header" src={Logo} />
        </div>
        <div className="header_button">
          <Button className="b-1">Home</Button>
          <Button className="b-1">Services</Button>
          <Button className="b-1">Contact Us</Button>
          <Button className="b-4">+92-304-0483778</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
