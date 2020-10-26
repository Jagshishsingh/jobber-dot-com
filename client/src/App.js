import React, { createContext } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import AspirantPage from './Components/AspirantPage';
import { UserContext } from './Components/common'
import CompanyPage from './Components/CompanyPage';
import HomePage from './Components/HomePage';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

require('dotenv').config();

function App() {

  // -------------------------------------------------------------------------------
  const fakeAspirant = {
    name: "Jagshish",
    userName: "singhJagshish",
    
  }

  const fakeCompany = {
    companyName: "Facebook",
    userName: "facebookFree"
  }



  // --------------x-----------------------------------------x----------------------


  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomePage}></Route>

          <Route path="/aspirant"
            render={({ match }) => (
              <UserContext.Provider value={fakeAspirant}>
                <AspirantPage matchUrl={match.url} />
              </UserContext.Provider>
            )}></Route>


          <Route path="/company"
            render={({ match }) => (
              <UserContext.Provider value={fakeCompany}>
                <CompanyPage matchUrl={match.url} />
              </UserContext.Provider>
            )}></Route>
        </Switch>


      </div>
    </Router>
  );
}

export default App;
