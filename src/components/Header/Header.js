import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container className="p-1">
                <Navbar.Brand>
                    {/* navlink for site name */}
                    <NavLink style={{
                        marginRight: '20px',
                        color: "white",
                        textDecoration: 'none',
                    }} to="/">
                        Pathshala coaching center
                    </NavLink>
                </Navbar.Brand>
                <Nav className="ms-auto">
                    {/* nav link for home routw */}
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
                </Nav>
            </Container>
        </Navbar >
    );
};

export default Header;