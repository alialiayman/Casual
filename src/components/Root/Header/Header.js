import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import './header.scss';

const Header = () => {

    return (
        <Router>
            <nav aria-label="main">
                <ul>
                    <li>
                        <Link to="/algorithm"  >Algorithms</Link>
                    </li>
                    <li>
                        <Link to="/birthday"  >Birthdays</Link>
                    </li>
                    <li>
                        <Link to="/color"  >Colors</Link>
                    </li>
                </ul>
            </nav>
        </Router>
    )

}

export default Header;