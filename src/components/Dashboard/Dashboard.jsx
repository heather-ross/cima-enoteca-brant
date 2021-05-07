import React, { useState} from 'react';
import { useHistory } from "react-router-dom";
import AddMenu from '../../components/AddMenu/AddMenu';
import AddUser from '../../components/AddUser/AddUser';
import fire from '../../firebase';
import './Dashboard.scss';

const Dashboard = ({ user, logout, setData, data, ...rest }) => {
    
    const [error, setError] = useState('')
    const history = useHistory()
    const logOut = (e) => {
        e.preventDefault();
        fire.auth(user).signOut()
            .then(() => {
                history.push('/sign-in')
            }) .catch (
                setError('Failed to logout')
            )
    }
    return (
        <>
        <section className="dashboard">
            
            <h2 className="dashboard__title">Welcome to your Dashboard</h2>
            
            <div className="dashboard__wrap">
                <AddMenu setData={setData} data={data}/>
                <AddUser />
            </div>
            <button className="dashboard__logout" variant="link" onClick={(e) => logOut(e)}>Logout</button>
        </section>
        </>
    )
}

export default Dashboard