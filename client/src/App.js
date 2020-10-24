import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import AspirantPage from './Components/AspirantPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/aspirant"
            render={({match}) => (<AspirantPage matchUrl={match.url}/>)}></Route>
        </Switch>


      </div>
    </Router>
  );
}

export default App;
