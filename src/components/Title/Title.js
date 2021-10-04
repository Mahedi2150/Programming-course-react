import React from 'react';

import "./Title.css"
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
const Title = () => {
    const arrow = <FontAwesomeIcon icon={faArrowRight} />
    return (
       

            <div className="header">
            <div>
                
                  <h1 className="title">Master the Skills to <br /> Drive your Career.</h1><br />
               
                <p className="title">online courses from the world’s leading experts.</p>
                <Button variant="warning" size="lg" className="button">LOG IN {arrow }</Button>
               </div>
            </div>
                  


        
    );
};

export default Title;