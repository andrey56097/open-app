import React, {Component} from 'react';
import './XXXTask.css';

import NewComponent from './NewComponent';

class XXXTask extends Component {
  constructor(props) {
        super(props);
        this.state = {
            value: '',
            result: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        const regex = this.props.id === 1 ? /^[0-9\s]+$/ : /^[0-9]+$/;
        if (event.target.value === '' || regex.test(event.target.value)) {
            this.setState({ value: event.target.value });
        }
    }

    handleClick(event) {
        if (this.state.value !== '') {
            let res = this.props.func(this.state.value);
            this.setState({ result: res });
        }
        else {
             this.setState({ result: '' });
        }
    }

    outputResult() {
        if (typeof this.state.result === 'object') {
            return this.state.result.map(function (item, i) {
                return <p key={i}>{item}</p>
            });
        } else {
            return <p>{this.state.result}</p>
        }
    }

    render() {
        return (
            <div className= {this.props.className + " task-container"}>
                <h3>{this.props.title}</h3>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <button onClick={this.handleClick}>Do</button>
                <div className="task-result">{this.outputResult()}</div>
            </div>
        );
    }


}

export default XXXTask;