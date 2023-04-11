import LogoImg from '../../Assets/logo.png';
import './home.css';
const Logo = () => {
    return (
        <div className="Logo header">
            <img src={LogoImg} alt='logo' />

        </div>
    );
}

export default Logo;