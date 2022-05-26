import React from 'react'
import "./footer.css"
import { RiLinkedinBoxFill } from "react-icons/ri"
import { SiGithub } from "react-icons/si"
import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

export const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'> Aung Khant Min </a>

      <ul className='permalinks'>
        <li href='#'> Home <a/> </li>
        <li href='#about'> About <a/> </li>
        <li href='#experience'> Experience <a/> </li>
        <li href='#portfolio'> Portfolio <a/> </li>
        <li href='#education'> Education <a/> </li>
        <li href='#contact'> Contact <a/> </li>
      </ul>
      <div className="footer__socials">
        <a href='https://www.linkedin.com/in/aung-khant-min-258b6b180/' target="_blank"> <RiLinkedinBoxFill/></a>
        <a href='https://github.com/min2028' target="_blank"> <SiGithub/> </a>
        <a href='https://www.facebook.com/aungkmin02/' target="_blank"> <FaFacebook/> </a>
        <a href='https://www.instagram.com/aungkhantmin2028/' target="_blank"> <FaInstagram/> </a>
      </div>
      <div className="footer__copyright">
        <small> &copy; Aung Khant Min. All rights reserved. </small>
      </div>
    </footer>
  )
}

export default Footer