import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import card from "../assets/astrotoma.png";
import welcome from "../assets/Welcome Back! Please Enter Your Credentials.png";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        try {
            const response = await axios.post('http://localhost:3023/auth/login', {
                email,
                password,
            }, { headers: { 'Content-Type': 'application/json' } });

            if (response.data.status) {
                localStorage.setItem('userinfo', JSON.stringify(response.data));
                alert('Login successfully!');
                navigate('/home');
            } else {
                alert('Please enter the correct credentials.');
            }
        } catch (error) {
            console.log(error);
            alert('An error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
            <img src= {welcome} alt="welcome img"  style={{ position:"absolute", top:40, right:600 , width: "230px", height: "50px"}}/>
            <div className="card rounded-4 shadow-lg" style={{ width: "60rem", height: "500px", backgroundColor: "#606075" }}>
                <div className="row no-gutters">
                    <div className="col-md-6">
                        <img src={card} className="card-img" alt="astrotoma image" />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <form className='sign-up-form p-5' onSubmit={handleSubmit}>
                                <label htmlFor='email' className='form-label text-light'>Email </label>
                                <input type='email' className='form-control mb-4 border-3' autoComplete='off' style={{ backgroundColor: 'transparent' }} onChange={(e) => setEmail(e.target.value)} />

                                <label htmlFor='password' className='form-label text-light'>Password </label>
                                <input type='password' className='form-control mb-5 border-3' style={{ backgroundColor: 'transparent' }} onChange={(e) => setPassword(e.target.value)} />

                                <button type='submit' className='btn btn-light w-100 fw-bold' disabled={isLoading}>{isLoading ? 'Logging in...' : 'Login'}</button>
                                <p>Don't have an Account? <Link to="/signup" style={{textDecoration: "none", color:"red"}}>Sign up</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
