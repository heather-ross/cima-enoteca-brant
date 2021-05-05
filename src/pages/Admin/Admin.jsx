import React from 'react';
import '../../styles/styles.scss';
// import SignIn from '../../components/SignIn/SignIn';
import AdminHeader from '../../components/AdminHeader/AdminHeader';
import AddMenu from '../../components/AddMenu/AddMenu';
import AddUser from '../../components/AddUser/AddUser';
import './Admin.scss';

const Admin = () => {
    return (
        <>
        <AdminHeader />
        <section className="admin">
            
            <h2 className="admin__title">Welcome to your Dashboard</h2>
            <div className="admin__wrap">
                <AddMenu />
                <AddUser />
                
            </div>
        </section>
        </>
    )
}

export default Admin
