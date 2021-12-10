import React from 'react';
import { useParams } from 'react-router';

const CourseDetails = () => {
    
    const { courseDetails } = useParams();

    return (
        <div>
            <h2 className='p-5 m-5'>this is course details<br/>{courseDetails}</h2>
            <p></p>
        </div>
    );
};

export default CourseDetails;