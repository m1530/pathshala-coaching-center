import React from 'react';
import { Container } from 'react-bootstrap';
import useServices from '../Hooks/FetchServices';

const Services = () => {
    const [services] = useServices([]);
    return (
        <div>
            <Container>
                {/* display all services in service path link */}
                <h1 className="my-5">Our Services</h1>
                <div className="row g-4 mb-5">
                    {services?.map((service) => (
                        <div className="col-md-4" key={service.id}>
                            <div className="border p-4 h-100 shadow-lg">
                                <div>
                                    <img className="w-75 rounded" height="250px" src={service.img} alt="" />
                                </div>
                                <div className="mt-3">
                                    <h4>{service.name}</h4>
                                    <p>Price: {service.price}</p>
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