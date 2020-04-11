import React from 'react';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Root from './features/root/Root';


function App() {
  return (
    <Router>
      <Root></Root>
    </Router>

  );
}

export default App;
