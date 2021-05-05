import React from 'react';
import './styles/styles.scss';
import { Switch, Route } from  "react-router-dom";
import fire from './config/firebase';
import Home from './pages/Home/Home';
import AdminHeader from './components/AdminHeader/AdminHeader';
import SignIn from './components/SignIn/SignIn';
import Dashboard from './components/Dashboard/Dashboard';
import ResetPassword from './components/ResetPassword/ResetPassword';


class App extends React.Component {
  state = {
    user: {}
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
        // localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null});
        // localStorage.removeItem('user');
      }
    });
  }
  


  render() {
    console.log(this.state)
    return (
      <>
         {/* {this.state.user && (<Home/>) !== (<AdminHeader />)} */}
         {/* {this.state.user ? (<Dashboard />) : (<Home/>) } */}

        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/sign-in' component={SignIn}/>
          <Route path='/dashboard' render={() => <Dashboard user={this.state.user}/>}/>
          <Route path='/reset' component={ResetPassword}/>
        </Switch>
        
      </>
    )
  }
}

export default App;