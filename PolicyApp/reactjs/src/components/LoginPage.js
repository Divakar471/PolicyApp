import React, {useContext, useEffect, useState, useRef} from 'react';
import {UserContext, LoginContext} from "../Store";


import {Form, Button, Col, Alert} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

const LoginPage = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useContext(LoginContext);
    const [user, setUser] = useContext(UserContext);

    const inputRef = useRef(null);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [redirect, setRedirect] = useState(false);


    useEffect(() => {
        if(isLoggedIn){
            setRedirect(true);
        }

        inputRef.current.focus();
    }, [user, isLoggedIn]);


    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const login = () => {

        axios.get(`http://localhost:8080/rest/user/${email}`)
            .then( resp => {
                if(resp.data.USER_PASSWORD === password){

                    setUser(resp.data.USER_EMAIL);
                    setIsLoggedIn(true);
                    console.warn("resp.data.USER_EMAIL: " + resp.data.USER_EMAIL);
                    setError("");
                    props.history.push("/employees");
                } else {
                    setError("The email or password you entered is incorrect.");
                }
            })
            .catch(err => console.error(err));

    };

    console.log("Rendering Login");
    return(
        redirect ? <Redirect to="/employees"/> :
         <Col md={{span: 4, offset: 4}} xs={{span: 6, offset: 3}} className="text-white">
            <h1 className="text-center">Log In</h1>
             {
                 (error.length > 1) ? (<Alert variant="warning">{error}</Alert>) : ""
             }
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={inputRef} type="email" placeholder="Email" onChange={e => {handleEmail(e)}}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={e => {handlePassword(e)}}/>
                </Form.Group>

                <Button variant="primary" onClick={login} >
                    Submit
                </Button>
            </Form>
        </Col>
    )
};

export default LoginPage;