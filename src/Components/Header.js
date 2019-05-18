import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import logo from '../Assets/Logo.svg';
import '../Styles/HeaderStyles.css';
import Typography from '@material-ui/core/Typography';
import TextField from "@material-ui/core/TextField";

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

const style = {
    margin: "10px 0 10px 0",
    fontSize: "1.5rem",
    fontWeight: "500"
};

function ButtonAppBar(props) {
    const { classes } = props;
    return (
        <div className="nav-container">
            <AppBar position="static" color="inherit" className="nav-shadow">
                <Toolbar>
                    <img src={logo} className="logo" width="48" height="48"/>
                    <Typography variant="h6" className={classes.root} color="inherit">
                        <div className="brand">
                            КРАСНАЯ ЛИНИЯ
                        </div>
                    </Typography>
                    <input type="text" placeholder="Логин" className="input-outline"></input>
                    <input type="text" placeholder="Пароль" className="input-outline"></input>
                    <button className="btn">Войти</button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
