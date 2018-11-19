import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Dashboard from './components/dashboard/Dashboard'
import './App.css';
import ProjectDetails from './components/project/ProjectDetails';
import SignIn from './components/auth/Signin'
import SignUp from './components/auth/Signup'
import CreateProject from './components/project/CreateProject'
class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <div className="App">
        <Navbar/>
        <Switch>
          <Route path='/' component={Dashboard} exact/>
          <Route path='/project/:id' component={ProjectDetails} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/createproject' component={CreateProject} />
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
