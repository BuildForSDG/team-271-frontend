import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from './containers/topbar/topBar';
import Main from './containers/main/main';
import Footer from './containers/footer/footer';



function App() {
  return (
    <React.Fragment>
        <TopBar/>
        <Main/>
        <Footer/>
    </React.Fragment>
  );
}

export default App;
