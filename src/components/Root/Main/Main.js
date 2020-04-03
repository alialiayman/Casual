import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NodesContainer from '../../Algorithms/BinaryTree/Nodes/Container/NodesContainer'


const Main = () => {

    return (
        <Router>
            <Route path="/algorithm/binarytree" component={NodesContainer}></Route>
        </Router>
    )

}

export default Main;