import React from 'react';
import { Container, Button } from 'react-bootstrap';
import login from '../../images/login.jpg';

const Login = () => {
    return (
        <div>
            <Container className="my-5">
                <div className="row form-group">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 p-5 text-start border rounded bg-secondary">
                        <h4 className="text-warning text-center mb-3">Welcome to Pathshala Coaching Center</h4>
                        <div className="text-center">
                            <img className="rounded-circle" width="180px" src={login} alt="" />
                        </div>
                        {/* <h4>Login Form</h4> */}
                        <input type="text" name="" id="" className="form-control my-3" placeholder="Enter your email" aria-describedby="helpId" />
                        <input type="text" name="" id="" className="form-control mb-3" placeholder="Enter your password" aria-describedby="helpId" />
                        <Button variant="primary">Login</Button>
                    </div>

                    <div className="col-md-3"></div>
                </div>
            </Container>
        </div>
    );
};

export default Login;