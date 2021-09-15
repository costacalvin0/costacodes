import React from 'react';
import "./index.css";

const Navbar: React.FC = () => {
    return (
        <div className="navbar" id="#home">
            <div>
                <a href="#home"><h3>costacodes</h3></a>
            </div>
            <div className="menu">

                <a href="#Skills"><h4>Skills</h4></a>
                
                <a href="#Experiences"><h4>Experiences</h4></a>
                
                <a href="#Projects"><h4>Projects</h4></a>
                
                <a href="#Contact"><h4>Contact</h4></a>
            </div>
        </div>
    );
};

export default Navbar;