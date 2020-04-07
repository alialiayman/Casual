import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import './header.scss';
import { Toolbar, Typography } from '@material-ui/core';

const ToolBarFlex = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-around'
});

const Header = () => {

    return (

        <AppBar position='static' color="transparent">
            <ToolBarFlex>
                <Link to="/"><Typography>
                    Home
                </Typography></Link>

                <Link to="/binarytree"  >Binary Tree</Link>
                <Link to="/besttrade"  >Best Trade</Link>
                <Link to="/flatten"  >Flatten</Link>
                <Link to="/popular"  >Popular</Link>
                <Link to="/decks"  >Decks</Link>
                <Link to="/words"  >Words</Link>
                <Link to="/birthday"  >Birthdays</Link>
                <Link to="/color">
                    <Typography>
                        Colors
                    </Typography>

                </Link>

            </ToolBarFlex>
        </AppBar>
    )
}

export default Header;