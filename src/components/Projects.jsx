import { Container, Row, Col,Tab, Nav } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from "react-on-screen";
import { ProjectCard } from "./ProjectCards"
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";



export const Projects = () => {

    const projects = [
            {
                // title: "Landing Page",
                imgUrl: projImg1
            },
            {
                // title: "Sign in page",
                imgUrl: projImg2
            },
            {
                // title: "Trips page",
                imgUrl: projImg3
            },
            {
                // title: "Maps page",
                imgUrl: projImg4
            },
            {
                // title: "Budget page",
                imgUrl: projImg2
            },
            {
                // title: "Itinerary",
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
                    <p>As a Fullstack Software Engineer, I developed web applications using FastAPI, Django, React, HTML5, and CSS, focusing on robust backend systems, responsive interfaces, and enhanced security features, all within Agile frameworks.</p>
                    </div>}
                    </TrackVisibility>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Guide Me</Nav.Link>
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
                            <Tab.Pane eventKey="third">Lorem ipsum.</Tab.Pane>
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
