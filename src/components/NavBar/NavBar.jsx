import React, { useState, useEffect, useRef } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import './NavBar.scss';
import navLogo from '../../assets/images/logo-nav.png';
import bars from '../../assets/icons/bars.svg';

const NavBar = () => {

    const [navBackground, setNavBackground] = useState(false)
    const navRef = useRef()
    navRef.current = navBackground
    useEffect(() => {
      const handleScroll = () => {
        const show = window.scrollY > 50
        if (navRef.current !== show) {
          setNavBackground(show)
        }
      }
      document.addEventListener('scroll', handleScroll)
      return () => {
        document.removeEventListener('scroll', handleScroll)
      }
    }, [])

    const [isActive, setActive] = useState("false");
    const handleToggle = () => {
        setActive(!isActive);
    };

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    // window.onscroll = function () { scrollFunction() };
    // const scrollFunction = () => {
    //     if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    //         document.getElementById("nav").style.backgroundColor = "#000000";
    //     } 
    // }
    

    return (
        <nav className="nav " id="nav" style={{ backgroundColor: navBackground ? 'black' : 'transparent'}}>
            <img className="nav__logo" src={navLogo} alt="cima logo" onClick={scrollToTop} />
            <div className="nav__link--toggle">
                <img src={bars} alt="mobile menu" onClick={handleToggle} />
            </div>
            <ul className={isActive ? "nav__items" : "nav__toggle-show"}>
                <li className="nav__item">
                    <Link
                        className="nav__item--link"
                        // activeClass="active"
                        to="menus"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={600}
                    >
                        MENUS
                    </Link>
                </li>
                <li className="nav__item">
                    <Link
                        className="nav__item--link"
                        // activeClass="active"
                        to="order"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        TAKEOUT
                    </Link>
                </li>
                <li className="nav__item">
                    <Link
                        className="nav__item--link"
                        // activeClass="active"
                        to="reserve"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        RESERVATIONS
                    </Link>
                </li>
                <li className="nav__item">
                    <Link
                        className="nav__item--link"
                        // activeClass="active"
                        to="footer"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        CONTACT
                    </Link>
                </li>
            </ul>
        </nav>
    )

}

export default NavBar