import { faAccusoft, faFacebookSquare, faInstagramSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Heart } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div style={{backgroundColor: '#38A9C5'}}>
            <Container>
                <div className='py-3'>
                <Navbar.Brand  as={Link} to={"/home"} style={{color:'white', fontSize: '36px',}}><FontAwesomeIcon icon={faAccusoft} size='lg' className='me-2' color='white'></FontAwesomeIcon> Future Leaders</Navbar.Brand>
                <h6 style={{color:'white'}}>Your trusted online learning platform</h6>
                </div>
            </Container>
            <Container  className='d-flex justify-content-between py-3 border-top border-light'>
                <div>
                    <p className='my-0 pt-1 text-light'>Copyright ©2021 All rights reserved | This is made with <Heart></Heart> by Adnan Ahmed</p>
                </div>
                <div className='my-0'>
                    <FontAwesomeIcon icon={faFacebookSquare} size='2x' color='#00ffff' className='mx-3 align-middle'/>
                    <FontAwesomeIcon icon={faInstagramSquare} size='2x' color='#00ffff' className='mx-3 align-middle'/>
                    <FontAwesomeIcon icon={faYoutubeSquare} size='2x' color='#00ffff' className='mx-3 align-middle'/>
                </div>
            </Container>
        </div>
    );
};

export default Footer;