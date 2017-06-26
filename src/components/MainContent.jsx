import React, { Component } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

// import './Menu.css';

import Task1 from './Task1';
import Task2 from './Task2';
import Task3 from './Task3';

class MainContent extends Component {

    render() {

        return (
            <Switch>

                {/*<Route path='/Task1' component={Task1} onEnter={redirectToTask1}/>*/}
                <Route path='/Task2' component={Task2} />
                <Route path='/Task3' component={Task3} />
            </Switch>
        );
    }
}

export default MainContent;