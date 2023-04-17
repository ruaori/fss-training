
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserOptions from "./UserOptions";
import Clock from "./Clock";
import Logo from "./Logo";
import './home.css';
import ScrollingText from "./ScrollingText";
import TableHeader from "../Table/TableHeader";



const Home = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = JSON.parse(localStorage.getItem('userData'));
    return (
        <div>
            <header className="header">
                <div className="header_inner">
                    <Logo />
                    <Clock />
                    <ScrollingText />
                    <UserOptions />
                </div>
            </header>
            <div className="tableHeader">
                <TableHeader />
            </div>
        </div>

    );
}

export default Home;