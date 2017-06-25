import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import './HeaderMenu.css';

class HeaderMenu extends Component {
    render() {

        return (
            <header>
                <div className="primary-menu">
                    <nav>
                        <ul>
                            <li><Link to="/"><span>Home</span></Link></li>
                            <li><Link to="/Module1"><span>Task1</span></Link></li>
                            <li><Link to="/Module2"><span>Task2</span></Link></li>
                            <li><Link to="/Module3"><span>Task3</span></Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default HeaderMenu;