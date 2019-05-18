import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";

const style = {
    margin: "10px 0 10px 0",
    fontSize: "1.5rem",
    fontWeight: "500"
};

export default class CreatePoint extends React.Component{
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };
    render(){
        return(
            <div className="items-container">
                <div className="title-text">Оцените место</div>
                <input className="input-outline" placeholder="Название места"></input>
                <input className="input-outline" placeholder="Описание места"></input>
                <div className="create-button-centered">
                    <button className="btn">Сохранить</button>
                </div>
            </div>
        );
    }
}
