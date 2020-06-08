import React from "react";
import TopBar from "./components/topbar/topBar";
// import Main from "./components/main/main";
import Footer from "./components/footer/footer";
import Routes from "./components/Routes";
import LoginForm from "./components/LoginForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { LinkContainer } from "react-router-bootstrap";

function App() {
  return (
    <React.Fragment>
      <div className="App constainer">
        <header className="App-header">
          <TopBar />
        </header>
        <div>
          <Routes />
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
