import React from 'react';
import { useHistory } from "react-router-dom";
import AdminHeader from '../../components/AdminHeader/AdminHeader';
import AddMenu from '../../components/AddMenu/AddMenu';
import AddUser from '../../components/AddUser/AddUser';
import { withRouter } from 'react-router-dom';
import fire from '../../firebase';
import './Dashboard.scss';

const Dashboard = ({ user, logout, ...rest }) => {
    const history = useHistory()
    const logOut = (e) => {
        e.preventDefault();
        fire.auth(user).signOut()
            .then(() => {
                history.push('/sign-in')
            })
    }
    return (
        <>
        <AdminHeader />
        <section className="dashboard">
            
            <h2 className="dashboard__title">Welcome to your Dashboard</h2>
            
            <div className="dashboard__wrap">
                <AddMenu />
                <AddUser />
            </div>
            <button className="dashboard__logout" variant="link" onClick={(e) => logOut(e)}>Logout</button>
        </section>
        </>
    )
}

export default Dashboard