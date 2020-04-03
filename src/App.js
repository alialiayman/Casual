import React from 'react';
import './App.scss';
import Header from './components/Root/Header/Header';
import SideNav from './components/Root/SideNav/SideNav';
import Main from './components/Root/Main/Main';


function App() {
  return (
    <main className="main-container">
      <div className="header">
        <Header></Header>
      </div>
      <div className="main-body">
        <div className="side-nav">
          <SideNav></SideNav>
        </div>
        <div className="main">
          <Main></Main>
        </div>

      </div>
    </main>

  );
}

export default App;
