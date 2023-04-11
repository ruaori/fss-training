
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserOptions from "./UserOptions";
import Clock from "./Clock";
import Logo from "./Logo";
import './home.css';
import scrollingText from "./scrollingText";

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = JSON.parse(localStorage.getItem('userData'));
    return (
        <header className="topbar header">
            <div className="header header-logo">
                <Logo />
            </div>
            <div className="header header-clock">
                <Clock />
            </div>
            <div className="header header-scrolling">
                <scrollingText />
            </div>
            <div className="header header-options">
                <UserOptions />
            </div>
        </header>

    );
}

export default Home;