import React, { Component } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

// import './Menu.css';

// import Task1 from '../lab1/lab1';
import Task2 from './Task2';
import Task3 from './Task3';

class MainContent extends Component {

    render() {

        return (

            // <Router history={hashHistory}>
      		// <Route path='/' component={App} >
      		// 	<Route path='lab2' component={Lab2} />
      		// 	<Route path='lab3' component={Lab3} />
      		// 	<IndexRoute component={Home}/>
      		// </Route>
      		// <Route path='/lab1' component={Lab1} >
      		// </Route>
    	    // </Router>

            <Switch>
               
                {/*<Link to path='/Task1' component={Task1}/>*/}
                <Route path='/Task2' component={Task2} />
                <Route path='/Task3' component={Task3} />

                {/*<Route>
                <Route path='/Task1' component={Task1}/>
                </Route>*/}
            </Switch>
            
        );
    }
}

export default MainContent;