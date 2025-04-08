import React from 'react';
import "../styles/Services.css";
import { motion } from "framer-motion";

// ✅ Correct image imports
import awsImg from '../images/aws.jpg';
import redhatImg from '../images/redhat.png';
import tensorflowImg from '../images/tensorflow.png';
import mongodbImg from '../images/mongodb.png';
import oracleImg from '../images/oracle.png';
import linguaskillImg from '../images/linguaskill.png';

const Certification = () => {
  const fade = {
    opacity: 1,
    transition: {
      duration: 1.4
    }
  };

  const certificationData = [
    {
      title: "AWS Cloud Practitioner",
      description: "Entry-level certification by AWS demonstrating knowledge of cloud fundamentals.",
      issuer: "Amazon Web Services",
      image: awsImg,
      verifyLink: "https://www.credly.com/badges/5250a63d-b30f-4ee0-85fe-a150ee068e35/public_url"
    },
    {
      title: "RedHat Enterprise Application Developer",
      description: "Validates skills in building enterprise applications with Red Hat tools.",
      issuer: "Red Hat",
      image: redhatImg,
      verifyLink: "https://www.credly.com/badges/e51de342-43a9-4553-a3d7-8e10c0d218d6/public_url"
    },
    {
      title: "Google TensorFlow",
      description: "Proof of foundational knowledge in TensorFlow for ML model development.",
      issuer: "Google",
      image: tensorflowImg,
      verifyLink: "https://www.credential.net/bc625800-af73-4fd8-a84f-7b03f375ed36#gs.fd0ghh"
    },
    {
      title: "MongoDB Developer Associate",
      description: "Demonstrates ability to build and deploy applications with MongoDB.",
      issuer: "MongoDB",
      image: mongodbImg,
      verifyLink: "https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/9c383856-3227-4614-bbff-cbf00941eb07-anumolu-krishna-teja-3a76a4d4-51ce-49ea-94b8-754d008f7a20-certificate.pdf"
    },
    {
      title: "Oracle Cloud Infrastructure Foundations Associate",
      description: "Shows understanding of core cloud concepts and Oracle Cloud services.",
      issuer: "Oracle",
      image: oracleImg,
      verifyLink: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=3B7B19DBAC2B2AA52FE9B46F59842A3679C46400C5C110171136AD38C6B489BD"
    },
    {
      title: "Linguaskill",
      description: "Linguaskill is a quick and convenient online test to help organizations check the English levels of individuals and groups.",
      issuer: "Cambridge University",
      image: linguaskillImg,
      verifyLink: "https://www.cambridgeenglish.org/exams-and-tests/linguaskill/"
    }
  ];

  return (
    <div className="services" id="certifications">
      <div className="container">
        <motion.div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="heading"
        >
          <p>Proof of Skills</p>
          <p className="heading-text">
            My <span style={{ color: "#6c2bd9" }}>Certifications</span>
          </p>
        </motion.div>

        <motion.div className="services-box" whileInView={{ opacity: 1 }} initial={{ opacity: 0 }}>
          {certificationData.map((cert, index) => (
            <motion.div
              className="cert-card"
              key={index}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img src={cert.image} alt={cert.title} className="cert-image" />
              <div className="cert-overlay">
                <p className="cert-title">{cert.title}</p>
                <p className="cert-desc">{cert.description}</p>
                <p className="cert-issuer">Issued By: {cert.issuer}</p>
                <a href={cert.verifyLink} target="_blank" rel="noopener noreferrer">
                  <button className="verify-button">Verify</button>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Certification;
