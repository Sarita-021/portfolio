import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./projectscard";
import "../CSS/project.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({duration: 1200}); // Initialize AOS animations

const Project = ({ props }) => {  // Keeping function structure the same
  return (
    <Container fluid className="project-section">
      <Container>
        <div className='title'>
          <h3>A taste of what I can do for you </h3>
          <p>Check what I made - this is worth a thousand words about me.</p>
        </div>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {props.Projects.map((project) => (  // Keeping props.Projects.map()
            <Col key={project.id} md={4} className="project-card" data-aos="fade-up">
              <ProjectCard
                imgPath={project.img}   // Matching expected prop names
                isBlog={project.isBlog}
                title={project.title}
                description={project.description}
                ghLink={project.glink}  // GitHub link
                demoLink={project.demo} // Demo link
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Project;

