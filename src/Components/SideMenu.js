import React from 'react';
import '../Styles/SideMenuStyles.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// пихнуть при тру аутефикации спешал фор ю руты 


const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

export class SideMenu extends React.Component{

submit  = (event) => {
      event.preventDefault();
      var options = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);
     };

    render(){
        return(
            <div className="items-container">
                <div className="title-text">
                    Маршруты
                    <button type="submit" onClick={this.submit} >ГДЕ БЛЯТЬ Я НАХОЖУСЬ</button>
                </div>
                <ExpansionPanel className="expandable-item">
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <div className="subtitle-text">Popular</div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <div className="expand-item">
                            <Button variant="outlined" color="primary">
                                Route 1
                            </Button>
                            <Button variant="outlined" color="primary">
                                Route 2
                            </Button>
                            <Button variant="outlined" color="primary">
                                Route 3
                            </Button>
                        </div>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel className="expandable-item">
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <div className="subtitle-text">Special for you</div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <div className="expand-item">
                            <Button variant="outlined" color="primary">
                                Route 1
                            </Button>
                            <Button variant="outlined" color="primary">
                                Route 2
                            </Button>
                        </div>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        );
    }
}


export default withStyles(styles)(SideMenu);
