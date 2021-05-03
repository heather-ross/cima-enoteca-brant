import React from 'react';
import './styles/styles.scss';
import { Switch, Route } from  "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';


class App extends React.Component {


  render() {
    return (
      <>
        <NavBar /> 
        <Switch>
          <Route path='/' exact component={Home}/>
        </Switch>
        <Footer />
      </>
    )
  }
}

export default App;
