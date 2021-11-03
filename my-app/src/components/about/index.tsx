import React from 'react';
import './index.css';

const About: React.FC = () => {
    return (
        <div className='Hero'>
            <div>
            <h1> Hi, im Calvin Costa. <br/> A developer. </h1>
            <br/>
            <button className='ButtonStyle'>Contact Me</button>
            </div>
            <div>
                <h3>I am a Latino developer based in NYC. <br/> Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br/> Expedita quae laboriosam maiores explicabo culpa eaque nam accusamus dolor soluta! Debitis fugit delectus!</h3>
            </div>
        </div>
    );
};

export default About;