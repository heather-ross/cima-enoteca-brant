import React from 'react';
import logo from '../../assets/images/logo.png';
import './Hero.scss';

const Hero = () => {

    return (
        <section className="hero loop">
            <img className="hero__logo" src={logo} alt="cima logo" />
        </section>
    )
}

export default Hero
