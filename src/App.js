import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import SignUp from './components/sign_up'
import LoginForm from './components/login_form'
import Homepage from './components/homepage'

class App extends Component {

  render() {
    return (
      <div className="App">
          <Router>
            <div>
              <Route exact path='/' render={Homepage}/>
              <Route exact path='/signup' render={() => <SignUp />}/>
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
