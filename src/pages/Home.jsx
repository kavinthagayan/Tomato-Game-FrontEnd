import React from 'react';
import { Link } from 'react-router-dom'; 
import Swal from 'sweetalert2'; 
import Sidebar from '../components/Sidebar'; 
import rocket from "../assets/astroroka.png";
import level from "../assets/level.png";
import level2 from "../assets/level2.png";
import level3 from "../assets/level3.png";
import level4 from "../assets/level4.png";
import bottomimage from "../assets/ss.png";
import Apibottom from "../assets/level bo.png";

const Home = () => {
  
  
  const handleGlevelClick = () => {
    Swal.fire({
      title: "This is Level1!",
      text: "This is the Esiest Level In this Game!! You have 45 Seconds to answer the Questions!!",
      icon: "info"
    });
  };

  const handleLevel2Click = () => {
    Swal.fire({
      title: "This is Level2!",
      text: " You have 35 Seconds to answer the Questions!!",
      icon: "info"
    });
  };

  const handleLevel3Click = () => {
    Swal.fire({
      title: "This is Level3!",
      text: " You have 25 Seconds to answer the Questions!!",
      icon: "info"
    });
  };


const handleLevel4Click = () => {
    Swal.fire({
      title: "This is Level4!",
      text: "This is the Hardest Level In this Game!! You have 15 Seconds to answer the Questions!! But you can score more!!",
      icon: "info"
    });
  };



  return (
    <div>
      <h1 className='text-center text-light fw-bold mt-5'>Choose a Level</h1>
      <img src={rocket} alt="Astro Roka" className="cornertop-image"/>
     
      <Sidebar />
      <div className="container d-flex justify-content-center align-items-center" style={{ width:"800px" ,height: "550px", marginLeft: "350px", marginTop:"60px" }}>
        <div className="row">
          <div className="col-lg-8">
            
            <button className="btn btn-secondary py-0 px-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" style={{ position:"relative", top:-30, left:-300, zIndex : "2", fontSize : "30px"}}> <i className="bi bi-list"></i></button>
            <Link to="/glevels">
              <img src={level} alt="level 1" className="image" onClick={handleGlevelClick} />
            </Link>
          </div>
          <div className="col-lg-8">
            <Link to="/level2">
              <img src={level2} alt="level 2" className="image2" onClick={handleLevel2Click} />
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <Link to="/level3">
              <img src={level3} alt="level 3" className="image3" onClick={handleLevel3Click} />
            </Link>
          </div>
          <div className="col-lg-8">
            <Link to="/level4">
              <img src={level4} alt="level 4" className="image4" onClick={handleLevel4Click} />
            </Link>
          </div>
        </div>
      </div>
      <img src={bottomimage} alt="bottomimg" className="boimage" style={{ position:"absolute", bottom:5, left:5 , width: "300px", height: "300px"}}/>
      <img src= {Apibottom} alt="apib img"  style={{ position:"absolute", bottom:0, right:0 , width: "370px", height: "370px"}}/>
    </div>
  );
}

export default Home;
