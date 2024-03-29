import { Col } from "react-bootstrap"

export const ProjectCard = ({title, description, imgUrl}) => {
    return(
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl}/>
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
        </Col>
    )
}
