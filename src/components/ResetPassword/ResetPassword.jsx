import React from 'react';
import { Link } from  "react-router-dom";
import './ResetPassword.scss';
import AdminHeader from '../AdminHeader/AdminHeader';

const ResetPassword = () => {
    return (
        <>
        <AdminHeader />
        <section className="reset">
            <div className="reset__wrap">
            <h2 className="reset__title">Reset Password</h2>
                <form
                    className="reset__form"
                    id="resetForm"
                    name="resetForm">
                    <div className="reset__details">
                        <input
                            label="Reset Password"
                            placeholder="Reset Password"
                            name="userName" />
                        
                    </div>
                    
                    <button className="reset__button form__button"><Link to='/dashboard'>Reset</Link></button>
                    
                </form>
            </div>
        </section>
        </>
    )
}

export default ResetPassword

