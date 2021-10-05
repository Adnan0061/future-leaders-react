import { faAccusoft } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
        <Navbar style={{backgroundColor: '#38A9C5'}} variant="dark"  expand="lg" fixed="top">
          <Container>
            <Navbar.Brand  as={Link} to={"/home"}><FontAwesomeIcon icon={faAccusoft} size='lg' className='me-2'></FontAwesomeIcon> Future Leaders</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto" style={{color:'white'}}>
                    <Nav.Link as={Link} to={"/home"} style={{color:'white'}}>Home</Nav.Link>
                    <Nav.Link as={Link} to={"/about"} style={{color:'white'}}>About</Nav.Link>
                    <Nav.Link as={Link} to={"/courses"} style={{color:'white'}}>Courses</Nav.Link>
                    <Nav.Link as={Link} to={"/contact"} style={{color:'white'}}>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </div>
    );
};

export default Header;