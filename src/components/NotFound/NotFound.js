import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        // design not found page 
        <div className="notfound-container">
            <h1 className="fw-bold font-color">Oops!</h1>
            <h1 className="fw-bolder">404-NOT FOUND</h1>
            <Link to="/home">
                <button className="btn btn-primary rounded-pill mb-4">Go to Homepage</button>
            </Link>
        </div>
    );
};

export default NotFound;