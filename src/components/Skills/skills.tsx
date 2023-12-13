import React, { useEffect } from 'react';
import './skills.css';


const Skills: React.FC = () => {
    return (
        <section className='mh-skills' id='mh-skills'>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12 col-md-6'>
                        <div className='mh-skills-inner'>
                            <div className='mh-professional-skill'>
                                <h3>Professional Skill</h3>
                                <div className='each-skills'>
                                    <div className='candidate'>
                                        <div className='parcial'>
                                            <div className='info'>
                                                <div className='nome'>Communication</div>
                                                <div className='percentage-num'>85%</div>
                                            </div>
                                            <div className='progess-bar'>
                                                <div className='percentagem' style={{ width: `38%` }}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='candidate'>
                                        <div className='parcial'>
                                            <div className='info'>
                                                <div className='nome'>Teamwork</div>
                                                <div className='percentage-num'>30%</div>
                                            </div>
                                            <div className='progess-bar'>
                                                <div className='percentagem' style={{ width: `30%` }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-6'>
                        <div className='mh-professional-skills'>
                            <h3>Technical Skills</h3>
                            <ul>
                                <li>
                                    <div className='mh-progress mh-progress-circle' data-progress="95"></div>
                                    <div className='pr-skill-name'>Golang</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
