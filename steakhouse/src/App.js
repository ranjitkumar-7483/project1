import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Route, Switch } from 'react-router-dom';
import HomeScreen from './containers/home';
import ReservationScreen from './containers/reservation';
import ContactUsScreen from './containers/contactus';
import UnImplementedScreen from './containers/unimplemented';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/reservation" component={ReservationScreen} />
        <Route path="/contactus" component={ContactUsScreen} />
        <Route path="/*" component={UnImplementedScreen} />
      </Switch>
    );
  }
}

export default App;
