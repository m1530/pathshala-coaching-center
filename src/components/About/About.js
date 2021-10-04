import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import aboutImg from '../../images/about-us.png';

const About = () => {
    return (
        <div>
            <Container>
                <h2 className="my-5">About US</h2>
                <Row className="justify-content-center align-items-center mb-5 g-4">
                    <Col md={6} className="text-start fw-normal">
                        {/* descrive some thing in about page */}
                        <p>Pathshala coaching ccenter is a famous coaching center in kasba.  We provide education counseling for classes 1 to 12 since 2017. We also offer basic computer courses. We are the best coaching for PSC, JSC, SSC, HSC.
                        </p>
                        <p>
                            We also conduct classes by experienced teachers. There is no private tutoring outside the class, all lessons are done in the class.
                        </p>
                        <p>
                            Resolve lecture related issues through direct contact with teachers outside the class schedule as per the needs of the students.
                        </p>
                        <p>
                            We have arranged separate batches for girls. we provide latest class room. We arranged various exam quiz presentations to develop the talents of the students.
                        </p>
                        <p>
                            we arrange a separate class for the weaker students.
                        </p>
                        <p>
                            To make the minds of the students happy, we give merit scholarships to the top 3 students of each batch. And we organize different cultural events.
                        </p>
                    </Col>
                    <Col md={6}>
                        {/* about us page image */}
                        <div>
                            <img className="w-75" src={aboutImg} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;