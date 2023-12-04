import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import './contact.css'


function Contact() {
    return (
        <section className='contactContainer' id='contact'>
            <p className='git'>Contact me</p>
            <motion.div
                variants={fadeIn('right', 0.2)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.3 }}
                className='contactContent'>
                {/* text */}
                {/* <p className='git'>Get in touch</p> */}
                <div className='contactTitle'>
                    <br />
                    <p className='lwt'>Let's work <br />together!</p>
                    <p className='description'> Please fill out the form to discuss any work <br></br>opportunities</p>
                </div>
                {/* form */}
            </motion.div>
            <motion.form
                variants={fadeIn('left', 0.2)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.3 }}
                className='contactForm'>
                <input type='text' className='name' placeholder='Your Name (required)' required />
                <input type='email' className='email' placeholder='Your Email (required)' required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" />
                <textarea className='msg' name="message" rows='10' placeholder='Your Message'></textarea>
                <button type='submit' value="Send" className="submitBtn">Submit</button>
                <div className="links">
                    <img src="" alt="" className="link" />
                </div>
            </motion.form>
        </section>
    )
}

export default Contact