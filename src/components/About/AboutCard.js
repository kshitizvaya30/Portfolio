import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kshitiz Vaya </span>
            from <span className="purple"> Udaipur, India.</span>
            <br />I am a Third year student pursuing Btech in Electronics and Communication Engineering from College of Technology and Engineering , Udaipur.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Web Series 
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Turning Your Paperball Into Paperplane"{" "}
          </p>
          <footer className="blockquote-footer">Kshitiz</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
