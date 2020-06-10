import React from 'react';
import SearchCase,{ReportedCase} from './cases/reported_case'
import Nav from './nav'
import './App.css'

function App() {
  return (
    <div className="App">
      <Nav/>
      <hr/>
      <div className='container'>
      <SearchCase/>
      <hr/>
      <ReportedCase/>
    </div>
    </div>
  );
}

export default App;
