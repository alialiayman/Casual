import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Root/Header/Header';

import NodesContainer from './components/Algorithms/BinaryTree/Nodes/Container/NodesContainer';
import BestTrade from './components/Algorithms/BestTrade/BestTrade';
import Flatten from './components/Algorithms/Flatten/Flatten';
import PopularToys from './components/Algorithms/PopularToys/PopularToys';
import Decks from './components/Algorithms/Decks/Decks';
import LinkedWords from './components/Algorithms/LinkedWords/LinkedWords';

function App() {
  return (
    <Router>
      <Header></Header>
      <main>
        <Route exact path="/binarytree" component={NodesContainer}></Route>
        <Route exact path="/besttrade" component={BestTrade}></Route>
        <Route exact path="/flatten" component={Flatten}></Route>
        <Route exact path="/popular" component={PopularToys}></Route>
        <Route exact path="/decks" component={Decks}></Route>
        <Route exact path="/words" component={LinkedWords}></Route>
      </main>
    </Router>

  );
}

export default App;
