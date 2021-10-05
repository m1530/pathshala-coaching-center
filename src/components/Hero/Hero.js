import React from 'react';
import { NavLink } from 'react-router-dom';
import './Hero.css';
import heroImg from '../../images/eight-math.jpg';

const Hero = () => {
    return (
        <div className="hero">
            <div className="container">
                <div className="row align-items-center justify-content-center py-4">
                    <div className="col-md-7">
                        {/* hero section title */}
                        <h1 className="title">
                            Special Session Comming For <br /> Class 8 Math
                        </h1>
                        <p className="text-white text-center mt-3">
                            If you have any problem you can join this special session.
                        </p>
                        {/* hero section button link */}
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
                            <button className="btn-danger btn-sm rounded">About US</button>
                        </NavLink>
                    </div>
                    {/* hero section image */}
                    <div className="col-md-5 my-2 sm-1">
                        <img src={heroImg} className="img-fluid rounded img-height" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;