import React from 'react';

const News = (props) => {
    const { title, img, description } = props.news;
    return (
        // display 3 new in home ui
        <div className="col-md-4">
            <div className="card h-100 shadow-lg">
                <img src={img} className="card-img-top" height="200px" alt="..." />
                <div className="card-body">
                    <h5 className="card-title fw-bold">{title}</h5>
                    {/* slice description text */}
                    <p className="card-text">Description: {description?.slice(0, 60)}</p>
                </div>
            </div>
        </div>
    );
};

export default News;