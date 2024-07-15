import React from "react";
import X1 from "../../src/assets/images/noun-price-2011179 1.png";
import X2 from "../../src/assets/images/noun-team-144387 1.png";
import X3 from "../../src/assets/images/noun-twenty-four-hours-1239181 1.png";

const Home2 = () => {
  return (
    <div>
      <div>
        <ul className="logo_2">
          <li className="logo_background">
            <img className="img_3" src={X1} />
          </li>
          <li className="logo_background">
            <img className="img_3" src={X2} />
          </li>
          <li className="logo_background">
            <img className="img_3" src={X3} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home2;
