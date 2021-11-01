import React from 'react';
import './index.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Grid } from '@mui/material';

const Footer: React.FC = () => {
    return (
        <div className='Footer'>
            <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
                <p><strong>INFO</strong></p>
                <p>Formats</p>
                <p>Compression</p>
                <p>Pricing</p>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
            <p><strong>RESOURCES</strong></p>
                <p>Developer API</p>
                <p>Tools</p>
                <p>Blog</p>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
            <p><strong>COMPANY</strong></p>
                <p>About Us</p>
                <p>Sustainability</p>
                <p>Terms Of Service</p>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <div>
                    <p>Contact Me!</p>
                    <div>
                        <p>Email: costacalvin0@gmail.com</p>
                    </div>
                </div>
                <div>
                    <p>Follow me</p>
                    <div className='Social'>
                        <a href="https://www.instagram.com/ckcg.24/" target="_blank" rel="noopener noreferrer"><InstagramIcon/></a>
                        <a href="https://twitter.com/costacalvin0" target="_blank" rel="noopener noreferrer"><TwitterIcon/></a>
                        <a href="https://github.com/costacalvin0" target="_blank" rel="noopener noreferrer"><GitHubIcon/></a>
                        <a href="https://www.linkedin.com/in/costacalvin0/" target="_blank" rel="noopener noreferrer"><LinkedInIcon/></a>
                    </div>
                </div>
                
            </Grid>
            </Grid>
        </div>
    );
};

export default Footer;