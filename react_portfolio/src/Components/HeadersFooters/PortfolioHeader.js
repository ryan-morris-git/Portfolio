import React from 'react';
import './PortfolioHeader.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import photoOfMe from "../../images/pic.jpg"

function PortfolioHeader() {

  const currentPage = window.location.pathname;
  let isProjects = false;
  if (currentPage === "/#/projects") {
    isProjects = true;
  } else {
    isProjects = false;
  }

  return (
    <Container fluid id="intro">
      <Row>
          <Col sm={2}>
              <Image src={photoOfMe} roundedCircle fluid/>
          </Col>
          <Col sm={10}>
              <h1 className="display-4 introwords">Hi there!</h1>
              <p className="lead introwords">
                My name is Ryan Morris, welcome to my website! Take a look around, I've linked all the projects on my Github here so you can check them out.
              </p>
              <hr className="my-4"/>
              <p className="education">
                Full-stack developer with a Bachelor of Information Technology and a Bachelor of Business.
              </p>
              {isProjects
                ? <p></p>
                : <Button variant="outline-dark" className="mt-4" href="/#/projects">See all my Projects</Button>
              }
          </Col>
      </Row>
    </Container>
  );
}

export default PortfolioHeader;
