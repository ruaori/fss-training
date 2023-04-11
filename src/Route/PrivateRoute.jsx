
import { Navigate, Outlet } from "react-router-dom";
const checkLogin = () => {
    const user = localStorage.getItem('userData');
    return user ? true : false;
}

const PrivateRoute = ({ children }) => {
    const checkUser = checkLogin()
    return checkUser ? <>{children}</> : <Navigate to="/login" />
}

export default PrivateRoute;