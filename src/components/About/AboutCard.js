import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kanan Arora </span>
            from <span className="purple"> Bangalore, India.</span>
            <br />
            I am currently studying computer science in Scaler School of Technology.
            <br />
            I am pursuing Bsc Computer Science from BITS Pilani.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Solving Problems
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Never get in your comfort space."{" "}
          </p>
          <footer className="blockquote-footer">Kanan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
