import React from 'react';
import TopBar from './containers/topbar/topBar';
import Main from './containers/main/main';
import Footer from './containers/footer/footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ReportedCaseSearch from './cases/reported_case'
import {ReportedCase} from './cases/reported_case'



function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <header className="App-header">
            <TopBar/>
          </header>
            <Route path="/" exact component={Main}/>
            <hr/>
            <div className='container'>
            <ReportedCaseSearch/>
            <hr/>
            <ReportedCase/>
            <hr/>
            </div>
            <Footer/>
        </div>
      </Switch>
    </Router>
    
  );
}

export default App;
