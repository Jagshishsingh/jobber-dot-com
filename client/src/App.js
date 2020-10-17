import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import AspirantPage from './Components/AspirantPage';

function App() {
  return (
    <Router>
    <div className="App">
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/aspirant" exact component={AspirantPage}></Route>
        </Switch>
      

    </div>
    </Router>
  );
}

export default App;
