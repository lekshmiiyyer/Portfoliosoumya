import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Lekshmi L </span>
            from <span className="purple"> Kerala, India.</span>
            <br />
            I am currently pursuing B.Tech in Computer Science and Engineering from Christ College of Engineering, irinjalakuda.
            <br />
            Passionate about fostering innovation, driving teams towards excellence, and facilitating career opportunities as a dedicated Placement Cell Representative 
            and also the student lead for an ex-googler's venture.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />  Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Motivational Speaking
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Poems
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Perfection isn't flawless; it's the journey towards better!"{" "}
          </p>
          <footer className="blockquote-footer">Lekshmi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
