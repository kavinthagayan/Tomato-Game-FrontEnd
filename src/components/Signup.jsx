import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import card from "../assets/astrotoma.png";

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3023/auth/signup', {
                username,
                email,
                password,
            }, { headers: { 'Content-Type': 'application/json' } });
            if (response.data.status) {
                localStorage.setItem('userinfo', JSON.stringify(response.data));
                alert('Sign up successful!');
                navigate('/login');
            } else {
                alert('Please enter the correct credentials.');
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
              <h1 className="text-white text-center mt-5"  style={{ position: "absolute", top: -20, left: "50%", transform: "translateX(-50%)" }}>Sign Up</h1>
              <h4 className="text-white text-center mt-5"  style={{ position: "absolute", top: 20, left: "50%", transform: "translateX(-50%)" }}>Already have an Account?</h4>
             

            <div className="card rounded-4 shadow-lg" style={{ width: "60rem", height: "500px", backgroundColor: "#606075" }}>
                
                <div className="row no-gutters">
                    <div className="col-md-6">
                        <img src={card} className="card-img" alt="astrotoma image"/>
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <form className='sign-up-form p-5' onSubmit={handleSubmit}>
                                <label htmlFor='username' className='form-label text-light'>Username </label>
                                <input type='text' className='form-control mb-4 border-3' style={{ backgroundColor: 'transparent' }} onChange={(e) => setUsername(e.target.value)} />

                                <label htmlFor='email' className='form-label text-light'>Email </label>
                                <input type='email' className='form-control mb-4 border-3' autoComplete='off' style={{ backgroundColor: 'transparent' }} onChange={(e) => setEmail(e.target.value)} />

                                <label htmlFor='password' className='form-label text-light'>Password </label>
                                <input type='password' className='form-control mb-5 border-3' style={{ backgroundColor: 'transparent' }} onChange={(e) => setPassword(e.target.value)} />

                                <button type='submit' className='btn btn-light w-100 fw-bold'>Sign Up</button>
                                <Link to="/login" style={{textDecoration: "none", color:"red"}}>LogIn!</Link>
                            </form>
                            {alertMessage && <div className="alert alert-warning mt-3" role="alert">{alertMessage}</div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
