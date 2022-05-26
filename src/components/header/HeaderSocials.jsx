import React from 'react'
import { GrLinkedin } from "react-icons/gr"
import { BsGithub } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import { BsFacebook } from "react-icons/bs"

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/aung-khant-min-258b6b180/" target="_blank"><GrLinkedin /></a>
        <a href="https://github.com/min2028" target="_blank"> <BsGithub /></a>
        <a href="https://www.instagram.com/aungkhantmin2028/" target="_blank"><BsInstagram /></a>
        <a href="https://www.facebook.com/aungkmin02/" target="_blank"><BsFacebook /></a>
    </div>
  )
}

export default HeaderSocials