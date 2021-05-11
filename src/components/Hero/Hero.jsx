import React, {useState, useEffect} from 'react';
// import { Parallax } from 'react-parallax';
import heroImg from '../../assets/images/bg02.jpeg';
import logo from '../../assets/images/logo.png';
import './Hero.scss';

function Hero() {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        function handleScroll() {
            setOffset(window.pageYOffset);
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [offset]);

    return (
        // <Parallax bgImage={heroImg} strength={600}>
        <section className="hero">
            <img className="hero__parallax"
            src={heroImg} alt="hero bg"
                style={{
                    // filter: `blur(4px)`,
                    transform: `translateY(${offset * 0.5}px)`
                }}
            />
            <img className="hero__logo" src={logo} alt="cima logo" />
            <section className="overflow" />
        </section>
        // </Parallax>
    )
}

export default Hero