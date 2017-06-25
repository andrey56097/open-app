import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// import './Menu.css';

// import Module1 from './Module1';
// import Module2 from './Module2';
// import Module3 from './Module3';

class MainContent extends Component {
    render() {

        return (
            <Switch>
                {/*<Route path='/Module1' component={Module1} />
                <Route path='/Module2' component={Module2} />
                <Route path='/Module3' component={Module3} />*/}
            );
        </Switch>
        );
    }
}

export default MainContent;