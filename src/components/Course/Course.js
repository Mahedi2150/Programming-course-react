import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import "./Course.css"
const Course = (props) => {
    const { title,type, img, price, duration } = props.course
    const dollar = <FontAwesomeIcon icon={faDollarSign} />
    const clock = <FontAwesomeIcon icon={faClock} />
    return (
        <div>

            <Col>
                <Card>
                    <Card.Img variant="top" className="imgStyle" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>Type : {type}</Card.Text>
                        <div className="priceTimeStyle">
                            <Card.Text >{dollar} {price}</Card.Text>
                            <Card.Text>{clock} {duration}</Card.Text>
                        </div>
                        <Button variant="warning" className="buttonStyle">ENROLL NOW</Button>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default Course;