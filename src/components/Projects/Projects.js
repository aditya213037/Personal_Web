import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/zomi.svg";
// import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/game2.png";
import chatify from "../../Assets/Projects/digital.png";
import suicide from "../../Assets/Projects/e-commerce.png";
import bitsOfCode from "../../Assets/Projects/cafe.png";

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
              title="Digital-Marketing"
              description="Developed a visually engaging front-end for a Digital Marketing website using HTML, CSS, and JavaScript. The site features a responsive design, interactive elements, and seamless navigation to enhance user experience and effectively showcase digital marketing services."
              ghLink="https://github.com/aditya213037/Marketing-Agency"
              demoLink="https://adity211-marketing-agency.netlify.app/#home"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Online Cafe"
              description="Designed an inviting front-end for an Online Cafe using HTML, CSS, and JavaScript. The site includes a responsive layout, appealing visuals, and intuitive navigation to provide users with a delightful browsing experience while exploring menu items and cafe services."
              ghLink="https://github.com/aditya213037/Online-cafe?tab=readme-ov-file"
              demoLink="https://online-cafe-and-food-delivery.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="GAME_ZONE"
              description="Crafted a dynamic front-end for a Game-Zone website using HTML, CSS, and JavaScript. The site features a responsive design, interactive elements, and vibrant visuals to engage users and provide an immersive experience while exploring various games and features."
              ghLink="https://github.com/aditya213037/GameZone"
              demoLink="https://kunjgit.github.io/GameZone/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="ROMI"
              description="Developed a sleek front-end for the Romi-Crypto app using HTML, CSS, and JavaScript. The app boasts a responsive design, intuitive interface, and engaging visuals to facilitate seamless navigation and enhance the user experience in managing cryptocurrency portfolios."
              ghLink="https://github.com/aditya213037/romi-clone"
              demoLink="https://github.com/aditya213037/romi-clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="E-commerce"
              description="Created an attractive and user-friendly front-end for an E-commerce website using HTML, CSS, and JavaScript. The site features a responsive design, smooth navigation, and engaging product displays to enhance the shopping experience and drive customer engagement."
              ghLink="https://github.com/aditya213037/ecommerce-website-html-css"
              demoLink="https://ecommerce-website-html-css.vercel.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
