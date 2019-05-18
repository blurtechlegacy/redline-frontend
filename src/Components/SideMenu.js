import React from 'react';
import '../Styles/SideMenuStyles.css';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import classNames from 'classnames'
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
    margin: {
        margin: theme.spacing.unit,
    },
});

export class SideMenu extends React.Component{
    render(){
        return(
            <div className="items-container">
                <div className="title-text">
                    Маршруты
                </div>
                <ExpansionPanel className="expandable-item">
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <div className="subtitle-text">Популярное</div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <div className="expand-item">
                            <button className="btn">Маршрут 1</button>
                            <button className="btn">Маршрут 2</button>
                            <button className="btn">Маршрут 3</button>
                        </div>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel className="expandable-item">
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <div className="subtitle-text">Для Вас</div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <div className="expand-item">
                            <button className="btn">Маршрут 1</button>
                            <button className="btn">Маршрут 2</button>
                        </div>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        );
    }
}

SideMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SideMenu);
