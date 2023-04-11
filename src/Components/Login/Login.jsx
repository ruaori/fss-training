import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import handleLogin from "../../Services/loginServices";
import { useNavigate } from "react-router-dom";
import { loginAction } from "../../Redux/actions/userAction";
import './Login.css';
import logoCompany from '../../Assets/logo-company.png';
import userIcon from '../../Assets/user.svg';
import passIcon from '../../Assets/pass.svg';

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

            <form>
                <div className="login-form logo-company">
                    <img src={logoCompany} alt="this" />
                </div>
                <div className='login-form username'>
                    <img className="icon" src={userIcon} alt="this" />
                    <input type='text' name='username' value={username} onChange={handleChange} className='username' />
                </div>
                <div className='login-form password'>
                    <img className="icon" src={passIcon} alt="this" />
                    <input type='text' name='password' value={password} onChange={handleChange} className='password' />
                </div>
                <div id="errorMessage"></div>
                <div className='login-form btnLogin'>
                    <button type='submit' onClick={handleSubmit}>
                        Đăng nhập
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login