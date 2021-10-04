import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';

const Service = () => {
    const [courses ,setCourses]=useState([])
    useEffect(() => {
        fetch('./courses.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])
    return (
        <div className="container">
            <h2 style={{textAlign:"center",padding:"20px"}}>Our Service </h2>
            <Row xs={1} md={2} lg={3} className="g-4">
        
            {
                    courses.map(course => <Course
                        key={course.key}
                        course={course}></Course>)
            }
     
            </Row>
        </div>
    );
};

export default Service;