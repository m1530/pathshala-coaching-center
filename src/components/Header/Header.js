import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container className="p-1">
                <Navbar.Brand href="#home">Pathshala coaching centere</Navbar.Brand>
                <Nav className="ms-auto">
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
                    <NavLink
                        style={{
                            color: "white",
                            textDecoration: 'none',
                        }}
                        to="/blog"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "red",
                            textDecoration: 'none',
                        }}
                    >
                        Home
                    </NavLink>
                </Nav>
            </Container>
        </Navbar >
    );
};

export default Header;