import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="PlanBttr"
              description="A  Full-featured application providing features like scheduling meetings between different people integrating
              platforms as Google Meet, Zoom, Phone calls, Microsoft Outlook, and Yahoo Calendar (Similar to Calendly)."
              link="http://localhost:3000/projects/planbttr"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Blood Donor Portal"
              description=" A full-stack application helping people to find donors for blood and plasma during the Covid-19
              pandemic with helping over 2000 people in the city Udaipur."
              link="http://localhost:3000/projects/blood_donor"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Covid_19 Tracker"
              description="A COVID-19 Tracker/Dashboard website displaying different covid cases and data happening across the globe ."
              link="http://localhost:3000/projects/covid_tracker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="MemeGen"
              description="MemeGen is a web applicaton which genrates meme automatically according to the given Image. All the User has to do is, get a random image and set the Text. MemeGen will generate a meme and allow the User to donload it along with the option to see Saved meme"
              link="http://localhost:3000/projects/meme_generator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Stack OverFlow Crawler"
              description="Developed , Distributed downloader process with NodeJs request Client using cluster and worker threads."
              link="http://localhost:3000/projects/stack_overflow_Crawler"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
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
