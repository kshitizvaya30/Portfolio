import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" style={{height: '45%'}}/>
      <Card.Body className="d-flex flex-column">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text
          style={{
            textAlign: "justify",
          }}
        >
          {props.description}
        </Card.Text>
        <Button variant="primary" className="mt-auto" href={props.link}>
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : "View Project"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
