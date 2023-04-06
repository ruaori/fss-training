import userOption from "./UserOptions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutAction } from "../../Redux/actions/userAction";


const UserOptions = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = JSON.parse(localStorage.getItem('userData'));
    return (
        <>
            <h1>Hi {userData.username}</h1>
            <button onClick={() => {
                dispatch(logoutAction());
                navigate('/');
            }}>Log Out</button>
        </>
    );
}

export default UserOptions;