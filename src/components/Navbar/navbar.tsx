import React, {useState} from "react";
import './navbar.css'
import logo from '../../assets/briefcase-regular-24.png'
import contactImg from '../../assets/envelope-regular-24.png'
import menu from '../../assets/menu.png'
import { Link } from 'react-scroll/modules';


const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo" />
            <div className="desktopMenu">
                <Link to='intro' activeClass='active' smooth={true} spy={true} offset={-100} duration={1000} className="desktopMenuListItem">Home</Link>
                <Link to='skills' activeClass='active' smooth={true} spy={true} className="desktopMenuListItem">About</Link>
                <Link className="desktopMenuListItem">Portfolio</Link>
                <Link className="desktopMenuListItem">Clients</Link>
            </div>
            <button className="desktopMenuBtn">
                <img src={contactImg} alt="" className="desktopMenuImg" /> Contact me 
            </button> 
        </nav>
    );
}

export default Navbar; 