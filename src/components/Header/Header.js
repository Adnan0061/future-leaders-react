import { faAccusoft } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
<>
<Navbar bg="dark" variant="dark"  expand="lg">
  <Container>
    <Navbar.Brand  as={Link} to={"/home"}><FontAwesomeIcon icon={faAccusoft} size='lg' className='me-2'></FontAwesomeIcon> Future Leaders</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
            <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
            <Nav.Link as={Link} to={"/courses"}>Courses</Nav.Link>
            <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
        </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</>
        </div>
    );
};

export default Header;