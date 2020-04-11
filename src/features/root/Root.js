import React from 'react';
import Header from './components/Header/Header';
import  {Route} from 'react-router-dom';
import Algorithms from '../algorithms/Algorithms'
import BinaryTree from '../BinaryTree/BinaryTree'

const Root = ()=> {
    return (
        <React.Fragment>
            <Header />
            <Route exact path="/" component={null}></Route>
            <Route exact path="/binarytree" component={BinaryTree}></Route>
            <Route exact path="/algorithms" component={Algorithms}></Route>
        </React.Fragment>
    )
}

export default Root;