import React from 'react';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import FormHook from './components/FormHook';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <h1 className="text-center">Welcome to the Wonya App</h1>
      {/* <LoginForm />
      <SignupForm /> */}
      <FormHook />
    </div>
  );
}

export default App;
