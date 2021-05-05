import React from 'react';
import { Parallax } from 'react-parallax';
import heroImg from '../../assets/images/bg01.jpeg';
import logo from '../../assets/images/logo.png';
import './Hero.scss';

function Hero() {


    return (
        <Parallax bgImage={heroImg} strength={600}>
            <section className="hero">
                <img className="hero__logo" src={logo} alt="cima logo" />
            </section>
        </Parallax>
    )
}

export default Hero
