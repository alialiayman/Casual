import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './sidenav.scss'

const SideNav = () => {

    return (
        <Router>
            <Route path="/algorithm" component={AlgorithmNav}></Route>
        </Router>
    )

}

const AlgorithmNav = () => {
    return (
        <Router>
            <nav aria-label="secondary">
                <ul>
                    <li>
                        <Link to="/algorithm/besttrade" exact > Best Trade </Link>
                    </li>
                    <li>
                        <Link to="/algorithm/deck" >Decks</Link>
                    </li>
                    <li>
                        <Link to="/algorithm/flaten"  >Flaten</Link>
                    </li>
                    <li>
                        <Link to="/algorithm/toys"  > PopularToys</Link>
                    </li>
                    <li>
                        <Link to="/algorithm/words"  >Linked words</Link>
                    </li>
                    <li>
                        <Link to="/algorithm/binarytree"  >Binary Tree</Link>
                    </li>
                </ul>
            </nav>
        </Router>
    )
}

export default SideNav;