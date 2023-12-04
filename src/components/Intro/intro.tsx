import React, { useState } from "react";
import './intro.css'
import { Link } from "react-scroll";
import { TypeAnimation } from 'react-type-animation'
import { FaLinkedin, FaFacebook, FaYoutube } from 'react-icons/fa'
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion'
import hireMe from "../../assets/briefcase-regular-24.png"
import bg from '../../assets/bg-removebg.png'

const fadeIn = (direction, duration) => ({
    hidden: { opacity: 0, y: direction === 'up' ? 20 : direction === 'down' ? -20 : 0 },
    show: { opacity: 1, y: 0, transition: { duration: duration } },
});

const fadeInVariants = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.5 } },
};

const Intro: React.FC = () => {
    const [showMenu, setShowMenu] = useState(false);
    // const isSmallScreen = useMediaQuery({ maxWidth: 800 });
    return (
        <div id="intro" className="introContainer">
            <motion.div
                className="introContent"
            >
                <span className="hello">Hello, <br /></span>
                <span className="introText">I'm <span className="introName">Tong Duc Minh</span><br /></span>
                <TypeAnimation sequence={[
                    'Backend Developer', 2000,
                    'Frontend Developer', 2000,
                    'Full-stack Developer', 2000,
                ]}
                    speed={40}
                    className="text-accent"
                    wrapper="span"
                    repeat={Infinity}></TypeAnimation>
                {/* <p className="introPara">I am a fresher at Web Developer with experience of <br></br>coding BackEnd and FrontEnd</p> */}
                <br />
                <Link><button className="btn">Download CV</button></Link>
                <motion.img
                    // variants={fadeIn('down', 1.2)}
                    // initial="hidden"
                    // animate="show"
                    // exit="hidden"
                    // whileInView={'show'}
                    // viewport={{ once: false, amount: 0.7 }}
                    variants={fadeInVariants}
                    initial="hidden"
                    animate={showMenu ? "show" : "hidden"}
                    exit="exit"
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7 }}
                    src={bg}
                    alt="Profile"
                    className='bg'
                ></motion.img>
            </motion.div>

        </div>
    )
}

export default Intro