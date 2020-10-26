
import React from 'react';

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import AspirantPage from './Components/AspirantPage';
import JobsPage from './Components/JobsPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import TestPage from './Components/TestPage';

require('dotenv').config();

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/aspirant"
            render={({match}) => (<AspirantPage matchUrl={match.url}/>)}></Route>
            {/* THIS ROUTE IS BETTER SET IN HOMEPAGE LOGIN WITH HOC CONTAINING USERNAME */}
          <Route path="/jobs"
            render={({match}) => (<JobsPage matchUrl={match.url}/>)}></Route>
          <Route path="/test"
            render={({match}) => (<TestPage  matchUrl={match.url} />)}></Route>
        </Switch>


      </div>
    </Router>
  );
}

export default App;
