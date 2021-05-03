import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import './NavBar.scss';
import navLogo from '../../assets/images/logo-nav.png';


class NavBar extends React.Component {

    
    scrollToTop = () => {
        scroll.scrollToTop();
    };
    render() {
    return (
        <nav className="nav">
            <img className="nav__logo" src={navLogo} alt="cima logo" onClick={this.scrollToTop} />
            <ul className="nav__items">
                <li className="nav__item">
                    <Link
                        className="nav__item--link"
                        // activeClass="active"
                        to="menus"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={200}
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
}

export default NavBar
