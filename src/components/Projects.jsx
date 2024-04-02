import { Container, Row, Col,Tab, Nav } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from "react-on-screen";
import { ProjectCard } from "./ProjectCards"
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";


export const Projects = () => {

    const projects = [
            {
                title: "Machine Learning Project",
                description: "Developed a machine learning model to predict stock market trends with 85% accuracy. Utilized Python, TensorFlow, and scikit-learn for data processing and model training.",
                imgUrl: projImg1
            },
            {
                title: "Full-Stack Web Application",
                description: "Engineered a full-stack web application for a local bookstore to manage inventory and sales online. Implemented with React for the frontend and Node.js + Express for the backend.",
                imgUrl: projImg2
            },
            {
                title: "Mobile App Development",
                description: "Created a cross-platform mobile app to track fitness activities, supporting both iOS and Android. Built with Flutter and Dart, integrated with Google Fit and Apple HealthKit.",
                imgUrl: projImg3
            },
            {
                title: "Blockchain Project",
                description: "Contributed to the development of a decentralized application (DApp) for secure voting. Employed Solidity for smart contracts and Ethereum blockchain for deployment.",
                imgUrl: projImg1
            },
            {
                title: "Cloud Computing Solution",
                description: "Architected a cloud-based solution for scalable web hosting, leveraging AWS services including EC2, S3, and RDS. Achieved a 99.9% uptime and reduced costs by 20%.",
                imgUrl: projImg2
            },
            {
                title: "Data Visualization Dashboard",
                description: "Designed and developed an interactive data visualization dashboard for analyzing sales data. Used D3.js and Vue.js for dynamic charts and graphs.",
                imgUrl: projImg3
            }
        ];


   return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                        {({isVisible}) =>
                        <div className={isVisible ? "animate__animated animate__slideInUp": ""}>
                    <h2>Projects</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit in leo et mollis.</p>
                    </div>}
                    </TrackVisibility>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Tab one</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Tab two</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">
                            Tab three
                            </Nav.Link>
                        </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                      projects.map((project, index) => {
                                        return (
                                            <ProjectCard
                                            key={index}
                                            {...project}
                                            />
                                        )
                                      })
                                    }
                                </Row>

                            </Tab.Pane>
                            <Tab.Pane eventKey="first">Lorem ipsum.</Tab.Pane>
                            <Tab.Pane eventKey="second">Lorem ipsum.</Tab.Pane>

                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
   )
};
