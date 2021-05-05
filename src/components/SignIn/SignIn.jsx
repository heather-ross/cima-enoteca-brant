import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import './SignIn.scss';
import fire from '../../config/firebase';
import AdminHeader from '../../components/AdminHeader/AdminHeader';


const SignIn = () => {
    const [loginDetails, setLoginDetails] = useState({
        email: '',
        password: ''
    })

    const history = useHistory()

    const handleChange = (e) => {
        setLoginDetails({
            ...loginDetails,
            [e.target.name]: e.target.value,
        });
    };

    const login = (e) => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(loginDetails.email, loginDetails.password)
            .then((user) => {
                if (user) {
                    history.push('/dashboard')
                }
            }).catch((error) => {
                console.error(error);
            });
    }

    return (
        <>
            <AdminHeader />
            <section className="sign-in">
                <div className="sign-in__wrap">
                    <h2 className="sign-in__title">CIMA Sign In</h2>
                    <form
                        className="sign-in__form"
                        id="signInForm"
                        name="signInForm">
                        <div className="sign-in__details">
                            <input
                                label="User Email"
                                placeholder="Enter email"
                                name="email"
                                type="email"
                                value={loginDetails.email}
                                onChange={(e) => handleChange(e)} />
                            <input
                                label="Password"
                                placeholder="Password"
                                name="password"
                                type="password"
                                value={loginDetails.password}
                                onChange={(e) => handleChange(e)} />
                        </div>

                        <button
                            className="sign-in__button form__button"
                            type="submit"
                            onClick={(e) => login(e)}>
                            Sign In
                            </button>
                    </form>
                    <p className="sign-in__reset-pass">Forget password? <Link to='/reset'>Reset</Link></p>
                </div>
            </section>
        </>
    )

}

export default SignIn
