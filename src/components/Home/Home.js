import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Card, CardGroup, Col, Container, Image, Row } from 'react-bootstrap';
import { Bullseye, CardChecklist, Headset } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    const [courses, setCourses] = useState([])
    useEffect(()=>{
        fetch(`./courses.json`)
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    const fourCourses = courses.filter(course => courses.indexOf(course) < 4)
    const instructors = [
        {name: 'Ethel Davis', designation: 'Sr. Instructor Web Development', img:'https://preview.colorlib.com/theme/educature/img/faculty/xf1.jpg.pagespeed.ic.XbWix9NCAA.webp', about: 'If you are looking at blank cassettes on the web, you may be very confused at the difference in price.', facebook: 'https://www.facebook.com/groups/288111895977592', insta:'https://www.instagram.com/programminghero/', linkedIn:'https://www.linkedin.com/company/programminghero/'},
        {name: 'Rodney Cooper', designation: 'Sr. Instructor Digital Marketing', img:'https://preview.colorlib.com/theme/educature/img/faculty/xf2.jpg.pagespeed.ic.TfC6_eo2qZ.webp', about: 'If you are looking at blank cassettes on the web, you may be very confused at the difference in price.', facebook: 'https://www.facebook.com/groups/288111895977592', insta:'https://www.instagram.com/programminghero/', linkedIn:'https://www.linkedin.com/company/programminghero/'},
        {name: 'Dora Walker', designation: 'Sr. Instructor Data Science', img:'https://preview.colorlib.com/theme/educature/img/faculty/xf3.jpg.pagespeed.ic.NWO5oe3OZJ.webp', about: 'If you are looking at blank cassettes on the web, you may be very confused at the difference in price.', facebook: 'https://www.facebook.com/groups/288111895977592', insta:'https://www.instagram.com/programminghero/', linkedIn:'https://www.linkedin.com/company/programminghero/'},
        {name: 'Lena Keller', designation: 'Sr. Instructor Graphic Design', img:'https://preview.colorlib.com/theme/educature/img/faculty/xf4.jpg.pagespeed.ic.Q1o_v6uasc.webp', about: 'If you are looking at blank cassettes on the web, you may be very confused at the difference in price.', facebook: 'https://www.facebook.com/groups/288111895977592', insta:'https://www.instagram.com/programminghero/', linkedIn:'https://www.linkedin.com/company/programminghero/'},
    ]
    console.log(fourCourses)
    return (
        <div className='body'>

            {/* Hero section */}
            <div className='hero  py-5'>
            <Container className='hero-container py-5 my-5'>
                <h1 className='py-3 text-light' style={{fontSize: '56px'}}>We have the Best Courses<br/>on the Web</h1>
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

            {/* Courses section */}
            <div  className='color-background py-3'>
                <Container>
                <h1 className='mt-5 mb-3'>Our Popular Courses</h1>
                <p className='w-50 mx-auto'>Every course of our website is top class and they are very popular among the community. Few of them are given bellow.</p>
                
                    <Row xs={1} md={2} lg={4} className="g-4 mt-4">
                        {fourCourses.map((course) => (
                            <Col key={course.title}>
                            <Card className='h-100 shadow'>
                                <Card.Img variant="top" src={course.img} />
                                <Card.Body className=' text-start p-4'>
                                <Card.Title>{course.title}</Card.Title>
                                <p className=' mt-3'>Rating: <span className='text-success fw-bold'>{course.rating}({course.numRating})</span></p>
                                <p>Course Label: <span className='fw-bold'>{course.studentsFor}</span></p>
                                <p>Enrolled: <span className='fw-bold'>{course.students}</span></p>
                                <p>Price: <span className='fw-bold'>${course.price}</span></p>
                                </Card.Body>
                            </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
                <Button className='m-5' variant="warning" as={Link} to={'/courses'}>Check All Courses</Button>
            </div>
            
            {/* Courses section */}
            <div  className='py-3'>
            <Container>
                <h1 className='mt-5 mb-3'>Features That Make Us Hero</h1>
                <p className='w-50 mx-auto'>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 each.</p>
                
                <CardGroup className='feature-inner border mt-5'>
                    <Card className='border feature-item p-5 m-3'>
                        <Bullseye color='gray' size={84}></Bullseye>
                        <Card.Body className='text-start ps-0'>
                        <Card.Title className='mt-4 mb-3'>Updated Courses</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='border feature-item p-5 m-3'>
                        <Headset color='gray' size={84}></Headset>
                        <Card.Body className='text-start ps-0'>
                        <Card.Title className='mt-4 mb-3'>Great Support Team</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='border feature-item p-5 m-3'>
                        <CardChecklist color='gray' size={84}></CardChecklist>
                        <Card.Body className='text-start ps-0'>
                        <Card.Title className='mt-4 mb-3'>Quiz & Project</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>                
        
            </Container>
                <Button className='m-5' variant="warning" as={Link} to={'/courses'}>Check All Courses</Button>
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



export default Home;