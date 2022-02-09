import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import planbttr from "./../../Assets/Projects/Planbttr/PB.jpg";
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
              imgPath={planbttr}
              isBlog={false}
              title="PlanBttr"
              description="A  Full-featured application providing features like scheduling meetings between different people integrating
              platforms as Google Meet, Zoom, Phone calls, Microsoft Outlook, and Yahoo Calendar (Similar to Calendly)."
              link="http://localhost:3000/projects/planbttr"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bloodDonor}
              isBlog={false}
              title="Blood Donor Portal"
              description=" A full-stack application helping people to find donors for blood and plasma during the Covid-19
              pandemic with helping over 2000 people in the city Udaipur."
              link="http://localhost:3000/projects/blood_donor"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Covid}
              isBlog={false}
              title="Covid_19 Tracker"
              description="A COVID-19 Tracker/Dashboard website displaying different covid cases and data happening across the globe ."
              link="http://localhost:3000/projects/covid_tracker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MemeGen}
              isBlog={false}
              title="MemeGen"
              description="MemeGen is a web applicaton which generates meme automatically according to the given Image. All the User has to do is, get a random image and set the Text."
              link="http://localhost:3000/projects/meme_generator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={StackOverflow}
              isBlog={false}
              title="Stack OverFlow Crawler"
              description="Developed , Distributed downloader process with NodeJs request Client using cluster and worker threads."
              link="http://localhost:3000/projects/stack_overflow_crawler"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Spotify}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="A ReactJS application, allowing users to log in through Spotify and enjoy their original playlist which is there on Spotify"
              link="http://localhost:3000/projects/spotify"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
