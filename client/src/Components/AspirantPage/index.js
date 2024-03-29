import React from 'react'
import { Alert } from 'react-bootstrap';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { NavContext } from '../common'
import { Home, Jobs, Profile } from './pages';

const AspirantPage = ({ matchUrl }) => {
    const navData = [
        {
            title:'HOME',
            link:'/aspirant'
    },
        {
            title:'PROFILE',
            link:'/aspirant/profile'
    },{
        title:'JOBS',
            link:'/aspirant/jobs'
    }
]

    return (
        <NavContext.Provider value={navData}>
            <Router>
                <switch>
                    <Route exact path={`${matchUrl}/`} component={Home}></Route>
                    <Route exact path={`${matchUrl}/profile`} component={Profile}></Route>
                    <Route exact path={`${matchUrl}/jobs`} component={Jobs}></Route>
                </switch>

            </Router>
        </NavContext.Provider>
    )
}
export default AspirantPage
