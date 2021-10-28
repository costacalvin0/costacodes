import React from 'react';
import './index.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { TextField } from '@material-ui/core';

const Footer: React.FC = () => {
    return (
        <div className='Footer'>
            <div>
                <p><strong>INFO</strong></p>
                <p>Formats</p>
                <p>Compression</p>
                <p>Pricing</p>
            </div>
            <div>
            <p><strong>RESOURCES</strong></p>
                <p>Developer API</p>
                <p>Tools</p>
                <p>Blog</p>
            </div>
            <div>
            <p><strong>COMPANY</strong></p>
                <p>About Us</p>
                <p>Sustainability</p>
                <p>Terms Of Service</p>
            </div>
            <div>
                <div>
                    <p>Email Me!</p>
                    <div>
                        <TextField placeholder="Your email"></TextField>
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
                
            </div>
        </div>
    );
};

export default Footer;