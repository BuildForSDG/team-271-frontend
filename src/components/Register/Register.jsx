import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import urls from '../urls';

const Register = () => {
  const [signupValues, setSignupValues] = useState({
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirm: ''
  });

  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post(urls.registerUrl, signupValues)
      .then((res) => {
        console.log(res.data);
        if (res.status === 201) {
          history.push('/login');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container col-md-5">
      <h2 className="text-center text-primary">Signup</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label className="font-weight-bold" htmlFor="username">
            Username:
          </label>
          <input
            type="text"
            onChange={(e) => setSignupValues({ ...signupValues, username: e.target.value })}
            className="form-control"
            id="username"
            placeholder="Enter username"
            name="username"
            required
          />
        </div>
        <div className="form-group">
          <label className="font-weight-bold" htmlFor="firstname">
            First Name:
          </label>
          <input
            type="text"
            onChange={(e) => setSignupValues({ ...signupValues, first_name: e.target.value })}
            className="form-control"
            id="firstname"
            placeholder="Enter First Name"
            name="firstname"
            required
          />
        </div>
        <div className="form-group">
          <label className="font-weight-bold" htmlFor="lastname">
            Last Name:
          </label>
          <input
            type="text"
            onChange={(e) => setSignupValues({ ...signupValues, last_name: e.target.value })}
            className="form-control"
            id="lastname"
            placeholder="Enter Last Name"
            name="lastname"
            required
          />
        </div>
        <div className="form-group">
          <label className="font-weight-bold" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            onChange={(e) => setSignupValues({ ...signupValues, email: e.target.value })}
            className="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
            required
          />
        </div>
        <div className="form-group">
          <label className="font-weight-bold" htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            onChange={(e) => setSignupValues({ ...signupValues, password: e.target.value })}
            className="form-control"
            id="password"
            placeholder="Enter password"
            name="password"
            required
          />
        </div>
        <div className="form-group">
          <label className="font-weight-bold" htmlFor="password-confirm">
            Confirm Password:
          </label>
          <input
            type="password"
            onChange={(e) => setSignupValues({ ...signupValues, password_confirm: e.target.value })}
            className="form-control"
            id="password-confirm"
            placeholder="Confirm password"
            name="password-confirm"
            required
          />
        </div>
        <button type="submit" className="btn btn-secondary text-center">
          Register
        </button>
      </form>
      <Link to="/login">
        <p>Have an account?</p>
      </Link>
    </div>
  );
};

export default Register;
