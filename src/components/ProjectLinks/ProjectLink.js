import React from "react";
import { Container, Row, Col, Carousel, Button, Badge } from "react-bootstrap";
import Particle from "../Particle";
import "./ProjectLink.css";

function ProjectLink({ projectData }) {
  const links = projectData.links.map((link) => {
    if (link.url) {
      return (
        <Col>
          <Button
            variant="outline-primary link"
            size="sm"
            rel="noopener noreferrer"
          >
            <a href={link.url} target="_blank">
              {link.name}
            </a>
          </Button>
        </Col>
      );
    }
  });

  const badgesData = projectData.tech_stack.list.map((data) => {
    return (
      <Badge
        pill
        bg="info"
        className="text-secondary bg-white mr-3"
        style={{ fontSize: "0.8rem" }}
      >
        {data}
      </Badge>
    );
  });

  const featuresData = projectData.features.list.map((data, index) => {
    return <li key={index}>{data}</li>;
  });

  const imagesData = projectData.images.map((data) => {
    return (
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "500px", objectFit: "cover", maxHeight: "100vh" }}
          src={data.url}
          alt={data.alt}
        />
        <Carousel.Caption>
          <h3>{data.label}</h3>
          <p>{data.info}</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h2 className="text-left text-white">{projectData.company_name}</h2>
        <Row xs={12} md={6}>
          <Col xs={12} md={6}>
            <Row xs={2} md={4} lg={6}>
              {links}
            </Row>
            <Row xs={12} md={12} lg={12}>
              <Col className="text-left text-white mt-3">
                <h5>{projectData.tech_stack.name}</h5>
                {badgesData}
              </Col>
            </Row>
            <Row xs={12} md={12} lg={12}>
              <Col className="text-left text-white mt-3">
                <h6>{projectData.features.name}</h6>
              </Col>
            </Row>
            <Row xs={12} md={12} lg={12}>
              <Col className="text-left text-white">
                <ul style={{ fontSize: "0.8rem" }}>{featuresData}</ul>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6}>
            <Carousel>{imagesData}</Carousel>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ProjectLink;
