import React from 'react';
import { Card, Col } from 'react-bootstrap';

const CourseCard = (props) => {
    const course = props.course;
    return (
        <Col key={course.title}>
            <Card className='h-100 shadow' style={{borderRadius:'15px'}}>
                <Card.Img variant="top" style={{padding: '15px', borderRadius:'25px'}} src={course.img} />
                <Card.Body className=' text-start p-4 pt-0'>
                <Card.Title>{course.title}</Card.Title>
                <Card.Text className='mb-1'>Rating: <span className='text-success fw-bold'>{course.rating}({course.numRating})</span></Card.Text>
                <Card.Text className='mb-1'>Course Label: <span className='fw-bold'>{course.studentsFor}</span></Card.Text>
                <Card.Text className='mb-1'>Enrolled: <span className='fw-bold'>{course.students}</span></Card.Text>
                <Card.Text className='mb-1'>Price: <span className='fw-bold'>${course.price}</span></Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CourseCard;