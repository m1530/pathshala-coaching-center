import React from 'react';

const News = (props) => {
    const { title, img, description } = props.news;
    return (
        // display 3 new in home ui
        <div className="col-md-4">
            <div className="border rounded p-3 h-100 shadow-lg">
                <div>
                    <img className="w-75 rounded" height="250px" src={img} alt="" />
                </div>
                <div className="mt-3">
                    <h4>{title}</h4>
                    {/* slice description text */}
                    <p>Description: {description?.slice(0, 60)}</p>
                </div>
            </div>
        </div>
    );
};

export default News;