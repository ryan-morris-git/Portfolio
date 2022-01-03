import React, {useState, useEffect} from 'react';
import './ProjectCard.css';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function ProjectCard() {
    
    const [currentFilter, setCurrentFilter] = useState("Filters");
    
    const changeFilter = (filter) => {
        setCurrentFilter(filter);
        getProjectList(filter);
    }

    const getProjectList = (filter) => {
        fetch(`portfolio-backend-gc97c.ondigitalocean.app/get_projects?language=${filter}`, {headers: {'Content-Type': 'application/json'}, mode: "no-cors"}).then(res => res.json()).then(data => {
            getProjects(data.projects);
        }).catch((err) => console.log(err));
    }
    
    const [projects, getProjects] = useState([]);
    
    useEffect(() => {
        getProjectList();
    }, []);

    return (
        <Container className="my-4">
            <Row className="my-4">
                <Col sm={12} md={11}>
                    <h1 className="display-6 text-center">Projects</h1>
                    <p className="text-center my-2 text-wrap">Below are some projects that I have done.<br/> Use the dropdown on the right to filter by framework or language.</p>
                </Col>
                <Col sm={12} md={1} className="text-end">
                    <Dropdown>
                        <Dropdown.Toggle variant="dark" id="dropdown-basic" className="projectFilter my-4">
                            {currentFilter}
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="projectFilterDropdown">
                            <Dropdown.Item onClick={(e) => changeFilter(e.target.textContent)}>HTML/CSS</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => changeFilter(e.target.textContent)}>JavaScript</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => changeFilter(e.target.textContent)}>Vue.js</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => changeFilter(e.target.textContent)}>React</Dropdown.Item>
                            <Dropdown.Divider/>
                            <Dropdown.Item onClick={(e) => changeFilter(e.target.textContent)}>Python</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => changeFilter(e.target.textContent)}>Flask</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => changeFilter(e.target.textContent)}>SQL</Dropdown.Item>
                            <Dropdown.Divider/>
                            <Dropdown.Item onClick={(e) => changeFilter("Filters")}>All Projects</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
            <Row className="my-4">
                {projects.map(project =>
                    <Col sm={12} md={3} className="justify-content-center d-flex my-2"> 
                        <Card className="projectCard">
                            <Card.Body>
                                <Card.Title>{project.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{project.technologies.join(", ")}</Card.Subtitle>
                                <Card.Text>{project.description}</Card.Text>
                                <Card.Link href={project.link}>Link to live demo</Card.Link>
                                <Card.Link href={project.github_link}>Link to GitHub</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                )}
            </Row>
        </Container>
    );
}

export default ProjectCard;
