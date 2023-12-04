import React, { useState } from "react";
import bg from "../../assets/bg.png"
import './about.css'
import grey from "../../assets/grey.png"
import aboutPic from "../../assets/aboutPic.png"
import { motion } from 'framer-motion'
import {fadeIn} from '../../variants'
import { Link } from "react-scroll";

const fadeInVariants = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.5 } },
};


const About: React.FC = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div id="about" className="aboutContiner">
            <div className="aboutContent">
                <motion.img
                    variants={fadeIn('right', 0.2)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }}
                    src={aboutPic}
                    alt="Profile"
                    className='aboutPic'>
                </motion.img>
                <h2 className="helloAbout">About Me</h2>
                <br />
                <motion.span
                    variants={fadeIn('left', 0.2)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: false, amount: 1 }}
                    className="aboutDetail"
                    >
                    Hello, I'm a Software Developer from Hanoi. I am studying for bachelor degree of Information Technology in University of Engineering and Technology (UET).
                    <br /><br />
                    <p>Love exploring new things, creating cool projects. My way of learning is via approaching actual experience, I will learn everything I need to be able to do it. I am also an enthusiast of sports, photography and drawings.</p>
                    <Link><button className="btn">My resume</button><button className="btn">Others</button></Link>
                </motion.span>
            </div>
        </div>
    )
}

export default About
