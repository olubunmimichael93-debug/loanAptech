import './about.css'
import React from 'react'


function About(){
    return(
        <div className="about-page">
            <div className="about-container">
                <h1>About Us </h1>
                <p>We are a trusted financial platform decided to making loan access simple, fast adn transparent. Our mission is to empower individuals and small businesses with flexible financing options without the hassle of traditional banking beareucracy </p>
                <div className="features">
                    <div className="feature">
                        <h3>Fast Approval</h3>
                        <p>Get decisions in minutes</p>
                    </div>
                    <div className="feature">
                        <h3>No hidden Fees</h3>
                        <p>100% fast to apply - No hidden fees</p>
                    </div>
                    <div className="feature">
                        <h3>Secure and Private</h3>
                        <p>Your data is secured and never shared</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About