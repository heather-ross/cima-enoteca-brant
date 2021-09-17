import React from 'react';
// import { Link } from "react-router-dom";
import './Footer.scss';
import instagram from '../../assets/icons/instagram.svg';
import facebook from '../../assets/icons/facebook.svg';
// import admin from '../../assets/icons/admin.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__cols">
                <section className="footer__col">
                    <h4 className="footer__col-title">SOCIAL</h4>
                    <div className="footer__col-icons">
                        <a href="https://www.instagram.com/cimaonbrant/?hl=en" rel="noreferrer" target="_blank">
                            <img className="footer__col-icon" src={instagram} alt="Instagram icon" />
                        </a>
                        <a href="https://www.facebook.com/Cimaonbrant-106879454203031/" rel="noreferrer" target="_blank">
                            <img className="footer__col-icon" src={facebook} alt="Facebook icon" />
                        </a>
                    </div>
                </section>
                <section className="footer__col">
                    <h4 className="footer__col-title">CONTACT</h4>
                    <div className="footer__col-contact">
                        <p className="footer__col-text">1200 Brant St., Burlington, ON</p>
                        <a className="footer__col-text" href="tel:905-332-2022"><p className="footer__col-text" >(905) 332-2022</p></a>
                    </div>
                </section>
                <section className="footer__col">
                    <h4 className="footer__col-title">HOURS</h4>
                    <div className="footer__col-hours">
                        <h5 className="footer__col-heading">WEDNESDAY - SATURDAY</h5>
                        <p className="footer__col-text">5PM - 10PM</p>
                        <h5 className="footer__col-heading">SUNDAY - TUESDAY</h5>
                        <p className="footer__col-text">Closed</p>
                    </div>

                </section>
            </div>
            <div className="footer__bottom-wrap">
            <p className="footer__copy">© <span>{new Date().getFullYear()}</span> CIMA ENOTECA / Design <a href="https://hross.dev" rel="noreferrer" target="_blank">hrDEV</a></p>
            {/* <Link to='/sign-in' ><img className="footer__admin-icon" src={admin} alt="admin icon" /></Link> */}
            </div>
        </footer>
    )
}

export default Footer
