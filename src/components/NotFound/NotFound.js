import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='hero  py-5 vh-75'>
        <Container className='hero-container py-5 my-5'>
            <h1 className='py-3 text-light' style={{fontSize: '56px'}}>The page you are looking for<br/>is not available</h1>
            <Button variant="warning" as={Link} to={'/home'}>Go to Home Page</Button>
        </Container>
        </div>
    );
};

export default NotFound;