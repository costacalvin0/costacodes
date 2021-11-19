 import React from 'react';
 import "./index.css";
 import Navbar from '../../components/navbar';
 import About from '../../components/about';
 import Projects from '../../components/projects';
import Resume from '../../components/resume';
 import Footer from '../../components/footer';

 const Home: React.FC = () => {
return (
    <div className="body">
    <Navbar />
    <About />
    <Resume />
    <Projects />
    <Footer />
    </div>
    );
 };

 export default Home;

