import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Sidebar = () => {
  return (
    <div className="offcanvas offcanvas-end" style={{backgroundColor:"#606075"}} tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div className="offcanvas-header" style={{backgroundColor:"#0F0F13"}} >
        <h5 id="offcanvasRightLabel" style={{ color: "white" }}>Menu</h5>
        <button type="button" className="btn-close text-reset" style={{ color: "white", backgroundColor: "#f5f5f9" }} data-bs-dismiss="offcanvas" aria-label="Close"></button>

      </div>
      <div className="offcanvas-body" style={{backgroundColor:"#292938"}}>
        <ul className="list-group">
          <li className="list-group-item" style={{backgroundColor:"#292938"}}>
            <a href="/leaderb" style={{ color: "red" , textDecoration: "none" }}>Leaderboard</a>
          </li>
          <li className="list-group-item" style={{backgroundColor:"#292938" }}>
          <a href="/userprofile" style={{ color: "red" , textDecoration: "none" }}>User Profile</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
