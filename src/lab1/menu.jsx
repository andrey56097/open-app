import React from 'react';

class Lab1Menu extends React.Component {

    constructor(props) {
        super(props);
        this.items = ['кино', 'сериалы', 'афиша', 'тексты', 'программы и шоуc']
        this.logo = "assets/images/logo.png"
    }
    render() {
        let menuItems = [];
        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            var url = item.url | '#';
            menuItems.push(<a href="#" className="menu-item" key={i} >{this.items[i]}</a>);
        }
        return <div id="head-panel" className="padding-container">
            <img id="logo" src={this.logo}></img>
            <div id="logo-title">Открой мир кино с нами</div>
            <div className="menu">
              {menuItems}
            </div>
        </div>
    }
}

export default Lab1Menu;
