import React, {useContext} from "react";
import {LoginContext, UserContext} from "../Store";
import { useHistory } from "react-router-dom";

const Logout = () => {

    const [, setIsLoggedIn] = useContext(LoginContext);
    const [, setUser] = useContext(UserContext);

    setIsLoggedIn(false);
    setUser("");
    localStorage.clear();
    useHistory().push("/");

    return(<></>);
};

export default Logout;