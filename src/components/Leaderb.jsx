import React, { useState, useEffect } from 'react';
import axios from 'axios';
import medal from "../assets/image 6.png";
import astro from "../assets/image 5.png";

const Leaderb = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:3023/auth/allusers');
                const sortedUsers = response.data.sort((a, b) => b.score - a.score);
                setUsers(sortedUsers);
            } catch (error) {
                console.error('Error fetching users:', error.message);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <img src={astro} alt="astro img" style={{ position: "absolute", top: 30, right: 20, width: "200px", height: "200px" }} />
            <h2 className='text-center fw-bold text-light'>Leaderboard</h2>

            <div style={{ position: "absolute", top: 100, left: 250 }}>

                {users.map((user, index) => (

                    <div key={user._id} className="card rounded-4 shadow-lg mb-3 " style={{ width: "60rem", height: "80px" }}>
                        <div className="row no-gutters">
                            <div className="col-md-12">
                                <div className="card-body d-flex justify-content-around">
                                    <img src={medal} className='mb-2' style={{ width: "55px", height: "55px" }} alt="img" />
                                    <h4 className='mt-2'>{user.username}</h4>
                                    <h4 className='mt-2'>{user.score}</h4>
                                    <h4 className='mt-2' style={{ marginLeft: "200px" }}>{index + 1}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Leaderb;
