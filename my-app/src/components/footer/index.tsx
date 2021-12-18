import React from 'react';
import './index.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { Button, Divider, Grid, TextField } from '@mui/material';

const Footer: React.FC = () => {
    return (
        <div className='Footer'>
            <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <h1>Contact Me</h1>
                <TextField required autoComplete="email" id="filled-basic" fullWidth label="Email" placeholder="brucewayne@waynetech.com" variant="filled" color="success"/>
                <TextField required multiline id="message" minRows={4}  fullWidth label="Message" placeholder=" I need a suit... with bat ears. Please keep this between us." variant="standard" color="success"/>
                <Button type='submit' className="Button" variant="outlined" endIcon={<EmailIcon />}>
        Send
      </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
                <div>
                    <div>
                        <h1>Socials</h1>
                    </div>
                </div>
                <div>
                    <div className='Social'>
                        <h3><a href="https://www.instagram.com/ckcg.24/" target="_blank" rel="noopener noreferrer"><InstagramIcon/> Instagram</a></h3>
                        <h3><a href="https://twitter.com/costacalvin0" target="_blank" rel="noopener noreferrer"><TwitterIcon/> Twitter</a></h3>
                        <h3><a href="https://github.com/costacalvin0" target="_blank" rel="noopener noreferrer"><GitHubIcon/> Github</a></h3>
                        <h3><a href="https://www.linkedin.com/in/costacalvin0/" target="_blank" rel="noopener noreferrer"><LinkedInIcon/> LinkedIn</a></h3>
                    </div>
                </div>
                
            </Grid>
            </Grid>
            <br/>
            <Divider/>
            <div className='Copyright'>
                <p><a href="https://www.costacodes.com/" target="_blank" rel="noopeber noreferrer">CostaCodes.com</a></p>
                <p> &copy; 2021, Calvin Costa</p>
            </div>
        </div>
    );
};

export default Footer;