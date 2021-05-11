import React, { useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import './NavBar.scss';
import navLogo from '../../assets/images/logo-nav.png';
import bars from '../../assets/icons/bars.svg';



const NavBar = () => {
    const [isActive, setActive] = useState("false");
    const handleToggle = () => {
        setActive(!isActive);
    };
    
    const scrollToTop = () => {
        scroll.scrollToTop();
    };




    return (
        <nav className="nav">
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