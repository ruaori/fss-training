
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserOptions from "./UserOptions";
import Clock from "./Clock";
import Logo from "./Logo";
import './home.css';
import ScrollingText from "./ScrollingText";
import TableHeader from "../Table/TableHeader";
import { getData } from '../../Assets/data_HOSE';
import { getData_HNX } from '../../Assets/data_HNX';
import { getData_HNX30 } from '../../Assets/data_HNX30';


const Home = () => {
    const dataRow = getData();

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
                <TableHeader border={1} data={dataRow} />
            </div>
        </div>

    );
}

export default Home;