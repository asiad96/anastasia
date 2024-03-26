import { Container, Row, Col } from "react-bootstrap"
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';

export const Projects = () => {

    const projects = [
            {
                "title": "Machine Learning Project",
                "description": "Developed a machine learning model to predict stock market trends with 85% accuracy. Utilized Python, TensorFlow, and scikit-learn for data processing and model training.",
                "imgUrl": "https://example.com/machinelearning.jpg"
            },
            {
                "title": "Full-Stack Web Application",
                "description": "Engineered a full-stack web application for a local bookstore to manage inventory and sales online. Implemented with React for the frontend and Node.js + Express for the backend.",
                "imgUrl": "https://example.com/fullstackweb.jpg"
            },
            {
                "title": "Mobile App Development",
                "description": "Created a cross-platform mobile app to track fitness activities, supporting both iOS and Android. Built with Flutter and Dart, integrated with Google Fit and Apple HealthKit.",
                "imgUrl": "https://example.com/mobileapp.jpg"
            },
            {
                "title": "Blockchain Project",
                "description": "Contributed to the development of a decentralized application (DApp) for secure voting. Employed Solidity for smart contracts and Ethereum blockchain for deployment.",
                "imgUrl": "https://example.com/blockchain.jpg"
            },
            {
                "title": "Cloud Computing Solution",
                "description": "Architected a cloud-based solution for scalable web hosting, leveraging AWS services including EC2, S3, and RDS. Achieved a 99.9% uptime and reduced costs by 20%.",
                "imgUrl": "https://example.com/cloudcomputing.jpg"
            },
            {
                "title": "Data Visualization Dashboard",
                "description": "Designed and developed an interactive data visualization dashboard for analyzing sales data. Used D3.js and Vue.js for dynamic charts and graphs.",
                "imgUrl": "https://example.com/dataviz.jpg"
            }
        ]


   return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit in leo et mollis.</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" defaultActiveKey="/home">
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
                                            <p>{project.title}</p>
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
        </section>
   )
}
