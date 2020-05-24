import React, { Component } from 'react';
import { Layout, Typography } from 'antd';
import SignupLayout from '../components/signup_layout';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class SignUp extends Component {
  render() {

    return (
        <SignupLayout />
    );
  }
}