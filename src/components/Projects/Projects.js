import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/water.png";
import emotion from "../../Assets/Projects/carbon.png";
import editor from "../../Assets/Projects/autores.png";
import chatify from "../../Assets/Projects/firstcook.png";
import suicide from "../../Assets/Projects/quiz.png";
import diab from "../../Assets/Projects/diab.png";
import bitsOfCode from "../../Assets/Projects/cookclique.png";
import resmilar from "../../Assets/Projects/resmilar.png";
import {
 SiFigma,
 SiReact,
 SiNextdotjs,
 SiCss3,
 SiSpringboot,
 SiMongodb,
 SiTailwindcss,
 SiPython,
 SiGooglecolab,
 SiDialogflow
} from "react-icons/si";


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
              title="FOOD4LIFE"
              description="
              Welcome to FOOD4LIFE's Online Hub! Step into the world of FOOD4LIFE through our digital platform, where our Figma prototype showcases the essence of our restaurant experience. Explore our meticulously curated menu featuring a diverse array of dishes inspired by flavors from around the world, from hearty comfort foods to gourmet delicacies. "
              demoLink="https://www.figma.com/proto/otHA92kV1jZtMgxTrZuv4F/THE-FOOD4LIFE-RESTAURANT?node-id=22-4&t=e2LUvDlkFUqKa6VF-1&scaling=contain&page-id=21%3A5&starting-point-node-id=22%3A4&show-proto-sidebar=1"
              techStackIcons={[<SiFigma/>]}
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="CookClique"
              description="This platform streamlines recipe sharing, connecting local cooks, fostering community discussions, and facilitating skill enhancement through events. Users can discover new recipes, find nearby cooking enthusiasts for ingredient sharing, troubleshoot cooking challenges in forums. It simplifies culinary tasks, promotes knowledge exchange, and enhances cooking experiences."
              demoLink="https://www.figma.com/proto/lu0XdFrSAhg4MQD8DC0mul/Untitled?node-id=4-79&t=urhEqx44CE34KljK-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2"
              techStackIcons={[<SiFigma/>]}
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              style={{ height: "700px" }}
              isBlog={false}
              title="AutoRes"
              description="AutoRes offers a streamlined resume-building experience with its live reflection feature. Its plain front-end design provides simplicity, while its advanced functionality opens doors to future enhancements and expansions. With AutoRes, users enjoy a user-friendly interface and the potential for ongoing improvements, making it a promising tool in the resume creation landscape."
              // ghLink="https://github.com/lekshmiiyyer"
              // demoLink="https://editor.soumya-jit.tech/"  
              techStackIcons={[<SiReact/>,<SiNextdotjs/>,<SiCss3/>,<SiTailwindcss/>,<SiSpringboot/>,<SiMongodb/> ]}           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Water Consumption Monitor"
              description="The Water Consumption Monitor, designed in Figma, offers a user-friendly solution for tracking household water usage. With intuitive data visualization, users can monitor daily consumption across activities like bathing and cooking, empowering households to conserve resources effectively while promoting sustainable habits. Leveraging Figma's versatile tools, this interface provides a modern and visually engaging experience, making water conservation a seamless part of daily life."
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://www.figma.com/proto/VbsOVI1zXgxWH4X3iiWRV8/The-Figma-Basics?t=Qr809JxqWqJfGco0-1&scaling=min-zoom&page-id=0%3A1&node-id=4-2&starting-point-node-id=4%3A2"
              techStackIcons={[<SiFigma/>]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="React Quiz App"
              description="Introducing a React Quiz App, application designed to test users' knowledge of React concepts. With a user-friendly interface, the app presents a series of questions related to React development.Users can engage in an interactive quiz experience, reinforcing their understanding of React while enjoying a fun and educational activity. "
              ghLink="https://github.com/lekshmiiyyer/React-Quiz-Mine"
              demoLink="https://know-react-quiz.netlify.app"
              techStackIcons={[<SiReact/>]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Carbon Credit Calculator"
              description="Embark on sustainability with our in-progress Carbon Footprint Tracker and Credits Trading Platform. Our solution streamlines emissions tracking and carbon credits trading, empowering users to offset their footprint and support green initiatives effortlessly."
              //ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
               demoLink="https://www.figma.com/proto/b6MXrazRBtQWX1ZkHvpCCK/The-footprint?node-id=90-126&t=jxfFdVvRjm18KdU1-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=90%3A126"
               techStackIcons={[<SiFigma/>]}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resmilar}
              isBlog={false}
              title="Resume Similarity Calc"
              description="Introducing our Resume Similarity Calculator, a tool designed to assess the percentage match of a resume to provided descriptors. This innovative solution evaluates resumes against predefined criteria, providing users with a comprehensive analysis of how well their qualifications align with job requirements or other specified criteria. By leveraging advanced algorithms and data analytics, our calculator offers accurate and insightful feedback, empowering individuals to optimize their resumes for maximum impact in job applications and beyond."
              ghLink="https://github.com/lekshmiiyyer/Resume-similarity/blob/main/Resume_Similarity.ipynb"
              // demoLink="https://www.figma.com/proto/b6MXrazRBtQWX1ZkHvpCCK/The-footprint?node-id=90-126&t=jxfFdVvRjm18KdU1-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=90%3A126"
              techStackIcons={[<SiPython/>,<SiGooglecolab/>]}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={diab}
              isBlog={false}
              title="mySugr"
              description="mySugr is a user-friendly platform that allows users to upload their blood test reports and receive simplified explanations of medical terms using AI. Additionally, it features a chatbot that provides personalized insights and guidance based on the user's test results, promoting proactive health management."
              ghLink="https://github.com/visiodei888/mySugr"
               demoLink="https://devpost.com/software/mysugr"
               techStackIcons={[<SiReact/>,<SiCss3/>,<SiPython/>,<SiGooglecolab/>,<SiDialogflow/>]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
