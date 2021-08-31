import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from "react-router-dom";
import { AuthProvider } from './contexts/AuthContext';
import App from './App';
// import reportWebVitalss from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
    <Router basename={'/projects/project-cima'}>
      <App />
    </Router>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
