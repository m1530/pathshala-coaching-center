import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="text-white bg-dark p-1">
            <Container>
                <div className="d-flex justify-content-between">
                    <div md={3}>
                        <h3>About us</h3>
                    </div>
                    <div md={3}>
                        <h3>Contact us</h3>
                    </div>
                    <div md={3}>
                        <h3>Services</h3>
                    </div>
                    <div md={3}>
                        <h3>Icons</h3>
                    </div>
                </div>
                <div>
                    <h5>&copy; Copyright 2021 <span className="text-info" data-bs-toggle="tooltip" data-bs-placement="top" title="Pathshala Coaching Center">PCC</span> Education Consultants. All rights reserved</h5>
                </div>
            </Container>
        </div>
    );
};

export default Footer;