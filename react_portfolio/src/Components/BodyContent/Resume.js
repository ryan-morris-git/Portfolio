import React from 'react';
import './Resume.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Resume() {
    
    return (
        <Container className="my-2">
            <h1 className="resume-title text-center">Resume</h1>
            <Row className="my-4 justify-content-center">
                <Col sm={12} md={4} className="d-flex flex-column mx-4">
                    <h1 className="resume-subtitle text-center">Employment History</h1>
                    <h4 className="mt-4 text-center">Insane Technologies</h4>
                    <h6 className="text-center">Full Stack Developer</h6>
                    <p className="text-center employment-time">July 2021-Present</p>
                    <p className="text-center">Developing full stack web applications using Python, as well as MySQL for database operations, and the Vue.js framework for front end components.</p>
                    
                    <h6 className="text-center">Data Cataloguing Coordinator</h6>
                    <p className="text-center employment-time">September 2020-March 2021</p>
                    <p className="text-center">Primarily focused on managing client relations, coordinating a team, project invoicing, and overseeing the completion of projects.</p>
                </Col>
                <Col sm={12} md={4} className="d-flex flex-column mx-4">
                    <h1 className="resume-subtitle text-center">Education</h1>
                    <h4 className="mt-4 text-center">Bachelor of Information Technology</h4>
                    <h6 className="text-center">Majored in Software Development</h6>
                    
                    <p className="text-center">Achieved alongside the Bachelor of Business as part of a double degree program at Griffith University.</p>
                    <h4 className="mt-4 text-center">Bachelor of Business</h4>
                    <h6 className="text-center">Majored in Entrepreneurship & Self-Employment</h6>
                    <p className="text-center">Achieved alongside the Bachelor of Information Technology as part of a double degree program at Griffith University.</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Resume;
