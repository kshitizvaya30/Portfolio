import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bloodDonor from "./../../Assets/Projects/blood-donor/2.jpg";
import Covid from "./../../Assets/covid.jpg";
import MemeGen from "./../../Assets/Projects/MemeGenerator/3.png";
import StackOverflow from "./../../Assets/Projects/StackOverflow/1.jpg";
import Spotify from "./../../Assets/Projects/Spotify/2.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bloodDonor}
              title="Blood Donor Portal"
              description=" A full-stack application helping people to find donors for blood and plasma during the Covid-19
              pandemic with helping over 2000 people in the city Udaipur."
              link="/projects/blood_donor"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Covid}
              title="Covid_19 Tracker"
              description="A COVID-19 Tracker/Dashboard website displaying different covid cases and data happening across the globe ."
              link="/projects/covid_tracker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MemeGen}
              title="MemeGen"
              description="MemeGen is a web applicaton which generates meme automatically according to the given Image. All the User has to do is, get a random image and set the Text."
              link="/projects/meme_generator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={StackOverflow}
              title="Stack OverFlow Crawler"
              description="Developed , Distributed downloader process with NodeJs request Client using cluster and worker threads."
              link="/projects/stack_overflow_crawler"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Spotify}
              title="Spotify"
              description="A ReactJS application, allowing users to log in through Spotify and enjoy their original playlist which is there on Spotify"
              link="/projects/spotify"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
