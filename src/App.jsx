import React from 'react';
import TopBar from './containers/topbar/topBar';
import Main from './containers/main/main';
import './app.css'
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Footer from './containers/footer/footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <header className="App-header">
            <TopBar />
          </header>
        </div>
        <div>
          <Switch>
            <Route exact path="/home" component={Main} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </div>
        <footer className='fixed-bottom'>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
