import React from 'react';
import { Link } from "react-router-dom";
import './AdminHeader.scss';
import homeIcon from '../../assets/icons/home.svg';

const AdminHeader = () => {
    
    return (
        <header className="header">
            <Link to='/' className="header__home-link" >
                <img className="header__home-icon" src={homeIcon} alt="home icon" />
            </Link>
            <h1 className="header__title">CIMA Admin</h1>
        </header>
    )
}

export default AdminHeader
