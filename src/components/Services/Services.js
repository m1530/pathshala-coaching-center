import React from 'react';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { userContext } from '../../App';

const Services = () => {
    const [news, services] = useContext(userContext);
    console.log(news)
    return (
        <div>
            <Container>
                {/* display all services in service path link */}
                <h1 className="my-5">Our Services</h1>
                <div className="row g-4 mb-5">
                    {services?.map((service) => (
                        <div className="col-md-4" key={service.id}>
                            <div className="card h-100 shadow-lg">
                                {/* service image */}
                                <img src={service.img} className="card-img-top p-2" height="250px" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">{service.name}</h5>
                                    <p className="card-text">Price: {service.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default Services;