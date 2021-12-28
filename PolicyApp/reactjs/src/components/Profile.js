import React, { useContext, useEffect, useState } from 'react';
import { UserContext, LoginContext } from "../Store";
import { Redirect } from "react-router-dom";

const Profile = () => {

    const [isLoggedIn, ] = useContext(LoginContext);
    const [user, ] = useContext(UserContext);

    const [redirect, setRedirect] = useState(false);


    useEffect(() => {
        if(!isLoggedIn){
            setRedirect(true);
        }
    }, [user, isLoggedIn]);


    const text = user === undefined ? "Email is empty!" : `Email: ${user}`;

    console.log("Rendering Profile");

    return(
        redirect ? <Redirect to="/employees"/> : (
            <div className="text-center">
                <label className="bg-dark text-white">{text}</label>
            </div>
        )
    )

};

export default Profile;