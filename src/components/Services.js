import React from 'react';
import "../styles/Services.css";
import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";
import klImg from '../images/kl.png'; // Make sure the image path is correct
import narImg from '../images/narayana.png';
import kkrImg from '../images/kkr.jpg';

const Education = () => {
  const fade = {
    opacity: 1,
    transition: {
      duration: 1.4
    }
  };

  const educationData = [
    {
      title: "Bachelor Of Technology | CSE",
      institution: "Koneru Lakshmaiah Education Foundation, Guntur, Andhra Pradesh",
      duration: "2021–2025 | Pursuing",
      image: klImg
    },
    {
      title: "Intermediate Education | MPC",
      institution: "Narayana Junior College, Vijayawada, Andhra Pradesh",
      duration: "2019–2021 | Completed",
      image: narImg
    },
    {
      title: "Secondary Education | CBSE",
      institution: "Dr. KKR Gowtham School, Vijayawada, Andhra Pradesh",
      duration: "2018–2019 | Completed",
      image: kkrImg
    }
  ];

  return (
    <div className="services" id='education'>
      <div className="container">
        <motion.div whileInView={fade} viewport={{ once: true }} initial={{ opacity: 0 }} className="heading">
          <p>Learning Journey</p>
          <p className='heading-text'>My <span style={{ color: "#6c2bd9" }}>Education</span></p>
        </motion.div>

        <motion.div className="services-box" whileInView={fade} initial={{ opacity: 0 }}>
          {educationData.map((edu, index) => (
            <motion.div
              className="services-card"
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              style={{
                textAlign: "center",
                padding: "20px"
              }}
            >
              <img
                src={edu.image}
                alt={edu.title}
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginBottom: "15px",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                  border: "2px solid #6c2bd9"
                }}
              />
              {edu.icon}
              <p className='services-title'>{edu.title}</p>
              <p className='services-desc'>{edu.institution}</p>
              <p className='services-desc' style={{ color: "green", fontWeight: "bold" }}>{edu.duration}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
