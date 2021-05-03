import React from 'react'
import logo from '../../assets/images/logo.png';
import './Hero.scss';

function Hero() {


    return (
        <section className="hero">
            
            <img className="hero__logo" src={logo} alt="cima logo" />
            
        </section>
    )
}

export default Hero
