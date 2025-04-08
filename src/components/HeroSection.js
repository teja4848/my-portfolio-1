import React, { useState } from "react";
import "../styles/HeroSection.css";
import { FaBars, FaTimes, FaLinkedin, FaCertificate } from "react-icons/fa";
import { BiDownload, BiEnvelope } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { AiOutlineArrowUp } from "react-icons/ai";
import { animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";
import CV from "../data/CV.pdf";
import ProfileImg from "../images/profile_me.jpg";
import { AiOutlineArrowDown } from "react-icons/ai";
import { Link } from "react-scroll"; // Importing react-scroll for smooth scroll


const HeroSection = ({ nav, handleNav }) => {
  const scrollToTop = () => {
    scroll.scrollToTop({ smooth: "linear" });
  };

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisible);

  const heroVariants = {
    hidden: {
      opacity: 0,
      y: "-50%",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.4,
      },
    },
  };

  const contactVariants = {
    hidden: {
      opacity: 0,
      x: "-50%",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.4,
      },
    },
  };

  const menuVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      scale: [1, 1.2, 1.5, 1.2, 1],
      rotate: [0, 0, 360, 360, 360],
      borderRadius: ["50%", "50%", "50%", "50%", "50%"],
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div className="hero-section" name="home" id="home">
      <div className="hero-overlay"></div>
      <motion.div
        variants={menuVariants}
        initial="hidden"
        whileInView="visible"
        onClick={handleNav}
        className="menu-icon">
        {nav ? <FaTimes /> : <FaBars />}
      </motion.div>
      <motion.div
        variants={heroVariants}
        initial="hidden"
        whileInView="visible"
        className={visible ? "to-top-icon show" : "to-top-icon hide"}
        onClick={scrollToTop}>
        <AiOutlineArrowUp />
      </motion.div>
      <motion.div
        variants={heroVariants}
        initial="hidden"
        whileInView="visible"
        className="hero-content">

        {/* Profile Image */}
        <div className="profile-img" style={{ 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            marginBottom: "20px" 
        }}>
			
          <img src={ProfileImg} alt='Main' className='profile-pic-small'
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "3px solid white",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
            }}
          />
		  
        </div>

        {/* Name */}
        <p className="hero-intro" style={{ textAlign: "center", fontSize: "2rem", fontWeight: "bold" }}>
          <span>Anumolu</span> <span>Krishna Teja</span>
        </p>
		<p className='hero-desc'>
		<span className='hero-desc-sub'>
			<a href="https://github.com/teja4848" target="_blank" rel="noopener noreferrer">
			<img 
				src="https://readme-typing-svg.herokuapp.com/?lines=Computer%20Science%20Student;Data%20Science;Machine%20Learning;Full%20Stack%20Developer&center=true&width=380&height=45" 
				alt="Typing animation showing skills like Computer Science Student, Data Science, Machine Learning, Full Stack Developer" 
			/>
			</a>
		</span>
		</p>
        {/* Social Links */}
        <ul className="social-links" style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <li onClick={handleNav}>
            <a
              href="https://www.linkedin.com/in/krishna-teja-anumolu"
              target="_blank"
              className="nav-link"
              style={{ fontSize: "1.5rem", color: "#0077b5" }}>
              <FaLinkedin />
            </a>
          </li>
          <li onClick={handleNav}>
            <a
              href="https://www.credly.com/users/krishna-teja-anumolu"
              target="_blank"
              className="nav-link"
              style={{ fontSize: "1.5rem", color: "#f09f00" }}>
              <FaCertificate />
            </a>
          </li>
          <li onClick={handleNav}>
            <a
              href="https://github.com/teja4848"
              target="_blank"
              className="nav-link"
              style={{ fontSize: "1.5rem", color: "white" }}>
              <BsGithub />
            </a>
          </li>
          <li onClick={handleNav}>
            <a
              href="mailto:2100032480.cseh1@gmail.com"
              target="_blank"
              className="nav-link"
              style={{ fontSize: "1.5rem", color: "#d14836" }}
              rel="noreferrer">
              <BiEnvelope />
            </a>
          </li>
		  <li style={{ display: "flex", fontSize: "1.5rem", color: "white", marginLeft: "-12px",marginTop: "10px", paddingLeft: "0",}}>
    <span>&#8226;</span> </li>{/* This is the dot */}
        </ul>
      </motion.div>
      <motion.span
        variants={contactVariants}
        initial="hidden"
        whileInView="visible">
        <a
          href={CV}
          download=" CV"
          className="hero-contact"
          style={{
            display: "inline-block",
            marginTop: "20px",
            backgroundColor: "#0a74da",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "5px",
            textDecoration: "none",
            fontSize: "1.2rem",
            textAlign: "center",
          }}>
          Download CV <BiDownload className="cv-icon" />
        </a>
		</motion.span>
		<Link
        to='about' // Scroll to section with ID 'next-section'
        smooth={true}
        duration={500}
        offset={-50}
        className="arrow-link"
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "10px",
          cursor: "pointer",
        }}
      >
        <AiOutlineArrowDown
          style={{
            fontSize: "2rem",
            marginLeft: "10px",
            color: "#fff",
          }}
        />
      </Link>
    </div>
  );
};

export default HeroSection;
