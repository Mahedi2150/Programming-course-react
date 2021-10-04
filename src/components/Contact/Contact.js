import React from 'react';
import "./Contact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker,faPhone,faPaperPlane } from '@fortawesome/free-solid-svg-icons'
const Contact = () => {
    const location = <FontAwesomeIcon icon={faMapMarker} />
    const phone = <FontAwesomeIcon icon={faPhone} />
    const email = <FontAwesomeIcon icon={faPaperPlane} />
    
   
    return (
        <div className="title">
            <h2> Contact</h2>

            <div className=" container contact">
                <h4>contact us</h4>
                <h1>Stay in touch with us</h1>
                <p><span>{location }</span> Dhanmondi, Dhaka, Bangladesh </p>
                <p><span>{phone } </span> +8801100000111 </p>
                <p><span>{email}</span> info@codingschool.com </p>
               
            </div>
            <div className="container">
            <form>
            <div className="d-flex">
              <div className="mb-3 w-50 me-2">
                <label htmlFor="exampleInputName1" className="form-label"></label>
                <input
                  type="Name"
                  className="form-control py-3"
                  placeholder="Name"
                  id="exampleInputName1"
                />
              </div>
              <div className="mb-3 w-50">
                <label htmlFor="exampleInputEmail1" className="form-label"></label>
                <input
                  type="email"
                  className="form-control py-3"
                  placeholder="Email address"
                  id="exampleInputEmail1"
                />
              </div>
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                style={{"height": "150px"}}
                placeholder="Message"
                id="floatingTextarea"
              ></textarea>
              <label htmlFor="floatingTextarea"></label>
            </div>
            <div className="text-center">
              <button  className="btn btn-warning px-5 py-3 mb-5">
                Submit
              </button>
            </div>
          </form>
            </div>
        </div>
    );
};

export default Contact;