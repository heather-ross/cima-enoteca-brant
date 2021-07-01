import React from 'react';
import logo from '../../assets/images/logo.png';
import './Hero.scss';

const Hero = () => {

    return (
        <section>
            <div className="hero loop"></div>
            <img className="hero__logo" src={logo} alt="cima logo" />
        </section>
    )
}

export default Hero
