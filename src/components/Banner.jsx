import { useState, useEffect } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.png";
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Bad-ass Web Developer", "Web Designer Extraordinaire"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText == fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText == '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({isVisible}) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                                <span className="tagline">Welcome to my Portfolio</span>
                                <h1>{`Hi I'm Anastasia, `}<span className="wrap">{text}</span></h1>
                                <p>As a software engineer with a rich background in sociology and customer service, I've always been driven by the pursuit of a fulfilling career path. This quest led me to Hack Reactor, where my experience began with underestimating the program's intensity and pace. Despite feeling prepared, I quickly found myself challenged, yet I surprised myself by adapting and thriving, signaling significant personal and professional growth.  My career shift to software engineering was motivated by a longing for a field brimming with growth, excitement, and innovation - a career I could take pride in.
</p>
                                <Nav.Link href="#connect">
                                    <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                                </Nav.Link>
                            </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
