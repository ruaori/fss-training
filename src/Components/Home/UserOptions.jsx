import userOption from "./UserOptions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutAction } from "../../Redux/actions/userAction";
import './home.css';

const UserOptions = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = JSON.parse(localStorage.getItem('userData'));
    return (
        <div className="header">
            <h1>Hi {userData.username}</h1>
            <button onClick={() => {
                dispatch(logoutAction());
                navigate("/login");
            }}>Log Out</button>
        </div>
    );
}

export default UserOptions;