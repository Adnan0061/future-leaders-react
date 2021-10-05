import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Courses.css'
import CourseCard from '../CourseCard/CourseCard';

const Courses = () => {
    const [courses, setCourses] = useState([])
    const [filteredCourses, setFilteredCourses] = useState([])
    useEffect(()=>{
        fetch(`./courses.json`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setCourses(data);
            setFilteredCourses(data);
        })
    },[])

    const handleSearch = (event) => {
        const searchText = event.target.value;
        const matchedCourses = courses.filter(course => course.title.toLowerCase().includes(searchText.toLowerCase()))
        setFilteredCourses(matchedCourses)

        console.log(searchText)
        console.log(matchedCourses)
    }
    return (
            
        <div className='color-background'>
            
            <div className='hero  py-5'>
            <Container className='hero-container py-5 my-5'>
                <h1 className='py-3 text-light' style={{fontSize: '56px'}}>Search your Course here</h1>
                
                <div className='p-1 col-9 col-md-6 mx-auto'>
                <InputGroup className="mb-3">
                    <FormControl onChange={handleSearch}
                    placeholder="Search Course"
                    aria-label="Search Course"
                    aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" style={{color:'#FFF8DC', borderColor: '#FFF8DC', fontWeight: '500'}} id="button-addon2">
                    Search
                    </Button>
                </InputGroup>
                </div>

            </Container>
            </div>

            <Container className='pb-5'>      
            <Row xs={1} md={2} lg={4} className="g-4 mt-4">
            {
                filteredCourses.map(course => {
                    return( 
                    <CourseCard key={course.title} course={course}></CourseCard>
                    )
                })
            }
            </Row>
            </Container>


        </div>
    );
};

export default Courses;