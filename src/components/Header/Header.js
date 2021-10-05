import React from 'react';
import { Navbar, Container, Nav, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark" className="px-3">
            <Container>
                <Navbar.Brand>
                    {/* website title */}
                    <NavLink style={{
                        marginRight: '20px',
                        color: "white",
                        textDecoration: 'none',
                    }} to="/">
                        Pathshala coaching center
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Stack direction="horizontal" gap={2}>
                            <NavLink
                                style={{
                                    marginRight: '20px',
                                    color: "white",
                                    textDecoration: 'none',
                                }}
                                to="/home"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red",
                                    textDecoration: 'none',
                                }}
                            >
                                Home
                            </NavLink>
                            {/* link for about page */}
                            <NavLink
                                style={{
                                    marginRight: '20px',
                                    color: "white",
                                    textDecoration: 'none',
                                }}
                                to="/about"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red",
                                    textDecoration: 'none',
                                }}
                            >
                                About
                            </NavLink>
                            {/* link for all services */}
                            <NavLink
                                style={{
                                    marginRight: '20px',
                                    color: "white",
                                    textDecoration: 'none',
                                }}
                                to="/service"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red",
                                    textDecoration: 'none',
                                }}
                            >
                                Services
                            </NavLink>
                            {/* link for all news */}
                            <NavLink
                                style={{
                                    color: "white",
                                    textDecoration: 'none',
                                }}
                                to="/news"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red",
                                    textDecoration: 'none',
                                }}
                            >
                                News
                            </NavLink>
                        </Stack>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;