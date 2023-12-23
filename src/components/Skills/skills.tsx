import React, { useEffect, useState } from 'react';
import './skills.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeInVariants } from '../../variants';
import { cleanup } from '@testing-library/react';

interface CircleProgressProps {
    progress: number;
    skillName: string;
}

const animateCircularProgress = (
    circularProgressSelector: string,
    progressValueSelector: string,
    progressEndValue: number
) => {
    const circularProgress = document.querySelector(circularProgressSelector);
    console.log('Selector:', circularProgressSelector);
    console.log('Circular Progress Element:', circularProgress);

    const progressValue = document.querySelector(progressValueSelector);
    console.log('Progress Value Element:', progressValue);
    let progressStartValue = 0;
    const speed = 20;

    if (!circularProgress || !progressValue) {
        // Handle the case where elements are not found
        console.error("Circular progress elements not found");
        return () => { }; // Return an empty cleanup function
    }

    const progress = setInterval(() => {
        progressStartValue++;
        console.log(progressValueSelector, circularProgressSelector);
        progressValue.textContent = `${progressStartValue}%`;
        circularProgress.style.background = `conic-gradient(black ${progressStartValue * 3.6}deg, rgba(50, 50, 50, .1) 0deg)`;

        if (progressStartValue === progressEndValue) {
            clearInterval(progress);
        }
    }, speed);

    // Return the cleanup function
    return () => clearInterval(progress);
};

const Skills: React.FC = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [ref, inView] = useInView({
        triggerOnce: true, // This makes sure the animation triggers only once when the element becomes visible
    });

    const skillsData = [
        {
            selector: ".circular-progress-golang",
            valueSelector: ".progress-value-golang",
            endValue: 90,
            text: "Golang",
        },
        {
            selector: ".circular-progress-java",
            valueSelector: ".progress-value-java",
            endValue: 85,
            text: "Java",
        },
        {
            selector: ".circular-progress-html",
            valueSelector: ".progress-value-html",
            endValue: 80,
            text: "HTML",
        },
        {
            selector: ".circular-progress-css",
            valueSelector: ".progress-value-css",
            endValue: 70,
            text: "CSS",
        },
        {
            selector: ".circular-progress-js",
            valueSelector: ".progress-value-js",
            endValue: 60,
            text: "Javascript",
        },
        {
            selector: ".circular-progress-c",
            valueSelector: ".progress-value-c",
            endValue: 80,
            text: "C++",
        },
    ];
    const softSkillsData = [
        {
            selector: '.communication',
            variants: fadeInVariants,
            initial: 'initial',
            animate: 'animate',
        },
        {
            selector: '.teamwork',
            variants: fadeInVariants,
            initial: 'initial',
            animate: 'animate',
        },
    ]
    useEffect(() => {
        if (inView) {
            const skillsCleanupFunctions = skillsData.map((data) => {
                return animateCircularProgress(data.selector, data.valueSelector, data.endValue);
            });
            console.log("Animation started");

            const softSkillsAnimations = softSkillsData.map((data) => {
                const element = document.querySelector(data.selector);
                return element && (
                    <motion.div
                        key={data.selector} // Add a unique key
                        className={data.selector.substring(1)} // Extract the class name
                        initial={data.initial}
                        animate={data.animate}
                        variants={data.variants}
                    >
                        {element.textContent}
                    </motion.div>
                );
            });
            // Clean up the intervals when the component unmounts or when the element goes out of view
            return () => {
                console.log("Cleaning up animations");
                skillsCleanupFunctions.forEach((cleanup) => cleanup());

            };
        }
    }, [inView, skillsData, softSkillsData]);




    return (
        <section
            className='mh-skills'
            id='mh-skills'
            ref={ref}
        >

            <div className='eachSkill'>
                <h3 className='title'>Technical Skills</h3>
                {skillsData.map((data, index) => (
                    <div className="cir-pro" key={index}>
                        {/* Circular progress element */}
                        <div className={`circular-progress ${data.selector.substring(1)}`}>
                            <span className={`progress-value ${data.valueSelector.substring(1)}`}>
                                {data.endValue}%
                            </span>
                        </div>
                        <span className='text'>{data.text}</span>
                    </div>
                ))}
            </div>
            <div className='soft-skills'>
                <ul>
                    <li className='communication'>Communication</li>
                    <li className='teamwork'>Teamwork</li>
                    <li className='brainstorm'>Brainstorming</li>
                    <li className='punctual'>Punctuable</li>
                </ul>
            </div>
        </section>
    );
};

export default Skills;
