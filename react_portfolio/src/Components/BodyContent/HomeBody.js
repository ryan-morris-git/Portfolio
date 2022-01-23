import React from 'react';
import './HomeBody.css';
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function HomeBody() {

  return (
    <Container className="my-4">
        <Row className="my-4">
            <h1 className="display-6 text-center">Skills Overview</h1>
            <p className="text-center my-2 text-wrap">Below are examples of my skill set with regards to Web Development.<br/> Click on a language, framework, or technology to view examples of projects I have completed using it.</p>
        </Row>
        <Row>
            <Col xs={12} sm={4} className="justify-content-center d-flex my-2">
                <Card className="skill-card">
                  <Card.Body>
                    <Card.Title>Frontend</Card.Title>
                  </Card.Body>
                  <ListGroup className="list-group-flush skill-title">
                    <ListGroup.Item className="skill-item" action href="/#/projects">
                      <FontAwesomeIcon className="check-icon" icon={faCheckCircle}/>HTML/CSS/JavaScript</ListGroup.Item>
                    <ListGroup.Item className="skill-item" action href="/#/projects">
                      <FontAwesomeIcon className="check-icon" icon={faCheckCircle}/>Vue.js</ListGroup.Item>
                    <ListGroup.Item className="skill-item" action href="/#/projects">
                      <FontAwesomeIcon className="check-icon" icon={faCheckCircle}/>React</ListGroup.Item>
                  </ListGroup>
                </Card>
            </Col>
            <Col xs={12} sm={4} className="justify-content-center d-flex my-2">
                <Card className="skill-card">
                  <Card.Body>
                    <Card.Title>Backend</Card.Title>
                  </Card.Body>
                  <ListGroup className="list-group-flush skill-title">
                    <ListGroup.Item className="skill-item" action href="/#/projects">
                      <FontAwesomeIcon className="check-icon" icon={faCheckCircle}/>Python</ListGroup.Item>
                    <ListGroup.Item className="skill-item" action href="/#/projects">
                      <FontAwesomeIcon className="check-icon" icon={faCheckCircle}/>Flask</ListGroup.Item>
                    <ListGroup.Item className="skill-item" action href="/#/projects">
                      <FontAwesomeIcon className="check-icon" icon={faCheckCircle}/>SQL</ListGroup.Item>
                  </ListGroup>
                </Card>
            </Col>
            <Col xs={12} sm={4} className="justify-content-center d-flex my-2">
                <Card className="skill-card">
                  <Card.Body>
                    <Card.Title>Other Technologies</Card.Title>
                  </Card.Body>
                  <ListGroup className="list-group-flush skill-title">
                    <ListGroup.Item className="skill-item">
                      <FontAwesomeIcon className="check-icon" icon={faCheckCircle}/>Google Cloud Platform</ListGroup.Item>
                    <ListGroup.Item className="skill-item">
                      <FontAwesomeIcon className="check-icon" icon={faCheckCircle}/>Unit Testing</ListGroup.Item>
                    <ListGroup.Item className="skill-item">
                      <FontAwesomeIcon className="check-icon" icon={faCheckCircle}/>Wireframing</ListGroup.Item>
                  </ListGroup>
                </Card>
            </Col>
        </Row>
    </Container>
  );
}

export default HomeBody;
