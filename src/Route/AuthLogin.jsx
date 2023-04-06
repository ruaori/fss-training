import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Auth = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (userData) {
            navigate("/home");
        }
    }, []);

    return (
        <div className="auth">
            <Outlet />
        </div>
    );
}

export default Auth;