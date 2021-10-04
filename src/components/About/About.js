import React from 'react';
import "./About.css"
const About = () => {
    return (
        <div className=" title">
            <h2>About <br /><span className="titleName">Coding School</span> </h2>
            <div>
                <div>
                    <div className="pt-3 pb-4">
                        <div className="container">
                            <div className="row mt-4">
                                <div className="col text-center">
                                    <h1>
                                        Our Team
                                    </h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 text-center">
                                    <img className="img-fluid qualities-img p-4 rounded-circle" src="https://demo.themewinter.com/wp/courselog/kindergarten/wp-content/uploads/sites/8/2021/04/team_6.jpg" alt="" />
                                    <h5>
                                        Founder &amp; CEO
                                    </h5>
                                    <p>
                                        <i>- Anna Shapoval</i>
                                    </p>

                                </div>
                                <div className="col-md-4 text-center">
                                    <img className="img-fluid qualities-img p-4 rounded-circle" src="https://demo.themewinter.com/wp/courselog/kindergarten/wp-content/uploads/sites/8/2021/04/team_3.jpg" alt="" />
                                    <h5>
                                        Product Manager
                                    </h5>
                                    <p>
                                        <i>- Alena Mosyagina</i>
                                    </p>

                                </div>
                                <div className="col-md-4 text-center">

                                    <img className="img-fluid qualities-img p-4 rounded-circle" src="https://demo.themewinter.com/wp/courselog/kindergarten/wp-content/uploads/sites/8/2021/04/team_4.jpg" alt="" />
                                    <h5>
                                        Senior HR
                                    </h5>
                                    <p>
                                        <i>- Liliya Melnikova
                                        </i>
                                    </p>
                                </div>
                            </div>

                            <div className="row mb-md-3">
                                <div className="col-md-4 text-center">
                                    <img className="img-fluid qualities-img p-4 rounded-circle" src='https://demo.themewinter.com/wp/courselog/kindergarten/wp-content/uploads/sites/8/2021/04/team_1.jpg' alt="" />
                                    <h5>
                                        Development Director
                                    </h5>
                                    <p>
                                        <i>- Maria Schultz</i>
                                    </p>
                                </div>
                                <div className="col-md-4 text-center">
                                    <img className="img-fluid qualities-img p-4 rounded-circle" src="https://demo.themewinter.com/wp/courselog/kindergarten/wp-content/uploads/sites/8/2021/04/team_7.jpg" alt="" />
                                    <h5>
                                        Senior Software Developer
                                    </h5>
                                    <p>
                                        <i>- Varun Agrawal</i>
                                    </p>
                                </div>
                                <div className="col-md-4 text-center">
                                    <img className="img-fluid qualities-img p-4 rounded-circle" src="https://demo.themewinter.com/wp/courselog/kindergarten/wp-content/uploads/sites/8/2021/04/team_5.jpg" alt="" />
                                    <h5>
                                        Software Engineer
                                    </h5>
                                    <p>
                                        <i>- Development Director</i>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;