import { Divider, Grid } from '@mui/material';
import React from 'react';
import ProjectCard from './card';
import './index.css';

const Projects: React.FC = () => {
    return (
        <div className='projects'>
            <h2><span>Projects</span></h2>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
<ProjectCard title='PathGo' description='A website tasked with creating a simple and intuitive way for getting indoor navigation within large and small complexes. Uses react, typescript, AWS to complete our main vision.' image="https://content.fortune.com/wp-content/uploads/2019/01/boo.jpg" demo='https://pathgo.app' code='https://bitbucket.org/pathgo/'/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
                    <ProjectCard title='Hetio-net' description='A website tasked with creating a simple and intuitive way for getting indoor navigation within large and small complexes. Uses react, typescript, AWS to complete our main vision.' image='https://content.fortune.com/wp-content/uploads/2019/01/boo.jpg'/>

        </Grid>
        <Grid item xs={12} sm={6} md={4}>
                    <ProjectCard title='Romana Construction' description='A website tasked with creating a simple and intuitive way for getting indoor navigation within large and small complexes. Uses react, typescript, AWS to complete our main vision.' image='https://content.fortune.com/wp-content/uploads/2019/01/boo.jpg'/>

        </Grid>
        <Grid item xs={12} sm={6} md={4}>
                    <ProjectCard title='PathGo' description='A website tasked with creating a simple and intuitive way for getting indoor navigation within large and small complexes. Uses react, typescript, AWS to complete our main vision.' image='https://content.fortune.com/wp-content/uploads/2019/01/boo.jpg'/>

        </Grid>
        <Grid item xs={12} sm={6} md={4}>
                    <ProjectCard title='PathGo' description='A website tasked with creating a simple and intuitive way for getting indoor navigation within large and small complexes. Uses react, typescript, AWS to complete our main vision.' image='https://content.fortune.com/wp-content/uploads/2019/01/boo.jpg'/>

        </Grid>
        <Grid item xs={12} sm={6} md={4}>
                    <ProjectCard title='PathGo' 
                    description='A website tasked with creating a simple and intuitive way for getting indoor navigation within large and small complexes. Uses react, typescript, AWS to complete our main vision.' 
                    image='https://content.fortune.com/wp-content/uploads/2019/01/boo.jpg' demo='https://pathgo.app' code='Bitbucket'/>
        </Grid>
        </Grid>
        </div>
    );
};

export default Projects;