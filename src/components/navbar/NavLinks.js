import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaCertificate} from "react-icons/fa"
import {BiEnvelope} from "react-icons/bi"
import {BsGithub} from "react-icons/bs"

const NavLinks = ({handleNav}) => {
  return (
    <ul className='nav-links'>
        <li onClick={handleNav} ><Link  to="//www.linkedin.com/in/krishna-teja-anumolu" target='_blank' className='nav-link'><FaLinkedin /></Link></li>
        <li onClick={handleNav} ><Link  to="//www.credly.com/users/krishna-teja-anumolu" target='_blank' className='nav-link'><FaCertificate/></Link></li>
        <li onClick={handleNav} ><Link  to="//github.com/teja4848" target='_blank' className='nav-link'><BsGithub /></Link></li>
        <li onClick={handleNav} ><a  href="mailto:2100032480.cseh1@gmail.com" target='_blank' className='nav-link' rel="noreferrer"><BiEnvelope /></a></li>
  </ul>
  )
};

export default NavLinks;
