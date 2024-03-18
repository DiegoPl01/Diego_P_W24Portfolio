import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Diego Plata </span>
            from <span className="purple"> Villavo, Colombia.</span>
            <br />
            I am currently an international student at George Brown College.
            <br />
            I will have completed an <span className="purple">associate degree (AD)</span> in 
            <span className="purple"> Computer Programming & Analysis</span> by end of 
            <span className="purple"> April 2024</span>. And hopefully to attend the prestigious
            <span className="purple"> University of Toronto (UoF) </span> 
            by <span className="purple"> 2030</span>.
            <br />
            <br />
            Apart from coding, some other activities that I like to do!
            So you can know me better...
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Videogames
            </li>
            <li className="about-activity">
              <ImPointRight /> Trying new food
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching series and movies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Everyday it gets easier, but you gotta do it everyday. That's the hard part"{" "}
            {/* In the grand scheme of things, we are just tiny specs that will one day be forgotten. So it doesn't matter what we did or how we'll be remembered. The only thing that matters is right now. This moment and what you do with it. */}
          </p>
          <footer className="blockquote-footer">Diego Plata</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
