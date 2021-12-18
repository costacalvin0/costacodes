import { Grid } from '@mui/material';
import React from 'react';
import ProjectCard from './card';
import './index.css';
import pathgo from '../../images/PathGoLogo.png'
import logo from '../../images/website_logo_transparent_background.png'
import romana from '../../images/romana.png'
import hetio from '../../images/hetionet.png'

const Projects: React.FC = () => {
    return (
        <div className='projects'>
            <h2><span>Projects</span></h2>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
<ProjectCard title='PathGo' description='A website tasked with creating a simple and intuitive way for getting indoor navigation within large and small complexes. Uses react, typescript, AWS to complete our main vision.' image={pathgo} demo='https://pathgo.app' code='https://bitbucket.org/pathgo/'/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
                    <ProjectCard title='Hetio-net' description='A website tasked with creating a simple and intuitive way for getting indoor navigation within large and small complexes. Uses react, typescript, AWS to complete our main vision.' image={hetio}/>

        </Grid>
        <Grid item xs={12} sm={6} md={4}>
                    <ProjectCard title='Romana Prosperity' description='A responsive web application built for a construction company, with a new and modern design that helps potential customers discover, learn, and easily get in contact with Romana Prosperity!' image={romana}/>

        </Grid>
        <Grid item xs={12} sm={6} md={4}>
                    <ProjectCard title='CostaCodes' description='My personal portfolio website, built and designed by me. Built using React, Typescript, Netlify. Fully responsive and compatible with all browsers. Always updating!' image={logo} demo='https://costacodes.com' code='https://github.com/costacalvin0/costacodes'/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
                    <ProjectCard title='Project 5' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, magnam voluptates tenetur, laboriosam provident quod voluptatum iure ipsa corporis blanditiis, ut vel. Adipisci, blanditiis eveniet animi iusto recusandae voluptate magnam!' image='https://content.fortune.com/wp-content/uploads/2019/01/boo.jpg'/>

        </Grid>
        <Grid item xs={12} sm={6} md={4}>
                    <ProjectCard title='Project 6' 
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, magnam voluptates tenetur, laboriosam provident quod voluptatum iure ipsa corporis blanditiis, ut vel. Adipisci, blanditiis eveniet animi iusto recusandae voluptate magnam!" 
                    image='https://content.fortune.com/wp-content/uploads/2019/01/boo.jpg' />
        </Grid>
        </Grid>
        </div>
    );
};

export default Projects;