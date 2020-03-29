import React from 'react';
import './App.css';
import Header from './components/header/header';
import NodesContainer from './components/Nodes/Container/NodesContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <NodesContainer />
    </div>
  );
}

export default App;
