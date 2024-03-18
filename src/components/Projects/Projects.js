import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import angular from "../../Assets/Projects/angular.png";
import cybersecurity from "../../Assets/Projects/cybersecurity.png";
import resume from "../../Assets/Projects/resume.png";
import typescript from "../../Assets/Projects/typescript.png";
import test from "../../Assets/Projects/test.png";

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
              imgPath={resume}
              isBlog={false}
              title="AI Resume Builder"
              description="This project revolves around the development and integration of a job site, by establishing effective connections between frontend and backend systems. It involves leveraging AI capabilities to enhance the user resume building experience. Ongoing efforts ensure the system continues to evolve and meet the needs of its users effectively."
              ghLink="https://github.com/jayden-n/jotrack"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={test}
              isBlog={false}
              title="Testing NodeJS"
              description="Testing a NodeJS application using Mocha. Managing npm modules such as mocha and chai. Set some test cases that includes passing and failling scenarios for different mathematical operations. Displayed custom pass/fail messages and ensured clarity in test results "
              ghLink="https://github.com/DiegoPl01/lab2_mocha_test"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={angular}
              isBlog={false}
              title="Angular APP"
              description="This project includes setting up an express application generator, implementing routes and body parser middleware and handling POST submissions in POSTMAN. Then created an Angular APP and made important modifications to the development server."
              ghLink="https://github.com/DiegoPl01/Lab06_101354581"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={typescript}
              isBlog={false}
              title="Typescript"
              description="Introduced typescript into my knowledge stack by focusing on fundamental concepts and practical applications. Installed the typescript compiler globally and enhanced code based on Javascript by using Typescript ES6 features such as lambda functions, template literals and typed properties. Providing hands-on experience on TypeScript fundamentals and laying a solid foundation for further exploration. "
              ghLink="https://github.com/DiegoPl01/Lab05_101354581"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cybersecurity}
              isBlog={false}
              title="CyberSecurity"
              description="A repository for fun where I save my cybersecurity practices. Such as perform network audits and discover network insecurities, implement passive sniffing using Wireshark, tracing network communication and analyze network activity, and generate custom network activity and demonstrating various network attacking techniques."
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
