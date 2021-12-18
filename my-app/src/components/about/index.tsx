import { Avatar, Button, Grid } from '@mui/material';
import React from 'react';
import './index.css';

const About: React.FC = () => {
    return (
        <div className='Hero'>
            <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
            <div>
            <h1> Hi, im Calvin Costa. <br/> A developer. </h1>
            <br/>
            <Button variant="contained">Contact Me</Button>
            </div>
            </Grid>
            <Grid item xs={12} sm={6}>
             <div className='Profile'>
                 <Avatar/>
                <h3>I am a Latino developer based in NYC. <br/> Lorem ipsum dolor, sit amet consectetur adipisicing elit. </h3>
            </div>
           
            </Grid>
            </Grid>
        </div>
    );
};

export default About;