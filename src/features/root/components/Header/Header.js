import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
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
                <Lnk name="Binary Tree"></Lnk>
                <Lnk name="Algorithms"></Lnk>
                <Lnk name="Taxes"></Lnk>
                <Lnk name="Hijri Age"></Lnk>
                <Lnk name="Colors"></Lnk>
            </ToolBarFlex>
        </AppBar>
    )
}

const Lnk = ({ name }) => {
    return <Link to={'/' + name.toLowerCase().replace(/ /g, '')}>
        <Typography color='primary'>{name}</Typography>
    </Link>
}

export default Header;