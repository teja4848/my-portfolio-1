import React from 'react';
import "../styles/About.css"
import { motion } from "framer-motion";
import ProfileImg from '../images/profile_me.jpg'

const About = () => {  
  
  const horizontal ={
    x:0, 
    opacity: 1, 
    transition:{type: 'spring', duration: 2,bounce: 0.3}
  }

  return (
      <>
          <div  className="about" id='about'>
              <div className="container">
                  <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} viewport={{ once: true }} className="heading">
                    <p className="heading-sub-text">Let me introduce myself</p>
                    <p className='heading-text'>I'm Anumolu Krishna Teja</p>
                  </motion.div>
                  <div className="split-about">
                    <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} className="about-content">
                    <p>🎓 I’m a final-year Computer Science Engineering student specializing in Data Science, with hands-on experience in building ML-driven platforms, cloud-based systems, and scalable web applications. I bring strong time management ⏰, collaborative skills 🤝, and a disciplined approach to delivering projects on time. Known for my problem-solving mindset, I actively participate in research, development, and tech communities.</p>
                    <br />
                    <p>📅 <strong>Birthday:</strong> 16 th October 2004</p>
                    <p>📞 <strong>Phone:</strong> +91 833-2050-827</p>
                    <p>📧 <strong>Email:</strong> 2100032480.cseh1@gmail.com</p>
                    <p>📍 <strong>Location:</strong> Vijayawada, Andhra Pradesh – 521137</p>
                    </motion.div>
                    <motion.div initial={{x: '50', opacity: 0}} whileInView={horizontal}  className='about-img'>
                        <img src={ProfileImg} alt="Profile" />
                    </motion.div>
                  </div>
              </div>
          </div>
      </>
  )
};

export default About;
