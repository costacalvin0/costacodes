 import React from 'react';
 import "./index.css";
 import Navbar from '../../components/navbar';
 import About from '../../components/about';
 import Projects from '../../components/projects';
 import Contact from '../../components/contact';
 import Footer from '../../components/footer';

 const Home: React.FC = () => {
return (
    <div className="body">
    <Navbar />
    <About />
    <Projects />
    <Contact />
    <Footer />
    </div>
    );
 };

 export default Home;

