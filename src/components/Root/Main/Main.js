import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NodesContainer from '../../Algorithms/BinaryTree/Nodes/Container/NodesContainer'
import Colors from '../../../components/Colors/Colors';
import BestTrade from '../../Algorithms/BestTrade/BestTrade';

const Main = () => {

    return (
        <Router>
            <Route exact path="/algorithm/binarytree" component={NodesContainer}></Route>
            <Route exact path="/algorithm/besttrade" component={BestTrade}></Route>
            <Route exact path="/color" component={Colors}></Route>
        </Router>
    )

}

export default Main;