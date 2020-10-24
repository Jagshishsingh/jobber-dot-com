import React from 'react'
import { Profile, Home } from './pages';
import { SideNavBar } from './common'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

 const AspirantPage= ({matchUrl})=> {

    return (
        <Router>
            <switch>
                <Route exact path={`${matchUrl}/`} component={Home}></Route>
                <Route exact path={`${matchUrl}/profile`}  component={Profile}></Route>
            </switch>
            
        </Router>
    )
}
export default AspirantPage
