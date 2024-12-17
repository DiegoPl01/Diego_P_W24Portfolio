import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="blue">Diego Plata </span>
            from Villavo, Colombia.
            <br />
            <br />
            I recently majored & graduated in 
            <span className="blue"> Computer Programming & Analysis </span>
            with an Advanced Diploma from George Brown College.
            <br />
            <br />
            Currently <span className="blue">seeking</span> the 
            opportunity of joining a team where I can learn, grow & work.
            <br />
            <br />
            Apart from coding, some other activities that I like to do!
            So you can know me better...
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exercise
            </li>
            <li className="about-activity">
              <ImPointRight /> Trying new food
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing sports
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Everyday it gets easier, but you gotta do it everyday. That's the hard part"{" "}
          </p>
          <footer className="blockquote-footer">Diego Plata</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
