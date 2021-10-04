import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitterSquare, faGooglePlusG } from '@fortawesome/free-brands-svg-icons'
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Topbar = () => {
    const date = new Date();
    return (
        <div className="bg-primary text-white">
            <Container className="p-1">
                <Row>
                    <Col md={4} className="d-flex justify-content-start align-items-center">
                        <small>Day: {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()} Time: {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</small>
                    </Col>
                    <Col md={4}></Col>
                    <Col md={4} className="d-flex justify-content-end  align-items-center">
                        <small className="me-4">
                            <NavLink to="/facebook" target="_blank" className="p-1 text-white">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </NavLink>
                            <NavLink to="/twitter" target="_blank" className="p-1 text-white">
                                <FontAwesomeIcon icon={faTwitterSquare} />
                            </NavLink>
                            <NavLink to="/google" target="_blank" className="p-1 text-white">
                                <FontAwesomeIcon icon={faGooglePlusG} />
                            </NavLink>
                        </small>
                        <small>
                            <NavLink
                                style={{
                                    color: "white",
                                    textDecoration: 'none',
                                }}
                                to="/login"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "yellow",
                                    textDecoration: 'none',
                                }}
                            >
                                <FontAwesomeIcon icon={faUser} /><span className="ms-1">Login</span>
                            </NavLink>
                        </small>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Topbar;