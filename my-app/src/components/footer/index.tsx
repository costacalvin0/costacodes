import React from 'react';
import './index.css';

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
                    <p>Subscribe to our newsletter</p>
                    <div>

                    </div>
                </div>
                <div>
                    <p>Follow us</p>
                    <div>
                        
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Footer;