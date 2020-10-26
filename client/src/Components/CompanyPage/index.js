import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { Home, Jobs } from './pages';
import { NavContext } from '../common'


const CompanyPage = ({ matchUrl }) => {
    const navData = [
        {
            title: 'HOME',
            link: '/company'
        },
        {
            title: 'JOBS',
            link: '/company/jobs'
        }
    ]

    return (
        <NavContext.Provider value={navData}>

            <Router>
                <switch>
                    <Route exact path={`${matchUrl}/`} component={Home}></Route>
                    <Route exact path={`${matchUrl}/jobs`} component={Jobs}></Route>
                </switch>

            </Router>
        </NavContext.Provider>

    )
}
export default CompanyPage
