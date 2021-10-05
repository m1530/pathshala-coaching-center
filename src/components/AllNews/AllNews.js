import React from 'react';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { userContext } from '../../App';
// import useNews from '../Hooks/FetchNews';

const AllNews = () => {
    //const [news] = useNews();
    const [news] = useContext(userContext);
    return (
        <div>
            {/* load all news in ui */}
            <Container>
                <h1 className="my-5">All News</h1>
                <div className="row g-4 mb-5">
                    {news?.map((news) => (
                        <div className="col-md-4" key={news.id}>
                            <div className="border p-4 h-100 shadow-lg">
                                <div>
                                    <img className="w-75 rounded" height="250px" src={news.img} alt="" />
                                </div>
                                <div className="mt-3">
                                    <h4>{news.title}</h4>
                                    {/* slice description text */}
                                    <p>Description: {news.description?.slice(0, 80)}</p>
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