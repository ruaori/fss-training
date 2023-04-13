import LogoImg from '../../Assets/logo.png';
import './home.css';
const Logo = () => {
    return (
        <div className='logo'>
            <img src={LogoImg} alt='logo' className='logo' />
        </div>

    );
}

export default Logo;