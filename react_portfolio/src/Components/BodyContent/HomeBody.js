import React from 'react';
import './HomeBody.css';
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
                <Card style={{ width: '22rem' }}>
                  <Card.Body>
                    <Card.Title>Frontend</Card.Title>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item action href="">HTML/CSS/JavaScript</ListGroup.Item>
                    <ListGroup.Item action href="">Vue.js</ListGroup.Item>
                    <ListGroup.Item action href="">React</ListGroup.Item>
                  </ListGroup>
                </Card>
            </Col>
            <Col xs={12} sm={4} className="justify-content-center d-flex my-2">
                <Card style={{ width: '22rem' }}>
                  <Card.Body>
                    <Card.Title>Backend</Card.Title>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item action href="">Python</ListGroup.Item>
                    <ListGroup.Item action href="">Flask</ListGroup.Item>
                    <ListGroup.Item action href="">SQL</ListGroup.Item>
                  </ListGroup>
                </Card>
            </Col>
            <Col xs={12} sm={4} className="justify-content-center d-flex my-2">
                <Card style={{ width: '22rem' }}>
                  <Card.Body>
                    <Card.Title>Other Technologies</Card.Title>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>Google Cloud Platform</ListGroup.Item>
                    <ListGroup.Item>Unit Testing</ListGroup.Item>
                    <ListGroup.Item>Wireframing</ListGroup.Item>
                  </ListGroup>
                </Card>
            </Col>
        </Row>
    </Container>
  );
}

export default HomeBody;
