import React, {useState, setState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './ContactPage.css';
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function ContactPage() {
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const sendEmail = () => {
        const payload = {"name": name, "email": email, "message": message}
        fetch("/send_email",{
            method: "POST",
            body: JSON.stringify(payload),
            headers: {'Content-Type': 'application/json'}, 
            mode: "no-cors"
        }).then(res => res.json())
        .catch((err) => console.log(err));
    }

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
                </Col>
            </Row>
            <Row className="my-4 justify-content-center">
                <Col sm={12} md={4}>
                    <Form onSubmit={sendEmail()}>
                        <InputGroup className="mb-3">
                        <InputGroup.Text>Name</InputGroup.Text>
                        <Form.Control
                            placeholder="Your Name"
                            name="name"
                            type="text"
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            required
                        />
                        </InputGroup>
                        <InputGroup className="mb-3">
                        <InputGroup.Text>Email</InputGroup.Text>
                        <Form.Control
                            placeholder="Your Email Address"
                            name="email"
                            type="email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            required
                        />
                        </InputGroup>
                        <InputGroup className="mb-3">
                        <InputGroup.Text>Message</InputGroup.Text>
                        <Form.Control
                            as="textarea"
                            placeholder="Enter a message"
                            name="message"
                            type="text"
                            value={message}
                            onChange={(e)=>setMessage(e.target.value)}
                            required
                        />
                        </InputGroup>
                        <Button variant="outline-success" type="submit">Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default ContactPage;
