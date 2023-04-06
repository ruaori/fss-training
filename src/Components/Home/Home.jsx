import userOption from "./UserOptions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserOptions from "./UserOptions";
import Clock from "./Clock";

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = JSON.parse(localStorage.getItem('userData'));
    return (
        <div className="header">
            {/* <Logo /> */}
            <Clock />
            <UserOptions />
        </div>
    );
}

export default Home;