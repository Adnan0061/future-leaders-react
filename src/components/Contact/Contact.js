
import { faEnvelopeOpen, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { ChatLeftTextFill, Headset } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div>
            <div className='hero  py-5'>
            <Container className='hero-container py-5 my-5'>
                <h1 className='py-3 text-light' style={{fontSize: '56px'}}>Contact Us</h1>
            </Container>
            </div>

            <div className='p-5'>
                <h2 style={{fontSize: '48px'}}>We have a Professional<br/>Support Team</h2>
                <div>
                <Container className='p-3 mb-5'>
                    <Row className='p-5 shadow rounded-25'>
                        
                        <div className='col-sm-12 col-md-6'>
                        <div className='d-flex justify-content-center align-items-center gx-3 p-3 shadow  rounded-25'>
                            <div className='mx-3'>
                                <Headset color='#38c5c7e0' size={96}></Headset>
                            </div>
                            <div className='text-start'>
                                <h1>Customer Support</h1>
                                <p>Get a coupon and contact to our Customer Support team. We are always here to help.</p>
                                <Button variant="warning" as={Link} to={'/home'}>See All Courses</Button>
                            </div>
                        </div>
                        </div>

                        <div className='col-sm- col-md-6'>
                        <div className='d-flex justify-content-center align-items-center gx-3 p-3 shadow  rounded-25'>
                            <div className='mx-3'>
                            <ChatLeftTextFill color='#38c5c7e0' size={96}></ChatLeftTextFill>
                            </div>
                            <div className='text-start'>
                                <h1>Have Any Questions</h1>
                                <p>If you still have any Questions please contact us. We are here to help.</p>
                                <Button variant="warning" as={Link} to={'/home'}>Contact Us</Button>
                            </div>
                        </div>
                        </div>

                    </Row>
                </Container>
            </div>

            {/* Numbers */}
            <div>
                <Container className='mb-5'>
                    <Row>
                        
                        <div className='col-sm-6 col-md-4'>
                        <div className='d-flex justify-content-center h-100 align-items-center gx-3 p-3 shadow  rounded-25'>
                            <div className='me-3'>
                                <FontAwesomeIcon icon={faMapMarkedAlt} size='4x' color='#50CCCE'></FontAwesomeIcon>
                            </div>
                            <div className='text-start'>
                                <h3>Location</h3>
                                <p>244 Tejgaon, Dhaka-1215</p>
                            </div>
                        </div>
                        </div>

                        <div className='col-sm-6 col-md-4'>
                        <div className='d-flex justify-content-center h-100 align-items-center gx-3 p-3 shadow  rounded-25'>
                            <div className='me-3'>
                                <FontAwesomeIcon icon={faEnvelopeOpen} size='4x' color='#50CCCE'></FontAwesomeIcon>
                            </div>
                            <div className='text-start'>
                                <h3>Email</h3>
                                <p>contact@futureleaders.com</p>
                            </div>
                        </div>
                        </div>

                        <div className='col-sm-6 col-md-4'>
                        <div className='d-flex justify-content-center h-100 align-items-center gx-3 p-3 shadow  rounded-25'>
                            <div className='me-3'>
                                <FontAwesomeIcon icon={faMapMarkedAlt} size='4x' color='#50CCCE'></FontAwesomeIcon>
                            </div>
                            <div className='text-start'>
                                <h3>Contact No.</h3>
                                <p>Mobile: +880191185452</p>
                                <p>Mobile: +8809115452</p>
                            </div>
                        </div>
                        </div>

                    </Row>
                </Container>
            </div>

            </div>
        </div>
    );
};

export default Contact;