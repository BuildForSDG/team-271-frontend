import React, { Component } from 'react';
import LoginLayout from '../components/login_layout';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class Login extends Component {
  render () {
    return (
      <LoginLayout />
    );
  }
}