import React from "react";
import Col from "./Col";

const Project = ({ title, ...props }) => (
    <Col size="md-4">
        <div className="card mb-4 shadow-sm">
            <img src={props.imgUrl} className="card-img-top" width="100%" height="225" alt={props.imgAlt} />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="btn-group">
                        <a type="button" className="btn btn-sm btn-outline-secondary" href={props.appLink}>App</a>
                        <a type="button" className="btn btn-sm btn-outline-secondary" href={props.codeLink}>Code</a>
                    </div>
                </div>
            </div>
            <div className="card-header">Technologies: {props.tech}</div>
        </div>
    </Col>
);

export default Project;

// from js:
// title, description, appLink, codeLink, tech, imgUrl, imgAlt