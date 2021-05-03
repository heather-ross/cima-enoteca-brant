import React from 'react';
import './Footer.scss';
import instagram from '../../assets/icons/instagram.svg';
import facebook from '../../assets/icons/facebook.svg';
import twitter from '../../assets/icons/twitter.svg';

function Footer() {
    return (
        <footer className="footer">
            <section className="footer__col">
                <h4>SOCIAL</h4>
                <div className="footer__col-icons">
                    <img className="footer__col-icon" src={instagram} alt="Instagram icon" />
                    <img className="footer__col-icon" src={facebook} alt="Facebook icon" />
                    <img className="footer__col-icon" src={twitter} alt="Twitter icon" />
                </div>
            </section>
            <section className="footer__col">
            <h4>CONTACT</h4>
                <div className="footer__col-contact">
                    <p className="footer__col-contact--text">1200 Brant St., Burlington, ON</p>
                    <p className="footer__col-contact--text">(905) 332-2022</p>
                </div>
            </section>
            <section className="footer__col">
            <h4>HOURS</h4>
                <div className="footer__col-hours">
                    <h5 className="footer__col-hours--heading">TUESDAY - SATURDAY</h5>
                    <p className="footer__col-hours--text">4PM - 11PM</p>
                    <h5 className="footer__col-hours--heading">SUNDAY - MONDAY</h5>
                    <p className="footer__col-hours--text">Closed</p>
                </div>

            </section>
            
        </footer>
    )
}

export default Footer