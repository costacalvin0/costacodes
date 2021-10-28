import React, { useState } from 'react';
import "./index.css";
import "./navburger/index";
import BasicMenu from './navburger/index';

const Navbar: React.FC = () => {
    const [tabOpen, settabOpen] = useState(null);
    const open = Boolean(tabOpen);
    
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
            <div className="basicMenu">
                <h4><BasicMenu/></h4>
            </div>
        </div>
    );
};

export default Navbar;