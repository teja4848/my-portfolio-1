import {
	FaHtml5,
	FaCss3Alt,
	FaBootstrap,
	FaReact,
	FaNodeJs,
	FaPython,
	FaJava,
	FaAws,
	FaGitAlt,
	FaDocker,
	FaMicrochip,
	FaGithub,
	FaDatabase
  } from "react-icons/fa";
  import { DiJavascript1, DiMongodb,DiDjango } from "react-icons/di";
  import { RiVuejsLine } from "react-icons/ri";
  import {
	SiMysql,
	SiPostgresql,
	SiJupyter,
	SiTensorflow,
	SiPytorch,
	SiTableau,
	SiPowerbi,
	SiFlutter,
	SiKubernetes,
	SiIntellijidea,
	SiVisualstudiocode,
	SiRstudio,
	SiExpress,
	SiSpringboot,
	SiPostman,
	SiGoogleanalytics
  } from "react-icons/si";
  import { TbBrandCpp } from "react-icons/tb";
  
  export const SkillsData = [
	// Frontend
	{ name: "HTML", icon: <FaHtml5 /> },
	{ name: "CSS", icon: <FaCss3Alt /> },
	{ name: "Bootstrap", icon: <FaBootstrap /> },
	{ name: "JavaScript", icon: <DiJavascript1 /> },
	{ name: "React", icon: <FaReact /> },
	{ name: "Vue.js", icon: <RiVuejsLine /> },
  
	// Backend
	{ name: "NodeJS", icon: <FaNodeJs /> },
	{ name: "ExpressJS", icon: <SiExpress /> },
	{ name: "Django", icon: <DiDjango /> },
	{ name: "Spring Boot", icon: <SiSpringboot /> },
  
	// Databases
	{ name: "MongoDB", icon: <DiMongodb /> },
	{ name: "MySQL", icon: <SiMysql /> },
	{ name: "PostgreSQL", icon: <SiPostgresql /> },
  
	// AI/ML
	{ name: "TensorFlow", icon: <SiTensorflow /> },
	{ name: "PyTorch", icon: <SiPytorch /> },
	{ name: "Jupyter", icon: <SiJupyter /> },
  
	// Data Visualization
	{ name: "Power BI", icon: <SiPowerbi /> },
	{ name: "Tableau", icon: <SiTableau /> },
  
	// Tools & Platforms
	{ name: "GitHub", icon: <FaGithub /> },
	{ name: "Postman", icon: <SiPostman /> },
	{ name: "Big Data", icon: <FaDatabase /> },
	{ name: "Visualization", icon: <SiGoogleanalytics /> },
  
	// Software
	{ name: "VS Code", icon: <SiVisualstudiocode /> },
	{ name: "IntelliJ", icon: <SiIntellijidea /> },
	{ name: "R Studio", icon: <SiRstudio /> },
  
	// Others
	{ name: "Docker", icon: <FaDocker /> },
	{ name: "Kubernetes", icon: <SiKubernetes /> },
	{ name: "AWS", icon: <FaAws /> },
	{ name: "Git", icon: <FaGitAlt /> },
	{ name: "Arduino Uno", icon: <FaMicrochip /> },
	{ name: "Excel", icon: <FaDatabase /> },
    { name: "WordPress", icon: <FaReact /> },
  ];
  