import React from 'react';
import './ContactPage.css';
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ContactPage() {
    
    return (
        <Container className="my-4">
            <Row className="my-4">
                <h1 className="display-6 text-center">Contact Me</h1>
                <p className="text-center my-2 text-wrap">Feel free to contact me on LinkedIn, or via Email.</p>
            </Row>
            <Row className="my-4 justify-content-center">
                <Col sm={6} md={1} className="d-flex flex-row justify-content-center">
                    <a href="https://www.linkedin.com/in/ryanstephenmorris/" id="social_icon" className="mx-4">
                        <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                    </a>
                    <a href="mailto:ryansmorris@hotmail.com" id="social_icon" className="mx-4">
                        <FontAwesomeIcon icon={faEnvelope} size="2x"/>
                    </a>
                </Col>
            </Row>
        </Container>
    );
}

export default ContactPage;
