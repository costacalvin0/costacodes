import { Button, Divider } from '@mui/material';
import React from 'react';
import './index.css';


const Resume: React.FC = () => {
    return (
        <div className="overall">
            <h1> About </h1>
            <Divider/>
            <p>Recent college graduate with a Bachelor’s degree in Computer Science. I've had years of software development experience and I'm very skilled with React, JavaScript, C++, Python, and most things web development. Looking to advance my skills with cloud technology such as AWS and backend such as Node.js.
            </p>
            <Button href="https://docs.google.com/document/d/e/2PACX-1vT2REjM_6SzJAtcWq_-3O75hYABGF5ZP8EWrM9cgV9xlndLWq9CWno1t8IwDGMukKkn7ZwTU3Gcb3RC/pub" target="_blank" rel="noreferrer">My Resume</Button>
            <div className="skillsection">
                <label htmlFor="skills"><h2>Programming</h2></label>
                <Divider/>
                    <div className="skills" id="skills">
                        <h4>C++</h4>
                        <h4>React</h4>
                        <h4>JavaScript &amp; TypeScript</h4>
                        <h4>HTML5/CSS3</h4>
                        <h4>Python</h4>
                    </div>
            </div>
            <div className="skillsection">
                <label htmlFor="skills"><h2>Tools</h2></label>
                <Divider/>
                    <div className="skills" id="skills">
                        <h4>Netlify</h4>
                        <h4>MongoDB</h4>
                        <h4>Firebase</h4>
                        <h4>CircleCI</h4>
                        <h4>VSCode</h4>
                    </div>
            </div>
        </div>
    );
};

export default Resume;