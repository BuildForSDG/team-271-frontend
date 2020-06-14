import React, { useState } from 'react';
import { useHistory, Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import urls from '../urls';

const Login = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [loginValues, setLoginValues] = useState({
    login: '',
    password: ''
  });

  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post(urls.loginUrl, loginValues)
      .then((res) => {
        if (res.status === 200) {
          setLoggedIn(true);
        } else {
          setIsError(true);
        }
      })
      .catch((error) => {
        console.log(error)
        setIsError(true);
      });
  };

  if (isLoggedIn) {
    localStorage.setItem('loginStatus', true);
    history.push('/home')
    // return <Redirect to="/home" />;
  }
  if (isError) {
    return <Redirect to="/" />;
  }

  return (
    <div className="container col-md-5">
      <h2 className="text-center text-primary">Login</h2>
      <div>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label className="font-weight-bold" htmlFor="username">
              Username:
            </label>
            <input
              type="text"
              onChange={(e) => setLoginValues({ ...loginValues, login: e.target.value })}
              className="form-control"
              id="username"
              placeholder="Enter username"
              name="username"
              required
            />
          </div>
          <div className="form-group">
            <label className="font-weight-bold" htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              onChange={(e) => setLoginValues({ ...loginValues, password: e.target.value })}
              className="form-control"
              id="password"
              placeholder="Enter password"
              name="password"
              required
            />
          </div>
          <button type="submit" className="btn btn-secondary text-center">
            Login
          </button>
        </form>
        <Link to='/register'><p>Don't have an account?</p></Link>
      </div>
    </div>
  );
};

export default Login;
