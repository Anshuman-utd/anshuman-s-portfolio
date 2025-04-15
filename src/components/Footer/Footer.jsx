import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src= {footer_logo} alt=''/>
                <p>I'm a frontend developer from India,currently pursuing B.Tech from Newton School of Technology</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src = {user_icon} alt=''/>
                    <input type='email' placeholder='Enter your email'/>
                </div>
                <div className="footer-subscribe">
                    Subscribe
                </div>
            </div>
        </div>
        <hr/>
        <div className='footer-bottom'>
            <p className='footer-bootom-left'>© 2025 Anshuman Mehta. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p><a href='https://github.com/Anshuman-utd'>Github</a></p>
                <p><a href='https://www.linkedin.com/in/anshuman-mehta-291a3b324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>LinkedIn</a></p>
                <p><a href='https://codeforces.com/profile/Anshu-MAN'>CodeFores</a></p>
                <p><a href='https://leetcode.com/u/Anshu-MAN/'>LeetCode</a></p>
            </div>
        </div>
    </div>
  )
}

export default Footer