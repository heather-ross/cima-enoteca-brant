import React, { useContext, useState } from 'react';
import './styles/styles.scss';
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import Home from './pages/Home/Home';
import AdminHeader from './components/AdminHeader/AdminHeader';
import SignIn from './components/SignIn/SignIn';
import Dashboard from './components/Dashboard/Dashboard';
import ResetPassword from './components/ResetPassword/ResetPassword';
import ProtectedRoute from './components/Protected/Protected';
import { AuthContext } from './contexts/AuthContext';
import sectionData from './data/sectioncontent.json';


const App = () => {
  const { value } = useContext(AuthContext);
  const location = useLocation();
  const [data] = useState(sectionData);

  return (
    <>
      {location.pathname !== '/' && <AdminHeader />}
      <Switch>
        <Route path='/' exact>
          <Home sectionData={data} />
        </Route>
        {!!value.currentUser && (<Redirect from='/sign-in' to='/dashboard' />)}
        <Route path='/sign-in' component={SignIn} />
        <ProtectedRoute path='/dashboard'
          component={Dashboard}  />
        <Route path='/reset' component={ResetPassword} />
      </Switch>
    </>
  )

}

export default App;
