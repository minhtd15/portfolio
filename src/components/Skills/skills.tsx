import React, { useEffect, useState } from 'react';
import './skills.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeInVariants } from '../../variants';

interface CircleProgressProps {
    progress: number;
    skillName: string;
}

const Skills: React.FC = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [ref, inView] = useInView({
        triggerOnce: true, // This makes sure the animation triggers only once when the element becomes visible
    });

    useEffect(() => {
        if (inView) {
            let circularProgress = document.querySelector(".circular-progress");
            let progressValue = document.querySelector(".progress-value");

            let progressStartValue = 0,
                progressEndValue = 90,
                speed = 20;
            let progress = setInterval(() => {
                progressStartValue++;

                progressValue.textContent = `${progressStartValue}%`;
                circularProgress.style.background = `conic-gradient(#484848 ${progressStartValue * 3.6}deg, #ededed 0deg)`;

                if (progressStartValue === progressEndValue) {
                    clearInterval(progress);
                }
            }, speed);

            // Clean up the interval when the component unmounts or when the element goes out of view
            return () => clearInterval(progress);
        }
    }, [inView]);


    return (
        <motion.section
            variants={fadeInVariants}
            initial="hidden"
            animate={showMenu ? "show" : "hidden"}
            exit="exit"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }} className='mh-skills' id='mh-skills'>
            <div className='eachSkill'>
                <h3>Professional Skill</h3>
                <div className='each-skills'>
                    <div className='nome'>Communication</div>
                    <div className='percentage-num'>85%</div>
                </div>
            </div>
            <div className='eachSkill' ref={ref}>
                <h3>Technical Skills</h3>
                <div>
                    <div className='circular-progress'>
                        <span className='progress-value'>90%</span>
                    </div>
                    <span className='text'>Golang</span>

                    <div className='circular-progress'>
                        <span className='progress-value'>80%</span>
                    </div>
                    <span className='text'>Java</span>
                </div>
            </div>
        </motion.section>
    );
};

export default Skills;
