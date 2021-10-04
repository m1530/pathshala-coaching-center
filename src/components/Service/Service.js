import React from 'react';

const Service = (props) => {
    const { img, name, price } = props.service;
    return (
        <div className="col-md-3">
            <div className="border rounded p-3">
                <div>
                    <img className="w-75 rounded" height="200px" src={img} alt="" />
                </div>
                <div className="mt-3">
                    <h4>{name}</h4>
                    <p>Price: {price}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;