import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Frontend from "../../Assets/Frontend.png";
import Portfolio from "../../Assets/Portfolio.jpeg";
import quizGame from "../../Assets/quizGame.jpeg";
import musicPlayer from "../../Assets/musicPlayer.png"


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
              imgPath={quizGame}
              isBlog={false}
              title="Quiz Game"
              description=" A streamlined platform for short, five-question quizzes with instant scoring."
              ghLink="https://github.com/kananarora1/Quiz-Game"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              isBlog={false}
              title="Portfolio Website"
              description="My Portfolio build with React.js and hosted on Github Pages. It showcases my projects, education, and skills."
              ghLink="https://github.com/kananarora1/Portfolio"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={musicPlayer}
              isBlog={false}
              title="Music Player"
              description="A music player built with js that allows users to play, pause, and skip songs."
              ghLink="hhttps://github.com/kananarora1/music-player"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Frontend}
              isBlog={false}
              title="Frontend Website"
              description="A frontend website demo build using html,css"
              ghLink="https://github.com/kananarora1/Frontend_project"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
