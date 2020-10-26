import React from 'react'
import {BrowserRouter as Router , Route,Switch} from 'react-router-dom'
import {TestGet,TestSet} from './pages'

function TestPage({matchUrl,_id}) {
    return (
        <Router>
            <Route exact path={`${matchUrl}/get/:_id`} render={({match})=>(
                <TestGet _id={match.params._id}/>
            )}/>
        </Router>
    )
}



export default TestPage
