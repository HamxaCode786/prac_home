import React from "react";
import { Card } from "react-bootstrap";
const Cardsection = () => {
  return (
    <div className="card_div">
      <section>
        <h1 className="card_heading1">
          Explore Our <span className="card_heading2">Services</span>
        </h1>
        <div className="cards_div">
          <Card className="card_1">
            <Card.Body className="card_background">
              <ul className="list_cards">
                <li>
                  <h1 className="title_card">AC Service</h1>
                </li>
                <li>
                  <button className="button_cards">check</button>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Cardsection;
