import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import picon from "../assets/img/icon-python.svg";
import dicon from "../assets/img/icon-django.svg";
import jicon from "../assets/img/icon-javascript.svg";
import ricon from "../assets/img/icon-react.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <p>My technical proficiency spans Python, JavaScript, and various full-stack technologies, developed through formal education at Hack Reactor and practical project experience.</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={picon} alt="Image"/>
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={dicon} alt="Image"/>
                                <h5>Django</h5>
                            </div>
                            <div className="item">
                                <img src={jicon} alt="Image"/>
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={ricon} alt="Image"/>
                                <h5>React</h5>
                            </div>

                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            {/* <img className="background-image-left" src={colorSharp} /> */}

        </section>
      )
}
