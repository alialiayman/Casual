import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './sidenav.scss'

const SideNav = () => {
    return (
        <React.Fragment>

            <Router>
                <Route exact path="/algorithm" component={AlgorithmNav}></Route>
            </Router>
        </React.Fragment>
    )

}

const AlgorithmNav = () => {
    return (
        <Router>
            <nav aria-label="secondary" className="sidenav-container">
                <ul className="sidenav-ul">
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
                    <li>
                        <Link to="/algorithm/facebook"  >Facebook</Link>
                    </li>
                </ul>
            </nav>
        </Router>

    )
}

export default SideNav;