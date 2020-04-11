import React from './node_modules/react';
import './header.scss'
import logo from './logo.svg';


const Header = () => {
    return <React.Fragment>
        <div className="container">
            <img src={logo} alt="react logo"></img>
            <div>Binary Tree Kiosk</div>
        </div>

    </React.Fragment>
}

export default Header;