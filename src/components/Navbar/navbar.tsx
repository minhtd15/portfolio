import React, { useState } from "react";
import './navbar.css'
import logo from '../../assets/briefcase-regular-24.png'
import contactImg from '../../assets/envelope-regular-24.png'
import menu from '../../assets/menu.png'
import { Link } from 'react-scroll/modules';
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import title from '../../assets/myPort.png'
import { Link as ScrollLink, scroller } from 'react-scroll';

const fadeIn = (direction, duration) => ({
    hidden: { opacity: 0, y: direction === 'up' ? 20 : direction === 'down' ? -20 : 0 },
    show: { opacity: 1, y: 0, transition: { duration: duration } },
});

const root = document.getElementById('root') as HTMLElement
const Navbar: React.FC = () => {
    const [showMenu, setShowMenu] = useState(false);
    const fadeInVariants = {
        hidden: { opacity: 0, y: -20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
    };
    const handleContactButtonClick = () => {
        // Scroll to the 'contact' section when the button is clicked
        // Adjust the values as needed for your specific section
        scroller.scrollTo('contact', {
            smooth: true,
            spy: true,
            offset: 0,
            duration: 1000,
        });
    };


    return (
        <nav className="navbar">
            <img src={title} alt="Logo" className="logo" />
            <div className="desktopMenu">
                <Link to='intro' activeClass='active' smooth={true} spy={true} offset={-100} duration={1000} className="desktopMenuListItem">Home</Link>
                <Link to='about' activeClass='active' smooth={true} spy={true} className="desktopMenuListItem">About</Link>
                <Link className="desktopMenuListItem">Portfolio</Link>
                <Link className="desktopMenuListItem">Clients</Link>
            </div>
            <button className="desktopMenuBtn" onClick={handleContactButtonClick}>
                <img src={contactImg} alt="" className="desktopMenuImg"/> Contact me
            </button>
            <motion.img
                variants={fadeInVariants}
                initial="hidden"
                animate={showMenu ? "show" : "hidden"}
                exit="exit"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
                src={menu} alt="Menu" className="mobMenu"
                onClick={() => setShowMenu(!showMenu)}
            />
            <AnimatePresence>
                {showMenu && (
                    <motion.div
                        className="navMenu"
                        variants={fadeInVariants}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                        style={{ display: 'flex' }}
                    >
                        <Link
                            to='intro'
                            activeClass='active'
                            smooth={true}
                            spy={true}
                            offset={-100}
                            duration={1000}
                            className="listItem"
                        >
                            Home
                        </Link>
                        <Link
                            to='about'
                            activeClass='active'
                            smooth={true}
                            spy={true}
                            offset={0}
                            duration={1000}
                            className="listItem"
                            // onClick={() => setShowMenu(false)}
                        >
                            About
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar; 