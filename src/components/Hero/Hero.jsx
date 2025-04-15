import React from 'react'
import './Hero.css'
import profile_img from '../../assets/anshuman.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {
  return (
    <div id = 'home' className='hero'>
        <img src = {profile_img} alt = "" />
        <h1><span>I'm Anshuman Mehta,</span> frontend developer based in India</h1>
        <p>I'm a frontend developer from India,currently pursuing B.Tech from Newton School of Technology</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offest = {50} href='#contact'>Connect with Me</AnchorLink></div>
            <div className="hero-resume"><a className='anchor-link' offest = {50} href='./Anshuman-resume.pdf' download>My Resume</a></div>
        </div>
    </div>
  )
}

export default Hero