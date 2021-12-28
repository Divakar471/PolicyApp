import React, {useContext} from 'react';

import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {LoginContext} from "../Store";

const NavigationBar = () => {

    const [isLoggedIn, ] = useContext(LoginContext);


    console.log("Rendering NavigationBar");
    return(
        <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
                <Link to="/" className="nav-link">Home</Link>
                { !isLoggedIn ?
                    (
                        <>
                            <Link to="/login" className="nav-link">Login</Link>
                            <Link to="/signup" className="nav-link">Signup</Link>
                        </>
                    ) : (
                        <Link to="/profile" className="nav-link">Profile</Link>
                    ) }
            </Nav>
            { isLoggedIn ? (<Nav><Link to="/logout" className="nav-link">Logout</Link></Nav>) : "" }
        </Navbar>
    )
}

export default NavigationBar;