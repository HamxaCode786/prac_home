import React from "react";
import Person from "../../src/assets/images/Mask group.png";

const Home = () => {
  return (
    <section className="outer_div">
      <div className="list_1hp">
        <ul className="li">
          <li>
            <h2 className="f1_h">Best In Dubai</h2>
          </li>
          <li className="f2_h">
            <h2>welcome To</h2>
          </li>
          <li className="f3_h">
            <h2>
              Home <span>Comfort</span>
            </h2>
          </li>
          <li>
            <p className="f4_h">
              Home Comfort provides home repair services in Dubai with
              reasonable rates. We fix it right with home comfort professional
              experts.
            </p>
          </li>
          <ul className="li2">
            <li>
              <button className="b1_hp">Contact Us</button>
            </li>
            <li>
              <button className="b1_hp2">Learn More</button>
            </li>
          </ul>
        </ul>
      </div>
      <div>
        <img className="person" src={Person} alt="person" />
      </div>
    </section>
  );
};

export default Home;
