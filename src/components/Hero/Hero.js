import React from 'react';
import { NavLink } from 'react-router-dom';
import './Hero.css';
import heroImg from '../../images/eight-math.jpg';

const Hero = () => {
    return (
        <div className="hero-section">
            <div className="">
                <div className="row d-flex hero align-items-center justify-content-center">
                    <div className="col-md-6">
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
                    <div className="col-md-5">
                        <img src={heroImg} className="rounded" height="420px" width="400px" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;