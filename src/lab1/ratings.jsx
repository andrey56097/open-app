import React from 'react';

class Lab1Ratings extends React.Component {

    constructor(props) {
        super(props);
        var vm = this;

        this.selectValue = function(value) {
            if (value >= 0 && value < 6)
                debugger;
                vm.setState({
                    value: value
                });
        }
        this.state = {
            value: this.props.value | 5
        }
        this.onClick = function(value){
            if(this.props.readOnly === true)
                return;
            this.selectValue(value);
        }
    }

    render() {
        let stars = [];
        for (var i = 0; i < 5; i++) {
            stars.push(<div key={i} onClick={this.selectValue.bind(this, i + 1)} className = {"star " +  (i < this.state.value ? " fill" : "")}> </div>);
        }
        return <div className="rating">
                    {stars}
                    <div className="value">{this.state.value}/5</div>
                </div>
    }


}

export default Lab1Ratings;
