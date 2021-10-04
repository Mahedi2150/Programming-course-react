import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Courses from '../Courses/Courses';
const ServiceHome = () => {
    const [coursesHome ,setCoursesHome]=useState([])
    useEffect(() => {
        fetch('./course.json')
        .then(res=>res.json())
        .then(data=>setCoursesHome(data))
    },[])
    return (
        
        <div className="container">
            <h2 style={{ textAlign: "center", padding: "20px" }}>Our Service </h2>
            <hr style={{marginBottom:"30px",}} />
            <Row xs={1} md={2} lg={2} className="g-4">
        
            {
                    coursesHome.map(course => <Courses
                        key={course.key}
                        course={course}></Courses>)
            }
     
            </Row>
        </div>
    );
};

export default ServiceHome;