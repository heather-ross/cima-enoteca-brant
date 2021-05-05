import React from 'react';
import './AddUser.scss';

const AddUser = () => {

    
    return (
        <section className="add-menu">
            <h3 className="add-menu__title">Create a New User</h3>
            
            <form
                className="add-user__form"
                id="addUserForm"
                name="addUserForm"
                // onSubmit={handleSubmit}
            >
                <div className="add-user__details">

                    <input
                        label="Email"
                        placeholder="Email"
                        name="email"
                        id="email"
                        type="email"
                        // ref={emailRef}
                        required />
                    <input
                        label="Create Password"
                        placeholder="Create Password"
                        name="password"
                        id="password"
                        type="password"
                        // ref={passwordRef}
                        required />
                    <input
                        label="Re-enter Password"
                        placeholder="Re-enter Password"
                        name="confirmPassword"
                        id="confirmPassword"
                        type="password"
                        // ref={passwordConfirmRef}
                        required />
                </div>
                <button className="add-user__button form__button" type="submit" disabled=''>Create Account</button>
            </form>
        </section>
    )
}

export default AddUser
