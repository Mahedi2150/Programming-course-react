import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import "./Courses.css"
const Courses = (props) => {
    const { title,type, img, price, duration } = props.course
    const dollar = <FontAwesomeIcon icon={faDollarSign} />
    const clock = <FontAwesomeIcon icon={faClock} />
    return (
        <div>

            <Col>
                <Card >
                    <Card.Img variant="top" className="imgStyle" src={img} />
                    <Card.Body >
                        <Card.Title> Name : {title}</Card.Title>
                        <Card.Text>Type : {type}</Card.Text>
                        <div className="priceStyle">
                            <Card.Text>{dollar} {price}</Card.Text>
                            <Card.Text>{clock} {duration}</Card.Text>
                        </div>

                        <Button className="buttonStyle"  variant="warning" >ENROLL NOW</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Courses;