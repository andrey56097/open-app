import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './HeaderMenu.css';

class HeaderMenu extends Component {
	render() {
		return (

			<header>
				<div className="main-contain">
					<nav className="menu">
						<ul className="first-ul">
							<li><Link to="/"><span>Home</span></Link></li>
							<li><Link to="/Task1"><span>Task1</span></Link></li>
							<li><Link to="/Task2"><span>Task2</span></Link></li>
							<li><Link to="/Task3"><span>Task3</span></Link></li>
						</ul>
					</nav>
				</div>
			</header>

		);
	}
}

export default HeaderMenu;