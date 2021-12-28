import React, {useState, useEffect, useContext, useRef} from 'react';
import {Col, Button, Form, Alert} from "react-bootstrap";
import {LoginContext} from "../Store";
import axios from 'axios';

const SignupPage = (props) => {

    const [isLoggedIn, ] = useContext(LoginContext);

    const inputRef = useRef(null);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


    useEffect(() => {
        if(isLoggedIn){
            props.history.push("/profile");
        }

        inputRef.current.focus();

    }, [isLoggedIn]);

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };


    const handleSignup = () => {
        axios.get(`http://localhost:8080/rest/user/${email}`)
            .then(resp => {
                    console.log(resp)
                    if(resp.data.id) {
                        setError("An account already exists with this email address.");
                    } else {
                        axios.post(`http://localhost:8080/rest/add-user`, {USER_EMAIL: email, USER_PASSWORD: password})
                            .then(resp => {
                                console.log("axios post: " + resp.data);
                                setError("");
                                props.history.push("/login");
                            })
                            .catch(setError("An error occurred while creating the account."));
                    }
                })
            .catch(setError("Couldn't communicate with the API!"));

    };

    console.log("Rendering Signup");
    return(
        <Col md={{span: 4, offset: 4}} xs={{span: 6, offset: 3}} className="text-white">
            <h1 className="text-center">Sign Up</h1>
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

                <Button variant="primary" onClick={handleSignup} >
                    Submit
                </Button>
            </Form>
        </Col>
    )
};

export default SignupPage;