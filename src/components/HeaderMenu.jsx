import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './HeaderMenu.css';

class HeaderMenu extends Component {
    render() {
        {/*<div classNameName="primary-menu">
                    <nav>
                        <ul>
                            <li><Link to="/"><span>Home</span></Link></li>
                            <li><Link to="/Module1"><span>Task1</span></Link></li>
                            <li><Link to="/Module2"><span>Task2</span></Link></li>
                            <li><Link to="/Module3"><span>Task3</span></Link></li>
                        </ul>
                    </nav>
                </div>*/}
        return (

            <header>
                

<div className="main-contain">
			<nav className="menu">
				<ul className="first-ul">
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#" className="dd">Services</a>
					</li>
					<li>
						<a className="dd">About us </a>
					</li>
					<li>
						<a href="#">Contact us</a>
					</li>
				</ul>
			</nav>
		</div>
            </header>

        );
    }
}

export default HeaderMenu;