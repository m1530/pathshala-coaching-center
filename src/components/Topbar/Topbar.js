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
            <Container>
                <Row className="align-items-center">
                    {/* topbar date time */}
                    <Col md={6} className="text-md-start">
                        <small>Day: {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()} Time: {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</small>
                    </Col>

                    <Col md={6} className="text-md-end align-items-center">
                        <small className="me-4">
                            {/* topbar social icon using react fontawesome and link external website */}
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
                            {/* login option in topbar */}
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