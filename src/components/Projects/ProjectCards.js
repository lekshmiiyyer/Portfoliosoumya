import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img"
      style={{ height: props.height }} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        <div className="d-flex justify-content-center mb-3">
          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              className="me-2"
            >
              Demo
            </Button>
          )}

          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
          >
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        </div>

        <div>
          {props.techStackIcons && props.techStackIcons.map((icon, index) => (
            <span key={index} className="me-2" style={{ fontSize: "30px" }}>{icon}</span>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
