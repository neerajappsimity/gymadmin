// App.js

import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

// import Header from './components/Header';
// import SideBar from './components/Sidebar';
// import Content from './components/Content'
import User from './components/users/User'
import Task from './components/tasks/Task'
import Profile from './components/users/Profile'
import Exercise from './components/exercises/Exercise'
import AddExercise from './components/exercises/AddExercise'
import UpdateExercise from './components/exercises/UpdateExercise'

import Login from './components/Login'
import ChangePassword from './components/users/ChangePassword';

export default class App extends Component{

  render() {
    return (
      <div>
        <BrowserRouter>
        <Route exact path='/' component={Login} />
        <Route exact path='/users' component={User} />
        <Route exact path='/tasks' component={Task} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/exercise' component={Exercise} />
        <Route exact path='/addexercise' component={AddExercise} />
        <Route exact path='/updateexercise/:exerciseId' component={UpdateExercise} />
        <Route exact path='/changepassword' component={ChangePassword} />
        </BrowserRouter>
      </div>
    );
  }
}

// export default App;
