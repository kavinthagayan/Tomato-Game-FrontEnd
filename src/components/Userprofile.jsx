import React, { useState, useEffect } from 'react';
import axios from 'axios';
import astro from "../assets/image 5.png";
import ch from "../assets/image 9.png";
import Apibottom from "../assets/level bo.png";
import rocket from "../assets/astroroka.png";

const UserProfile = () => {
    const [userDetails, setUserDetails] = useState(null);
    const [userRank, setUserRank] = useState(null);
    const [userId, setUserId] = useState(""); 

    const user = JSON.parse(localStorage.getItem('userinfo'));

    useEffect(() => {
        const fetchedUserId = user.userId; 
        setUserId(fetchedUserId);
    }, []);

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:3023/auth/userdetails?_id=${userId}`);
                setUserDetails(response.data);
            } catch (error) {
                console.error('Error fetching user details:', error.message);
            }
        };

        const fetchAllUsers = async () => {
            try {
                const response = await axios.get('http://localhost:3023/auth/allusers');
                const users = response.data;
                const sortedUsers = users.sort((a, b) => b.score - a.score);
                const userIndex = sortedUsers.findIndex(user => user._id === userId);
                setUserRank(userIndex + 1);
            } catch (error) {
                console.error('Error fetching all users:', error.message);
            }
        };

        fetchUserDetails();
        fetchAllUsers();
    }, [userId]);

    if (!userDetails || userRank === null) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ textAlign: 'center', marginTop: '80px' }}>
            <img src={astro} alt="astro img" style={{ position: "absolute", top: 30, right:350, width: "200px", height: "200px" }} />
            <h2 className='text-center fw-bold text-light' style={{ marginBottom: '20px' }}>User Profile</h2>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
                <div className="card rounded-4 shadow-lg mb-3 " style={{ top:90,left:360,width: "700px", height: "300px" }}>
                <img src={ch} alt="ch img" style={{ position: "absolute", top: 50, left: 20, width: "200px", height: "200px" }} />
                    <div className="card-body"  style={{ marginTop: '65px' }}>
                        <h4 className='mb-1' style={{ marginLeft: '20px' }}><strong>Name:</strong>   <strong>{userDetails.username}</strong></h4>
                        <h4 className='mb-1'  style={{ marginLeft: '150px' }}><strong>Email:</strong>   <strong>{userDetails.email}</strong></h4>
                        <h4 className='mb-1'  style={{ marginLeft: '65px' }}><strong>Current Position:</strong> <strong>{userRank}</strong></h4>
                        <h4 className='mb-1' style={{ marginLeft: '55px' }}><strong>Current Score:</strong> <strong>{userDetails.score}</strong></h4>
                    </div>
                </div>
            </div>
            <img src= {Apibottom} alt="apib img"  style={{ position:"absolute", bottom:0, right:0 , width: "400px", height: "400px"}}/>
            <img src={rocket} alt="Astro Roka" className="cornerbottom-image" style={{ position:"absolute", bottom:-40, left:0 , width: "400px", height: "400px"}}/>
     
        </div>
    );
};

export default UserProfile;
