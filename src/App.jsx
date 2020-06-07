import React from 'react';
import TopBar from './containers/topbar/topBar';
import Main from './containers/main/main';
import {Navbar, NavDropdown, Nav, Button} from 'react-bootstrap';
import Footer from './containers/footer/footer';

function App() {
  return (

      <div className="App">
        <header className="App-header">
          <TopBar/>
        </header>
          <Main/>
          <Footer/>
      </div>
    
  );
}

export default App;
