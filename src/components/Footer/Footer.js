import { faFacebookSquare, faInstagramSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';
import { Heart } from 'react-bootstrap-icons';

const Footer = () => {
    return (
        <div style={{backgroundColor: '#38A9C5'}}>
            <Container  className='d-flex justify-content-between py-3'>
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