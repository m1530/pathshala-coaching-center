import React from 'react';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { userContext } from '../../App';
// import useNews from '../Hooks/FetchNews';

const AllNews = () => {
    //fetch data using context api
    const [news, services] = useContext(userContext);
    console.log(services)
    return (
        <div>
            {/* load all news in ui */}
            <Container>
                <h1 className="my-5 text-danger fw-bold">All News</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
                    {news?.map((news) => (
                        <div className="col" key={news.id}>
                            <div className="card h-100 shadow-lg">
                                <img src={news.img} className="card-img-top" height="200px" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">{news.title}</h5>
                                    {/* slice description text */}
                                    <p className="card-text">Description: {news.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default AllNews;