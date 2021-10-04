import React from 'react';
import { Container } from 'react-bootstrap';
import useServices from '../Hooks/FetchServices';
import Service from '../Service/Service';

const Home = () => {
    const [services] = useServices();
    return (
        <div>
            <Container>
                <h1>this is home</h1>
                <h1 className="my-5">Our Services</h1>
                <div className="row g-3 my-4">
                    {
                        services.slice(0, 4).map(service => <Service key={service.id} service={service}></Service>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Home;