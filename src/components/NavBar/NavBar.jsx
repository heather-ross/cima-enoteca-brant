import React, { useState, useEffect, useRef } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import './NavBar.scss';
import navLogo from '../../assets/images/logo-nav.png';

const NavBar = ({navLinks}) => {
    
    const [navBackground, setNavBackground] = useState(false)
    const navRef = useRef()
    navRef.current = navBackground
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 350
            if (navRef.current !== show) {
                setNavBackground(show)
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const [isActive, setActive] = useState('false');
    const handleToggle = () => {setActive(!isActive)};
    const handleClose = () => setActive('false');  

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <nav className="nav " id="nav" style={{ backgroundColor: navBackground ? 'black' : 'transparent' }}>
            <img className="nav__logo" src={navLogo} alt="cima logo" onClick={scrollToTop} />
            <div className="nav__toggle" onClick={handleToggle}>
                <span className="nav__bars"></span>
                <span className="nav__bars"></span>
                <span className="nav__bars"></span>
            </div>
            <ul className={isActive ? "nav__items" : "nav__toggle-show"}>
            {navLinks.map((link) => 
                <li className="nav__item">
                    <Link
                        className="nav__item--link"
                        to={link.path}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={600}
                        onClick={handleClose}
                    >
                        {link.text}
                    </Link>
                </li>
                )}
            </ul>
        </nav>
    )
}

export default NavBar