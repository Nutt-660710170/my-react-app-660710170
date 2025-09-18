import React from "react";
import { Link, useNavigate } from "react-router-dom";


const NotFound = ()=>{
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate("/");
    }

    return (
        <div>
            <h1>404 - NOT FOUND</h1>
            <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
        </div>
    );
}
export default NotFound;