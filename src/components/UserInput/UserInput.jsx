import React from 'react'

const UserInput = ({ label, name, placeholder, onChange }) => {
    return (
        <>
            <label htmlFor="user-input-label" className="user-input__label">{label}</label>
            <input
                type="text"
                name={name}
                className={error ? "user-input__error" : "user-input__input"}
                placeholder={placeholder}
                onChange={onChange}>
            </input>
            {error && (
                <div className="user-input__error">
                    <p className="user-input__error-message">{error}</p>
                </div>
            )}
        </>
    )
}

export default UserInput
