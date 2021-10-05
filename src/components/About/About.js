import { faFacebookF, faInstagram, faLinkedinIn, faReadme } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './About.css'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { faStar, faUserGraduate, faUsers } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    const instructors = [
        {name: 'Ethel Davis', designation: 'Sr. Instructor Web Development', img:'https://preview.colorlib.com/theme/educature/img/faculty/xf1.jpg.pagespeed.ic.XbWix9NCAA.webp', about: 'If you are looking at blank cassettes on the web, you may be very confused at the difference in price.', facebook: 'https://www.facebook.com/groups/288111895977592', insta:'https://www.instagram.com/programminghero/', linkedIn:'https://www.linkedin.com/company/programminghero/'},
        {name: 'Rodney Cooper', designation: 'Sr. Instructor Digital Marketing', img:'https://preview.colorlib.com/theme/educature/img/faculty/xf2.jpg.pagespeed.ic.TfC6_eo2qZ.webp', about: 'If you are looking at blank cassettes on the web, you may be very confused at the difference in price.', facebook: 'https://www.facebook.com/groups/288111895977592', insta:'https://www.instagram.com/programminghero/', linkedIn:'https://www.linkedin.com/company/programminghero/'},
        {name: 'Dora Walker', designation: 'Sr. Instructor Data Science', img:'https://preview.colorlib.com/theme/educature/img/faculty/xf3.jpg.pagespeed.ic.NWO5oe3OZJ.webp', about: 'If you are looking at blank cassettes on the web, you may be very confused at the difference in price.', facebook: 'https://www.facebook.com/groups/288111895977592', insta:'https://www.instagram.com/programminghero/', linkedIn:'https://www.linkedin.com/company/programminghero/'},
        {name: 'Lena Keller', designation: 'Sr. Instructor Graphic Design', img:'https://preview.colorlib.com/theme/educature/img/faculty/xf4.jpg.pagespeed.ic.Q1o_v6uasc.webp', about: 'If you are looking at blank cassettes on the web, you may be very confused at the difference in price.', facebook: 'https://www.facebook.com/groups/288111895977592', insta:'https://www.instagram.com/programminghero/', linkedIn:'https://www.linkedin.com/company/programminghero/'},
    ]
    return (
        <div className='body'>

            {/* Hero section */}
            <div className='hero  py-5'>
            <Container className='hero-container py-5 my-5'>
                <h1 className='py-3 text-light' style={{fontSize: '56px'}}>We help Students to Learn and Grow<br/>become Future Leaders</h1>
                <p className='w-50 mx-auto py-3 fs-5 text-light'>In the history of modern astronomy, there is probably no one greater leap forward than the building and launch of the space telescope.</p>
                <Button variant="warning" as={Link} to={'/courses'}>See All Courses</Button>
            </Container>
            </div>

            {/* About section */}
            <div>
                <Container className='py-5'>
                    <Row>
                        <Col md={6} className='p-5'>
                        <Image className='img-fluid' src="https://preview.colorlib.com/theme/educature/img/xabout.jpg.pagespeed.ic.FtnHtegtRT.webp" rounded />
                        </Col>
                        <Col md={6} className='p-5 d-flex flex-column justify-content-center align-items-start'>
                            <h1 className='text-start p-3'>Over 50 Courses<br/>from our Platform</h1>
                            <p className='.text-muted text-start p-3'>There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station. In the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station.</p>
                            <Button className='m-3' variant="warning" as={Link} to={'/courses'}>See All Courses</Button>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Numbers */}
            <div>
                <Container className='p-3 mb-5'>
                    <Row className='p-5 shadow rounded-25'>
                        
                        <div className='col-sm-6 col-md-3'>
                        <div className='d-flex justify-content-center align-items-center gx-3 p-3 shadow  rounded-25'>
                            <div className='mx-3'>
                                <FontAwesomeIcon icon={faReadme} className="counter-icon"></FontAwesomeIcon>
                            </div>
                            <div>
                                <h1>25</h1>
                                <p>Popular Coach</p>
                            </div>
                        </div>
                        </div>

                        <div className='col-sm-6 col-md-3'>
                        <div className='d-flex justify-content-center align-items-center gx-3 p-3 shadow  rounded-25'>
                            <div className='mx-3'>
                                <FontAwesomeIcon icon={faUserGraduate} className="counter-icon"></FontAwesomeIcon>
                            </div>
                            <div>
                                <h1>55</h1>
                                <p>Advisors</p>
                            </div>
                        </div>
                        </div>

                        <div className='col-sm-6 col-md-3'>
                        <div className='d-flex justify-content-center align-items-center gx-3 p-3 shadow  rounded-25'>
                            <div className='mx-3'>
                                <FontAwesomeIcon icon={faStar} className="counter-icon"></FontAwesomeIcon>
                            </div>
                            <div>
                                <h1>5K</h1>
                                <p>Reviews</p>
                            </div>
                        </div>
                        </div>

                        <div className='col-sm-6 col-md-3'>
                        <div className='d-flex justify-content-center align-items-center gx-3 p-3 shadow  rounded-25'>
                            <div className='mx-3'>
                                <FontAwesomeIcon icon={faUsers} className="counter-icon"></FontAwesomeIcon>
                            </div>
                            <div>
                                <h1>25K</h1>
                                <p>Students</p>
                            </div>
                        </div>
                        </div>


                    </Row>
                </Container>
            </div>

            {/* Instructors */}
            <div style={{paddingTop:'60px', paddingBottom:'60px', backgroundColor:'cornsilk'}}>
                <Container>
                    <h1 style={{marginBottom:'200px'}}>Instructors</h1>
                <Row xs={1} md={2} lg={4} className="g-4 px-5">
                    {instructors.map((instructor) => (
                        <Col key={instructor.name}>
                        <Card className='p-4 h-100'>
                            <Card.Img style={{marginTop: '-170px', padding:'20px',}} variant="top" src={instructor.img} />
                            <Card.Body>
                                <Card.Title>{instructor.name}</Card.Title>
                                <Card.Text><small className='fw-bold'>{instructor.designation}</small>
                                </Card.Text>
                                <Card.Text>{instructor.about}
                                </Card.Text>
                                <Col className='d-flex justify-content-center g-5'>
                                <a href={instructor.facebook}><FontAwesomeIcon icon={faFacebookF}  color='gray' className='mx-3' href={instructor.facebook}/></a>
                                <a href={instructor.insta}><FontAwesomeIcon icon={faInstagram} size='lg'  color='gray' className='mx-3'/></a>
                                <a href={instructor.linkedIn}><FontAwesomeIcon icon={faLinkedinIn}  color='gray' className='mx-3' size='lg'/></a>
                                </Col>
                            </Card.Body>
                        </Card>
                        </Col>
                    ))}
                </Row>
                </Container>
            </div>

            
        </div>
    );
};

export default About;