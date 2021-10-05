import React from 'react';

const Service = (props) => {
    const { img, name, price } = props.service;
    return (
        // display services in home page
        <div className="col-md-3">

            <div className="card h-100 shadow-lg">
                {/* service image */}
                <img src={img} className="card-img-top p-2" height="180px" alt="..." />
                <div className="card-body">
                    <h5 className="card-title fw-bold">{name}</h5>
                    <p className="card-text">Price: {price}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;