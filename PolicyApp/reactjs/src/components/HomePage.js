import React from 'react';

import {Button, Jumbotron} from "react-bootstrap";

const HomePage = () => {
    console.log("Rendering Home");
    return (
        <Jumbotron className="bg-dark text-white text-center">
            <h1>Policy Management App</h1>
            <p>
                Please Register and login to apply policy for customer
            </p>
        </Jumbotron>
    )
}

export default HomePage;