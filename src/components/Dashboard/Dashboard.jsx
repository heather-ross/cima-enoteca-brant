import React, { useContext, useState } from 'react';
import { useHistory } from "react-router-dom";
import { AuthContext } from '../../contexts/AuthContext';
import AddMenu from '../AddMenu/AddMenu';
// import AddUser from '../../components/AddUser/AddUser';
import fire from '../../firebase';
import './Dashboard.scss';

const Dashboard = ({ user }) => {

    const { values } = useContext(AuthContext);
    const [error, setError] = useState('');

    const history = useHistory()
    const logOut = (e) => {
        e.preventDefault();
        fire.auth(user).signOut()
            .then(() => {
                history.push('/sign-in')
            }).catch(
                setError('Failed to logout')
            )
    }

    return (
        <>
            <section className="dashboard">

                <h2 className="dashboard__title">Welcome to your Dashboard</h2>
                <p className="dashboard__logged-in">Logged in as {values.currentUser.email}</p>
                <AddMenu />
                {/* <AddUser /> */}
                <button className="dashboard__logout" variant="link" onClick={logOut}>Logout</button>
                <p>{error}</p>
            </section>
        </>
    )
}

export default Dashboard