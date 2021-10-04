import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useServices from '../Hooks/FetchServices';

const Footer = () => {
    const [services] = useServices([]);
    return (
        <div className="text-white bg-dark px-1 py-4">
            <Container>
                <div className="d-flex justify-content-between">
                    <div md={3}>
                        <h3>Menu</h3>
                        <div className="text-start">
                            <NavLink
                                style={{
                                    marginRight: '20px',
                                    color: "white",
                                    textDecoration: 'none',
                                }}
                                to="/home"
                            >
                                Home
                            </NavLink>
                            <br />
                            <NavLink
                                style={{
                                    marginRight: '20px',
                                    color: "white",
                                    textDecoration: 'none',
                                }}
                                to="/about"
                            >
                                About
                            </NavLink>
                            <br />
                            <NavLink
                                style={{
                                    marginRight: '20px',
                                    color: "white",
                                    textDecoration: 'none',
                                }}
                                to="/service"
                            >
                                Services
                            </NavLink>
                            <br />
                            <NavLink
                                style={{
                                    color: "white",
                                    textDecoration: 'none',
                                }}
                                to="/blog"
                            >
                                Home
                            </NavLink>
                        </div>
                    </div>
                    <div md={3}>
                        <h3>Contact</h3>
                        <small>Location: Kasba, Brahmanbaria</small>
                        <p>Phone: 019</p>
                    </div>
                    <div md={3}>
                        <h3>Services</h3>
                        {
                            services.slice(0, 4).map(service => (
                                <p key={service.id}>{service.name}</p>
                            ))
                        }
                    </div>
                    <div md={3}>
                        <h3>Icons</h3>
                    </div>
                </div>
                <div>
                    <h5>&copy; Copyright 2021 <span className="my-2 text-info" data-bs-toggle="tooltip" data-bs-placement="top" title="Pathshala Coaching Center">PCC</span> Education Consultants. All rights reserved</h5>
                </div>
            </Container>
        </div>
    );
};

export default Footer;