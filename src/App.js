import React, { useState } from 'react';
import './styles/styles.scss';
import { Switch, Route, Redirect } from "react-router-dom";
import fire from 'firebase';
import Home from './pages/Home/Home';
import AdminHeader from './components/AdminHeader/AdminHeader';
import SignIn from './components/SignIn/SignIn';
import Dashboard from './components/Dashboard/Dashboard';
import ResetPassword from './components/ResetPassword/ResetPassword';
import ProtectedRoute from './components/Protected/Protected';
import { AuthProvider } from './contexts/AuthContext';

const App = () => {
  
    return (
      <>

        <Switch>
          <AuthProvider>
          <Route path='/' exact component={Home} />
          <Route path='/sign-in' component={SignIn} />
          <ProtectedRoute path='/dashboard' component={Dashboard} />
          <Route path='/reset' component={ResetPassword} />
          </AuthProvider>
        </Switch>

      </>
    )

}

export default App;
