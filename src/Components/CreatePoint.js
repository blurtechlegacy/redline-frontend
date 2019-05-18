import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";

const style = {
    margin: "10px 0 10px 0",
    fontSize: "1.5rem",
    fontWeight: "500"
}

export default class CreatePoint extends React.Component{
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };
    render(){
        return(
            <div className="items-container">
                <div className="title-text">Create point component</div>
                <form noValidate autoComplete="off">
                    <TextField
                        id="outlined-name"
                        label="Place name"
                        onChange={this.handleChange('name')}
                        margin="normal"
                        fullWidth
                        variant="outlined"
                        style={style}
                    />
                    <TextField
                        id="outlined-name"
                        label="Description"
                        multiline
                        onChange={this.handleChange('name')}
                        margin="normal"
                        fullWidth
                        variant="outlined"
                        style={style}
                    />
                </form>
                <div className="create-button-centered">
                    <Button variant="outlined" color="primary">
                        Create Point
                    </Button>
                </div>
            </div>
        );
    }
}
