import React from "react";
import Logo from "../../assets/images/cropped-Care-Arabian-01 1.png";
import Form from 'react-bootstrap/Form';

const Footer = () => {
  return (
    <div className="footer_auto">
      <div className="footer_div">
        <ul className="list4">
          <li>
            <img className="logo_headerf" src={Logo} alt="Logo"/>
          </li>
          <li>
            <p className="f_p">
              We make sure that your safety is never compromised. This is why we
              hire all the staff under the roof of Home Comfort, just for your
              satisfaction.
            </p>
          </li>
        </ul>
        <ul className="list">
          <li>Home</li>
          <li>Services</li>
          <li>Contact-us</li>
        </ul>
        <ul className="list2">
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Limked-in</li>
          <li>Instagram</li>
        </ul>
        <ul className="list">
          <li>+92-304-0483778</li>
          <li>dev.hamza@gmail.com</li>
          <ul className="list1">
            <li>
            <Form.Control className="form_footer" size="sm" type="text" placeholder="Small text" />
            </li>
            <li>
              <button className="button_form_f">Send</button>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
