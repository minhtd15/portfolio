import React from "react";
import './intro.css'
import { Link } from "react-scroll";
import { TypeAnimation } from 'react-type-animation'
import { FaLinkedin, FaFacebook, FaYoutube } from 'react-icons/fa'
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion'
import hireMe from "../../assets/briefcase-regular-24.png"
import bg from '../../assets/bg.png'

const fadeIn = (direction, duration) => ({
    hidden: { opacity: 0, y: direction === 'up' ? 20 : direction === 'down' ? -20 : 0 },
    show: { opacity: 1, y: 0, transition: { duration: duration } },
});

const Intro: React.FC = () => {
    // const isSmallScreen = useMediaQuery({ maxWidth: 800 });
    return (
        <div id="intro" className="introContainer">
            <motion.div
                variants={fadeIn('up', 1.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
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
                <p className="introPara">I am a fresher at Web Developer with experience <br />of coding BackEnd and FrontEnd</p>
                <Link><button className="btn">My contact</button></Link>
            </motion.div>
            <motion.img
                variants={fadeIn('down', 1.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
                src={bg}
                alt="Profile"
                className='bg'
            ></motion.img>
        </div>
    )
}

export default Intro