import LogoImg from '../../Assets/logo.png';

const Logo = () => {
    return (
        <div className="Logo">
            <h1>HiHi</h1>
            <div className='logo'>
                <img src={LogoImg} />
            </div>

        </div>
    );
}

export default Logo;