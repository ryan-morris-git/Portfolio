import React from 'react';
import './Footer.css';
import Container from 'react-bootstrap/Container';

function Footer() {

  return (
    <Container fluid className="footer d-none d-md-block">
        <hr/>
        <p className="lead small">
            Website made by Ryan Morris, 2021.
        </p>
    </Container>
  );
}

export default Footer;
