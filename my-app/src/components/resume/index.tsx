import { Button, Divider } from '@mui/material';
import React from 'react';
import './index.css';


const Resume: React.FC = () => {
    return (
        <div className="overall">
            <h1> About </h1>
            <Divider/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, voluptas est. Perspiciatis delectus debitis exercitationem tempore incidunt laborum velit expedita cumque consequatur omnis ea dolore fugiat magni sequi aliquid dolor tempora doloribus a, architecto molestiae. Tempore saepe veniam itaque amet suscipit. Excepturi aspernatur iusto debitis, quisquam laborum sunt eum expedita impedit perferendis fugiat cumque in deleniti magni odit eligendi assumenda quas quasi. Iusto doloremque culpa saepe, delectus repudiandae perferendis accusantium voluptatem corrupti sunt tempore facilis quasi illo eligendi nisi harum omnis voluptates odit ad officiis sit qui ex fuga distinctio! Nemo velit nihil, sunt rem quia tempore. Corporis, accusantium inventore. Blanditiis consectetur voluptatibus autem labore sed vel aperiam est eos laudantium, minima odio sunt, culpa accusantium fugiat dolorem sint! Aliquam!
            </p>
            <Button href="https://docs.google.com/document/d/e/2PACX-1vT2REjM_6SzJAtcWq_-3O75hYABGF5ZP8EWrM9cgV9xlndLWq9CWno1t8IwDGMukKkn7ZwTU3Gcb3RC/pub" target="_blank" rel="noreferrer">My Resume</Button>
            <div className="skillsection">
                <label htmlFor="skills"><h2>Skills</h2></label>
                <Divider/>
                    <div className="skills" id="skills">
                        <h4>C++</h4>
                        <h4>React</h4>
                        <h4>JavaScript</h4>
                        <h4>HTML/CSS</h4>
                        <h4>Python</h4>
                    </div>
            </div>
        </div>
    );
};

export default Resume;