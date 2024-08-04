// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import './Home.css'; // Import your custom CSS
import { useNavigate } from 'react-router-dom';

function Home() {
    const navi=useNavigate();
    return (
        <div className="app-container">
            <Navbar bg="light" expand="lg" className="top-navbar">
                <Navbar.Brand href="#home">Wheel Wise</Navbar.Brand>
                  <div className="dealer">
                <Nav className="ml-auto">
                    <button onClick={()=>navi("/signin")}>Sign In</button>
                    <Nav.Link href="#cart">Cart</Nav.Link>
                </Nav>
                </div>
            </Navbar>

            <div className="video-background">
                <video autoPlay loop muted>
                    <source src="assets/Bgvideo.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="centered-text">
                <p className="gun">Made Like a Gun</p>
            </div>

            <footer className="bottom-navbar">
            <nav className="footer-nav">
        <button onClick={()=>navi("/bike")}>Bikes</button>
        <button onClick={()=>navi("/parts")}>Parts</button>
        <button onClick={()=>navi("/accessories")}>Accessories</button>
        <button onClick={()=>navi("/contactus")}>Contact Us</button>
            </nav>
            </footer>
        </div>
    );
}

export default Home;
