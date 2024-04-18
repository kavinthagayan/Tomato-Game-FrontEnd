import React, { useState, useEffect } from "react";
import axios from "axios";
import number from "../assets/image num.png";
import Apitop from "../assets/image api.png";
import Apibottom from "../assets/level bo.png";
import select from "../assets/Select a number.png";

const Level3 = () => {
    const [question, setQuestion] = useState('');
    const [solution, setSolution] = useState(0);
    const [timer, setTimer] = useState(25);
    const [gameOver, setGameOver] = useState(false);
    const [correctAnswer, setCorrectAnswer] = useState(false);
    const [incorrectAnswer, setIncorrectAnswer] = useState(false);
    const [userAnswer, setUserAnswer] = useState("");
    const [score, setScore] = useState(0);
    const [userId, setUserId] = useState(""); 

    const user = JSON.parse(localStorage.getItem('userinfo'));
    useEffect(() => {
     // const fetchedUserId = '661c145056ae60f09ff4e0bd';
        const fetchedUserId = user.userId; 
        setUserId(fetchedUserId);
    }, []);
  

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3023/game/quest');
            const { question, solution } = response.data;
            setQuestion(question);
            setCorrectAnswer(false);
            setIncorrectAnswer(false);
            setUserAnswer("");
            setSolution(solution);
        } catch (error) {
            console.error('Error fetching Data', error);
        }
    };

    useEffect(() => {
        fetchData();
    
        const interval = setInterval(() => {
            setTimer(prevTimer => {
                if (prevTimer === 0) {
                    clearInterval(interval);
                    setGameOver(true);
                    return 0;
                } else {
                    return prevTimer - 1;
                }
            });
        }, 1000);
    
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (userId) {
            fetchUserDetails(); 
        }
    }, [userId]); 

    const fetchUserDetails = async () => {
        try {
            const response = await axios.get(`http://localhost:3023/auth/userdetails?_id=${userId}`);
            if (response.status === 200) {
                setScore(response.data.score);
            }
        } catch (error) {
            console.error("Fetching Error:", error.message);
        } 
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (parseInt(userAnswer) === parseInt(solution)) {
            const updatedScore = score + 20;
    
            try {
                if (!userId) {
                    console.error("User ID is missing or invalid");
                    return; 
                }
    
                const response = await axios.put("http://localhost:3023/auth/userscore", { _id: userId, score: updatedScore });
    
                if (response.status === 200) {
                    setScore(updatedScore);
                    setCorrectAnswer(true);
                    setUserAnswer("");
    
                    fetchData();
                } else {
                    console.error("Error updating score:", response.data.message); 
                }
            } catch (error) {
                console.error("Error updating:", error.message); 
            }
        } else {
            setIncorrectAnswer(true);
        }
    };
    
    
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
           <h1 className="text-white text-center mt-5"  style={{ position: "absolute", top: -20, left: "50%", transform: "translateX(-50%)" }}>Space Tomato</h1>
             <img src= {Apitop} alt="api img"  style={{ position:"absolute", top:30, right:60 , width: "230px", height: "230px"}}/>
            {/* <div className="d-flex">
                <h3 className="text-light">Score:   {score}</h3>
                <p className="text-light">Solution: {solution}</p>
            </div> */}
            <div className="card shadow border rounded-5"  style={{ width: '700px' }}>
                <div className="card-body p-5">
                    <h2 className="card-title text-center py-2">Question</h2>
                    <h3 className="text-black">Score:   {score}</h3>
                    {question ? (
                        <img src={question} alt="Game" style={{ maxWidth: '100%' }} />
                    ) : (
                        <p className="text-center">Loading image...</p>
                    )}
                    {gameOver && <p className="text-danger">Time's up! Game Over!</p>}
                    {correctAnswer && <p className="text-success">Your answer is correct!</p>}
                    {incorrectAnswer && <p className="text-danger">Your answer is incorrect!</p>}
                    {!gameOver && !correctAnswer && !incorrectAnswer && <p className="p-3">Time remaining: {timer} seconds</p>}
                    {!gameOver && !correctAnswer && !incorrectAnswer && (
                        <div className="input-group mb-3">
                            <input
                                type="number" 
                                className="form-control"
                                placeholder="Enter solution"
                                value={userAnswer}
                                onChange={(e) => setUserAnswer(e.target.value)}
                            />
                            <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                        </div>
                    )}
                </div>
            </div>
            <img src= {number} alt="number img"  style={{ position:"absolute", bottom:0, left:5 , width: "400px", height: "300px"}}/>
            <img src= {Apibottom} alt="apib img"  style={{ position:"absolute", bottom:0, right:0 , width: "400px", height: "400px"}}/>
            <img src= {select} alt="select img"  style={{ position:"absolute", bottom:115, left:240 , width: "80px", height: "60px"}}/>
           
        </div>
    );
}

export default Level3;
