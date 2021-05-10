// import React, { useState, useContext, useRef } from 'react';
// import { Link } from "react-router-dom";
// import '../SignIn/SignIn.scss';
// import { AuthContext } from '../../contexts/AuthContext';

// const UpdateUser = () => {
//     const nameRef = useRef();
//     const emailRef = useRef();
//     const passwordRef = useRef();
//     // const { value } = useContext(AuthContext);
//     const { login } = useContext(AuthContext);
//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(false);

//     async function handleSubmit(e) {
//         e.preventDefault();
//         try {
//             setError('')
//             setLoading(true)
//             await login(emailRef.current.value, passwordRef.current.value, nameRef.current.value)
//         } catch {
//             setError('Failed to Sign-in')
//         }
//         setLoading(false)
//         e.target.reset();
//     }

//     return (
//         <>
//             <section className="sign-in">
//                 <div className="sign-in__wrap">
//                     <h2 className="sign-in__title">Update User</h2>
//                     <form
//                         className="sign-in__form"
//                         id="UpdateUserForm"
//                         name="UpdateUserForm"
//                         onSubmit={handleSubmit}>

//                         <div className="sign-in__details">
//                             <input
//                                 label="Display Name"
//                                 placeholder="Display Name"
//                                 name="displayName"
//                                 id="displayName"
//                                 type="text"
//                                 ref={nameRef}
//                                 required />
//                             <input
//                                 label="User Email"
//                                 placeholder="Enter email"
//                                 name="email"
//                                 type="email"
//                                 ref={emailRef}
//                                 required />
//                             <input
//                                 label="Password"
//                                 placeholder="Password"
//                                 name="password"
//                                 type="password"
//                                 ref={passwordRef}
//                                 required />
//                         </div>

//                         <button
//                             className="sign-in__button form__button"
//                             type="submit"
//                             disabled={loading}>
//                             Sign In
//                             </button>
//                     </form>
//                     <p className="form-error">{error}</p>
//                     <p className="sign-in__reset-pass">Forget password?
//                     <Link to='/reset'>Reset</Link>
//                     </p>
//                 </div>
//             </section>
//         </>
//     )

// }

// export default UpdateUser