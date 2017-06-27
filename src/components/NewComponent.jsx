import React, { Component } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

class NewComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: props.config.config 
        };
    }

    outputResult() {

        if (typeof this.state.data === 'object') {
            return this.state.data.map(function (item, i) {
                return <p key={i}>{item}</p>
            });
        } else {
            return <p>{this.state.data}</p>
        }
    }

    render() {
        
        console.log(this.outputResult());

        return <div>
            {this.outputResult()}
        </div>;
    }
}

export default NewComponent;

