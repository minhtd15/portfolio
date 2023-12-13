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
    const handleDownloadClick = () => {
        // Create a Blob with the PDF data or provide the PDF file URL
        const pdfBlob = new Blob(["/Users/minhtong/Desktop/DevelopingWeb/portfolio/src/assets/aboutPic.png"], { type: 'application/pdf' });

        // Create a temporary link element
        const link = document.createElement('a');

        // Set the download attribute with the desired file name
        link.download = 'tongducminhCV.pdf';

        // Create an object URL for the Blob and set it as the href attribute
        link.href = window.URL.createObjectURL(pdfBlob);

        // Append the link to the document
        document.body.appendChild(link);

        // Trigger a click event on the link
        link.click();

        // Remove the link from the document
        document.body.removeChild(link);
    };
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
                <Link>
                    <button className="btn" onClick={handleDownloadClick}>Download CV</button>
                </Link>
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