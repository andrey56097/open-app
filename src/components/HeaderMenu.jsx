import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './HeaderMenu.css';

class HeaderMenu extends Component {
    render() {
   {/*<div className="primary-menu">
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
             
<div class="main-contain">
			<nav class="menu">
				<ul class="first-ul">
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#" class="dd">Services</a>
						<ul class="dd-ul">
							<li>
								<a href="#">Web</a>
							</li>
							<li>
								<a href="#">Graphic</a>
							</li>
							<li>
								<a href="#">Social Media</a>
							</li>
							<li>
								<a href="#">Mobile Apps</a>
							</li>
						</ul>
					</li>
					<li>
						<a class="#">About us </a>
						<ul class="dd-ul">
							<li>
								<a href="#">Web</a>
							</li>
							<li>
								<a href="#">Graphic</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="#">Contact us</a>
					</li>
				</ul>
			</nav>
		</div>

        );
    }
}

export default HeaderMenu;