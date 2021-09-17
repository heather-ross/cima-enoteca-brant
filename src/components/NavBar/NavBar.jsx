import React, { useState, useEffect, useRef } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import './NavBar.scss';

const NavBar = ({ navLinks }) => {

    const [navBackground, setNavBackground] = useState(false)
    const navRef = useRef()
    navRef.current = navBackground
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 150
            if (navRef.current !== show) {
                setNavBackground(show)
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const [active, setActive] = useState('false');
    const handleToggle = () => { setActive(!active) };
    const handleClose = () => setActive('false');

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <nav className="nav" id="nav" style={{ backgroundColor: navBackground ? 'black' : 'transparent' }} >
            <h1 className="nav__logo" onClick={scrollToTop}>CIMA</h1>
            <div className="nav__toggle" onClick={handleToggle}>
                <span className={active ? "nav__line" : "nav__line open"}></span>
                <span className={active ? "nav__line" : "nav__line open"}></span>
                <span className={active ? "nav__line" : "nav__line open"}></span>
            </div>
            <ul className={active ? "nav__items" : "nav__mobile-menu"} >
                {navLinks.map((link, i) =>
                    <li className="nav__item" key={i}>
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