import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import handleLogin from "../../Services/loginServices";
import { useNavigate } from "react-router-dom";
import { loginAction } from "../../Redux/actions/userAction";
import './Login.css';
import logoCompany from '../../Assets/logo-company.png';
import userIcon from '../../Assets/user.svg';
import passIcon from '../../Assets/pass.svg';
import vnIcon from '../../Assets/vietnam.svg';
import ukIcon from '../../Assets/uk.svg';
import front_vi from '../../Assets/front_vi.png';
const Login = () => {
    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { username, password } = inputs;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }))
    }

    const handleSubmit = () => {
        const formData = {
            username: username,
            password: password
        };

        const res = handleLogin(formData);
        if (res === true) {
            dispatch(loginAction(formData));
            navigate("/home");
        }
        else {
            window.alert('Sai tài khoản hoặc mật khẩu!')
        }
    };

    return (
        <div className='form-login'>
            <div className="sub-main">
                <form>
                    <div className="imgs">
                        <div className="container-img">
                            <img src={logoCompany} alt="this" className="logo-company" />
                        </div>
                    </div>

                    <div>
                        <div className='login-form'>
                            <img className="icon" src={userIcon} alt="this" />
                            <input placeholder="username" type='text' name='username' value={username} onChange={handleChange} className='name' />
                        </div>

                        <div className='login-form'>
                            <img className="icon" src={passIcon} alt="this" />
                            <input placeholder="password" type='password' name='password' value={password} onChange={handleChange} className='name' />
                        </div>

                        <div className='login-button'>
                            <button className="loginButton" type='submit' onClick={handleSubmit}>
                                Đăng nhập
                            </button>
                        </div>
                        <p className="link">
                            <a className="register" href="#">Mở tài khoản</a><a className="forgotPass" href='#'>Quên mật khẩu</a>
                        </p>
                        <div className="vi-en">
                            <img className="vi-icon" src={vnIcon} />
                            <a href="#" className="vi-lan">Tiếng việt</a>
                            <img className="en-icon" src={ukIcon} />
                            <a href="#" className="en-lan">English</a>
                        </div>
                    </div>

                </form>
            </div>

        </div>
    );
}

export default Login