import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import SpaceX from "../../Assets/Projects/SpaceX.png";
import cybersecurity from "../../Assets/Projects/cybersecurity.png";
import resume from "../../Assets/Projects/resume.png";
import image from "../../Assets/Projects/Back_&_Frontend.png";
import ML from "../../Assets/Projects/ML.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="blue">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
          <br />
          You can try them in your personal device by following the installation instructions.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resume}
              isBlog={false}
              title="AI Resume Builder"
              description="Job posting website & resume builder integrated with AI built with Typescript, Tailwind CSS, MongoDB & Docker. Leveraged OpenAI's API to create ATS-optimized resumes and suggest best job opportunities based of compatibility."
              ghLink="https://github.com/jayden-n/jotrack"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ML}
              isBlog={false}
              title="Machine Learning Projects"
              description="Repository showcasing my personal experiences learning machine learning from scratch, step to step explanations on what I was trying to achieve and how I overcame obstacles during the learning curve. "
              ghLink="https://github.com/DiegoPl01/Applied-Machine-Learning"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SpaceX}
              isBlog={false}
              title="SpaceX Mission List"
              description="Created an angular app in which I used SpaceX API's to display all its mission launches from 2006 - 2020. Displayed important information of each mission through proper interface and implemented a search filter by year. "
              ghLink="https://github.com/DiegoPl01/Lab06_101354581"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={image}
              isBlog={false}
              title="Back & Frontend APP"
              description="This is a backend & frontend application developed to manage the employee database of a company in which users are first authenticated and authorized through JWT, and then are able to realize CRUD operations to manage employee data."
              ghLink="https://github.com/DiegoPl01/101354581_comp3133_assig2"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cybersecurity}
              isBlog={false}
              title="CyberSecurity Practices"
              description="A repository showcasing cybersecurity practices, including network audits, identifying vulnerabilities, passive sniffing with Wireshark, tracing and analyzing network activity, generating custom network traffic, and demonstrating network attack techniques."
              ghLink="https://github.com/DiegoPl01/comp3134Winter2024"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
