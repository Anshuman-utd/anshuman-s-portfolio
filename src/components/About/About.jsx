import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/anshuman.png'

const About = () => {
  return (
    <div id = 'about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src = {theme_pattern} alt = "" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src = {profile_img} alt = ""/>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Hi, I'm Anshuman Mehta, a passionate Frontend Developer and a first-year student at Newton School of Technology. I love building clean, responsive, and user-friendly web interfaces using modern technologies like HTML, CSS, JavaScript, React, and Tailwind CSS. I'm constantly learning and pushing my skills to create impactful digital experiences.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style = {{width: "70%"}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style = {{width: "40%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style = {{width: "60%"}}/></div>
                    <div className="about-skill"><p>Python</p><hr style = {{width: "70%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>100+</h1>
                <p>LEETCODE QUESTIONS SOLVED</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>900+</h1>
                <p>CODEFORCES RATING</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>5+</h1>
                <p>PROJECTS</p>
            </div>
        </div>
    </div>
  )
}

export default About