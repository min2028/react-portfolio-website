import React from 'react'
import "./nav.css"
import { BiHome } from "react-icons/bi"
import { FaUserCircle } from "react-icons/fa"
import { BiBook } from "react-icons/bi"
import { MdWork } from "react-icons/md"
import { BiMessageRoundedEdit } from "react-icons/bi"
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><BiHome /></a>
      <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><FaUserCircle /></a>
      <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}><BiBook /></a>
      <a href="#portfolio" onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "active" : ""}><MdWork /></a>
      <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><BiMessageRoundedEdit /></a>
    </nav>
  )
}

export default Nav